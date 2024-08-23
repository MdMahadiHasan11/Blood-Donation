import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch ,data: appointmentList = [] } = useQuery({
    queryKey: ['appointmentList', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookAppointment?email=${user.email}`)
      return res.data;
    }
  })
  return [refetch,appointmentList];
};

export default useAppointment;