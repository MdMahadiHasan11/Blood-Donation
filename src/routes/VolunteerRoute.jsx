import  { useContext } from 'react';
// import useAdmin from '../hooks/useAdmin';
// import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../shareComponent/provider/AuthProvider';
import useVolunteer from '../hooks/useVolunteer';

const VolunteerRoute = ({children}) => {
    const {user, logOut,loading}=useContext(AuthContext);
    const [isVolunteer,isVolunteerLoading]=useVolunteer();
    const location = useLocation();

    if (loading || isVolunteerLoading) {
        return <span className="loading  loading-spinner text-info flex justify-center items-center"></span>
    }
    if (user && isVolunteer) {
        return children;
    }
    return (
      logOut(),
        <Navigate state={location.pathname} to='/'></Navigate>
        
            

    );
};
export default VolunteerRoute;