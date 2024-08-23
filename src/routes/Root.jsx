import Footer from '../shareComponent/footer/Footer'
import Navbar from '../shareComponent/navbar/Navbar'

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;