// import React from 'react';

import Cover from "../../shareComponent/cover/Cover";
import img from '../../../public/assets/home/banner.jpg'
import { Helmet } from "react-helmet";

const Profile = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Doctor/Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cover img={img} title={'Doctor Profile'} subtitle={'Doctor/Profile'}></Cover>
            
        </div>
    );
};

export default Profile;