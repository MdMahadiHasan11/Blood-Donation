// import React from react';

import Cover from "../../shareComponent/cover/Cover";
import img from '../../../public/assets/home/banner.jpg'
import { Helmet } from "react-helmet";
import useDoctor from "../../hooks/useDoctor";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import DoctorCart from "../../shareComponent/doctorCart/DoctorCart";
import TabCard from "../../shareComponent/doctorCart/TabCard";
import { useParams } from "react-router-dom";

const Appointment = () => {
    const Specialtys = ['Tooth Extraction','Braces','Grouper','Teeth Cleaning']
    const {specialty} = useParams();
    const initialiIndex =Specialtys.indexOf(specialty);


    const [doctors, loading] = useDoctor();
    const [tabIndex, setTabIndex] = useState(initialiIndex);
   
    // console.log(specialty);

    const toothExtraction = doctors.filter(item => item.Specialty === 'Tooth Extraction'
    );
    const braces = doctors.filter(item => item.Specialty === 'Braces'
    );
    const grouper = doctors.filter(item => item.Specialty === 'Grouper'
    );
    const teethCleaning = doctors.filter(item => item.Specialty === 'Teeth Cleaning'
    )

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Doctor/Appointment</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cover img={img} title={'Doctor Appointment'} subtitle={'Doctor/Appointment'}></Cover>
            <div>
                {/* Appointment  title */}
                <div>
                    <h1 className="text-2xl font-bold text-center mt-10 mb-5">Please select a service.</h1>
                    {toothExtraction.length}
                </div>

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Tooth Extraction</Tab>
                        <Tab>Braces</Tab>
                        <Tab>Grouper</Tab>
                        <Tab>Teeth Cleaning</Tab>
                    </TabList>
                    <TabPanel>
                        <TabCard specialtyDoctor={toothExtraction}></TabCard>
                    </TabPanel>
                    <TabPanel>
                        <TabCard specialtyDoctor={braces}></TabCard>
                    </TabPanel>
                    <TabPanel>hi</TabPanel>
                    <TabPanel>ho</TabPanel>
                </Tabs>


            </div>
        </div>
    );
};

export default Appointment;