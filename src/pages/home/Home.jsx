// import React from 'react';

import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { AuthContext } from "../../shareComponent/provider/AuthProvider";
import Slider from "./slider/Slider";
import Banner from "./slider/banner/Banner";
import Features from "./features/Features";
import PatientSays from "./patientSays/PatientSays";
import { Helmet } from "react-helmet";



const Home = () => {


    const { user } = useContext(AuthContext)


    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <Slider></Slider>
            <Features></Features>
            <PatientSays></PatientSays>


            <div>
                {user ? 'user ase' : 'user nai'}
            </div>
        </div>
    );
};

export default Home;