// import React from 'react';

import useAppointment from "../../../hooks/useAppointment";
import img from '../../../../public/assets/home/empty1.jpg'
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AppointmentList = () => {

    const axiosSecure = useAxiosSecure();


    const [refetch, appointmentList] = useAppointment();
    const handleDelete = (_id, doctorId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/appointment/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div>
                <div className="flex justify-between">
                    <h2 className="pl-10 text-2xl">My appointment : {appointmentList.length}</h2>

                    <div>
                        <p className="pr-10 text-2xl"> Price:</p>
                        <div className='px-4 py-4 text-sm whitespace-nowrap'>
                            <Link to='/dashboard/payment'><button className="btn bg-orange-600">PAY</button></Link>
                        </div>
                    </div>
                </div>

                {/*  */}
                <section className='  mx-auto py-12'>
                    {
                        !appointmentList.length ?
                            <>
                                <div className='my-10'>
                                    <p data-aos="fade-down"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">My Appointment
                                    </p>
                                </div>
                                <p className="text-center text-3xl font-bold">No appointment!!</p>
                                <div className="flex justify-center items-center" >
                                    <img className="my-20 h-[300px]" src={img} alt="" />
                                </div>
                            </> :
                            <>

                                <div className='my-10'>
                                    <p data-aos="fade-down"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">My Appointment
                                    </p>
                                </div>
                                {/* <div className='flex items-center gap-x-3'>
                        </div> */}

                                <div className='flex flex-col mt-6'>
                                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                                <table className='min-w-full divide-y divide-gray-200'>
                                                    <thead className='bg-gray-50 text-lg font-bold'>
                                                        <tr>
                                                            <th
                                                                scope='col'
                                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                            >
                                                                <span className="text-lg font-bold">Si No</span>
                                                            </th>
                                                            <th
                                                                scope='col'
                                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                            >
                                                                <div className='flex items-center gap-x-3'>
                                                                    <span className="text-lg font-bold">Name</span>
                                                                </div>
                                                            </th>

                                                            <th
                                                                scope='col'
                                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                            >
                                                                <span className="text-lg font-bold">Time</span>
                                                            </th>

                                                            <th
                                                                scope='col'
                                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                            >
                                                                <span className="text-lg font-bold">Date</span>

                                                            </th>

                                                            <th
                                                                scope='col'
                                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                            >
                                                                <span className="text-lg font-bold">TREATMENT</span>
                                                            </th>
                                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                                <span className="text-lg font-bold">Action</span>
                                                            </th>

                                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                                <span className="text-lg font-bold">Payment</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        appointmentList.map((requestList, index) =>
                                                            <tbody key={requestList._id} className='bg-white divide-y divide-gray-200 '>
                                                                <tr>
                                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                        {index + 1}
                                                                    </td>
                                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                        {requestList.doctorName}
                                                                    </td>

                                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                        {new Date(requestList.startTime).toLocaleTimeString()}
                                                                    </td>

                                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                        <div className='flex items-center gap-x-2'>
                                                                            <p
                                                                                className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                               text-xs'
                                                                            >
                                                                                {new Date(requestList.endTime).toLocaleDateString()}
                                                                                <p>{requestList.price}</p>
                                                                            </p>
                                                                        </div>
                                                                    </td>
                                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                        {requestList.service}
                                                                    </td>
                                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                        <button onClick={() => handleDelete(requestList._id, requestList.doctorId)} className="btn text-red-600 text-xxl"><FaTrashAlt /></button>
                                                                    </td>

                                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                        <Link to='/dashboard/payment'><button className="btn bg-orange-600">PAY</button></Link>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    }
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div> </>

                    }


                </section>
                {/*  */}
            </div>
        </div>
    );
};

export default AppointmentList;