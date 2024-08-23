// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAppointment from "../../hooks/useAppointment";
// import axios from "axios";


const DoctorCart = ({ doctor }) => {

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [refetch, appointmentList] = useAppointment();

    const handleAddCard = (doctor) => {
        if (user && user.email) {
            const appointmentDetails = {
                doctorId: doctor._id,
                doctorName: doctor.name,
                patientEmail: user.email,
                price : doctor.price,

                service: doctor.Specialty,
                startTime: doctor.startTime,
                endTime: doctor.endTime


            }
            axiosSecure.post(`/bookAppointment`, appointmentDetails)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Successfully appointment",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login and booked appointment",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: location.pathname });
                }
            });
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">

            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={doctor.image} />
                    </div>
                </div>
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{doctor.Specialty}
                </h2>
                <div>
                    <p>{new Date(doctor.startTime).toLocaleTimeString()} - {new Date(doctor.endTime).toLocaleTimeString()}</p>
                    <p>price: {doctor.price}</p>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleAddCard(doctor)} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCart;