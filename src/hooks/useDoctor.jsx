import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic";

const useDoctor = () => {
    // const [doctors, setDoctors] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
        
    //         fetch('http://localhost:5000/allDonor')
    //             .then(res => res.json())
    //             .then(data =>{
    //                 setDoctors(data);
    //                 setLoading(false);
    //             })
        
    // }, [])
   



    const axiosPublic =useAxiosPublic()

    const {data : doctors =[] , isPending : loading ,refetch } = useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res= await axiosPublic.get('/allDonor');
            // console.log(res.data);
            return res.data
        }
      })

    return [doctors,loading ,refetch]
}
export default useDoctor;