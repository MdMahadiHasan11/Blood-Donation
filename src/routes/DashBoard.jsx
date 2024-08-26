// import React from 'react';

import { FaAd, FaHistory, FaHome } from "react-icons/fa";
import { FaCartShopping, FaPersonRifle } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../hooks/useAdmin'
import useVolunteer from "../hooks/useVolunteer";

const DashBoard = () => {
    const [isAdmin ]= useAdmin();
    const [isVolunteer]=useVolunteer();



    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminDashboard'> <FaCartShopping />Dashboardd</NavLink></li>

                                <li><NavLink to='/dashboard/allUser'> <FaAd />All Users</NavLink></li>

                                <li><NavLink to='/dashboard/addDoctor'> <FaAd />Add a Doctor</NavLink></li>



                                <li><NavLink to='/dashboard/manageDoctor'><FaHistory />Manage Doctor</NavLink></li>

                                <li><NavLink to='/dashboard/adminHome'> <FaHome />Admin Home</NavLink></li>

                            </>
                            : <>

                                <li><NavLink to='/dashboard/cart'> <FaCartShopping />My Appointment</NavLink></li>


                                <li><NavLink to='/dashboard/home'> <FaHome />User Home</NavLink></li>

                                <li><NavLink to='/dashboard/review'> <FaAd />My Reviews</NavLink></li>


                                <li><NavLink to='/dashboard/history'><FaHistory /> My History</NavLink></li>

                            </>
                    }

                    <div className="divider divider-error"></div>

                    <li><NavLink to='/'> <FaHome />Home</NavLink></li>
                    <li><NavLink to='/doctorProfile'> <FaPersonRifle />Doctor Profile</NavLink></li>


                </ul>


            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;