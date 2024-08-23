import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAppointment from "../../../hooks/useAppointment";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const {user}=useAuth();

    const axiosSecure = useAxiosSecure();
    const [refetch, appointmentList] = useAppointment();
    

    const totalPrice=appointmentList.reduce((total,doctor)=>total+doctor.price,0)

    useEffect(() => {
      if(totalPrice > 0){

        axiosSecure.post('/create-payment-intent',{price :totalPrice})
        .then(res=>{
         console.log(res.data.clientSecret)
         setClientSecret(res.data.clientSecret);
        })
      }

    }, [axiosSecure,totalPrice])


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
        } else {
            setError('')
        }
        // confirm payment
        const {paymentIntent ,error : confirmError} = await stripe.confirmCardPayment(clientSecret ,{
            payment_method :{
                card : card ,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('tranction id', paymentIntent.id)
                setTransactionId(paymentIntent.id);

                // save database payment history

                const payment ={
                    email:user.email,
                    price:totalPrice,
                    transactionId:paymentIntent.id,
                    date:new Date(),
                    appointmentIds : appointmentList.map(doctor => doctor._id),
                    doctorIds : appointmentList.map(doctor => doctor.doctorId),
                    status : 'pending'

                }
                const res = await axiosSecure.post('/payments',payment)
                console.log('payment save',res);
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }



            }
        }


    }
    return (
        <div>
            {/* Stripe cart */}
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-primary mt-5" type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </form>
                <div>
                    <p className="text-red-500">
                        {error}
                    </p>
                    {transactionId && <p className="text-green-600">Your Transaction id : {transactionId}</p>}
                </div>

            </div>
            {/* end */}

            <div>
                {appointmentList.length}
                price:{totalPrice}
            </div>

        </div>
    );
};

export default CheckoutForm;