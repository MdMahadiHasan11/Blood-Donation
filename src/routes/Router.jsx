
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/doctorProfile/Profile";
import Appointment from "../pages/appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";
import AppointmentList from "../pages/dashboard/appointmentList/AppointmentList";
import AllUser from "../pages/dashboard/allUser/AllUser";
import AddDoctor from "../pages/dashboard/addADoctor/AddDoctor";
import AdminRoute from "./AdminRoute";
import ManageDoctor from "../pages/dashboard/manageDoctor/ManageDoctor";
import UpdateDoctor from "../pages/dashboard/updateDoctor/UpdateDoctor";
import Payment from "../pages/dashboard/payment/Payment";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/doctorProfile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "/appointment/:specialty",
                element:<Appointment></Appointment>,
            },
        ]
    },
    // 
    {
        path: "/dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "cart",
                element: <AppointmentList></AppointmentList>,
            },
            {
                path: "payment",
                element: <Payment></Payment>,
            },
            // admin
            {
                path: "allUser",
                element:<AdminRoute><AllUser></AllUser></AdminRoute> ,
            },
            {
                path: "addDoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>,
            },
            {
                path: "manageDoctor",
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>,
            },
            {
                path: "updateDoctor/:id",
                element: <AdminRoute><UpdateDoctor></UpdateDoctor></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allDonor/${params.id}`)
            },
        ]
    },
]);
export default Router;