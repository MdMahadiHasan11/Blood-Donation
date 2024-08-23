// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import img from '../../../../public/assets/home/empty1.jpg'
import { ToastContainer } from "react-toastify";
import { FaDeleteLeft, FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data;
        }
    })

    const handleRole = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!!!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                    refetch();
                }
            })
    }
    const handleDelete = (id) => {
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

                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
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
            <div className="flex justify-evenly mx-10 my-10">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users:{users.length}</h2>
            </div>

            <section className='  mx-auto'>
                {
                    !users.length ?
                        <>
                            <div className='my-10'>
                                <p data-aos="fade-down"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">All User
                                </p>
                            </div>
                            <p className="text-center text-3xl font-bold">No User !!</p>
                            <div className="flex justify-center items-center" >
                                <img className="my-20 h-[300px]" src={img} alt="" />
                            </div>
                        </> :
                        <>
                            {/* <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"


                        /> */}

                            <div className='my-10'>
                                <p data-aos="fade-down"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">All Volunteers Request
                                </p>
                                <ToastContainer />
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
                                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                        >
                                                            <div className='flex items-center gap-x-3'>
                                                                <span className="text-lg font-bold">User Email:</span>
                                                            </div>
                                                        </th>


                                                        <th
                                                            scope='col'
                                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                        >
                                                            <span className="text-lg font-bold">Status</span>
                                                        </th>

                                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                            <span className="text-lg font-bold">Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {
                                                    users.map((user, index) =>
                                                        <tbody key={user._id} className='bg-white divide-y divide-gray-200 '>
                                                            <tr>
                                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                    {index + 1}
                                                                </td>
                                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                    {user.name}
                                                                </td>
                                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                    {user.email}
                                                                </td>
                                                                <td className=' text-sm whitespace-nowrap'>
                                                                    {
                                                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleRole(user)} className="btn btn-warning"><FaUser/></button>
                                                                    }

                                                                </td>
                                                                <td className=' text-sm whitespace-nowrap'>

                                                                    <button onClick={() => handleDelete(user._id)} className="btn btn-warning"><FaDeleteLeft /> Delete</button>
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
        </div>
    );
};

export default AllUser;