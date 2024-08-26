import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../shareComponent/provider/AuthProvider';

const useVolunteer = () => {
    const {user,loading} =useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
  const {data : isVolunteer , isPending : isVolunteerLoading} = useQuery({
    queryKey:[user?.email,'isVolunteer'],
    enabled : !loading,
    queryFn:async()=>{
        const res= await axiosSecure.get(`/user/volunteer/${user.email}`);
        console.log(res.data);
        return res.data?.volunteer;
    }
  })
  return [isVolunteer,isVolunteerLoading];
};
export default useVolunteer;