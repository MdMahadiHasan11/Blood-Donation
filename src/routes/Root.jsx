import Footer from '../shareComponent/footer/Footer'
import Navbar from '../shareComponent/navbar/Navbar'

import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const location =useLocation()
    const isLogin =location.pathname.includes('login')
    return (
        <div>
            { isLogin || <Navbar></Navbar> }
            
            <Outlet></Outlet>
            
           {isLogin || <Footer></Footer>} 
            
        </div>
    );
};

export default Root;