import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

// import React from 'react';
const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateDoctor = () => {
    const doctorInfo = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { name, email,price, Specialty, image, startTime, endTime, _id } = doctorInfo;
    const [img, setImage] = useState(image);

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    const onSubmit = async (data) => {

        console.log(data);

        const image_file = { image: data.image[0] }

        console.log(data.image[0]);



        if (data.image[0]) {
            const res = await axiosPublic.post(image_hosting_api, image_file, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            // setImage(res.data.data.display_url);
            const doctorInfo = {
                name: data.name,
                email: data.email,
                price: parseInt(data.price),
                Specialty: data.specialty,
                image: res.data.data.display_url,
                startTime: '2024-05-15T19:00:00.000Z',
                endTime: '2024-05-15T19:00:00.000Z'
            }
            // console.log(_id)

            const doctorRes = await axiosSecure.patch(`/allDoctor/${_id}`, doctorInfo)
            console.log(doctorRes.data)
            if (doctorRes.data.modifiedCount) {
                // reset()
                setImage(res.data.data.display_url);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        }
        else{
            const doctorInfo = {
                name: data.name,
                email: data.email,
                price : parseInt(data.price),
                Specialty: data.specialty,
                image: img,
                startTime: '2024-05-15T19:00:00.000Z',
                endTime: '2024-05-15T19:00:00.000Z'
            }
            // console.log(_id)
    
            const doctorRes = await axiosSecure.patch(`/allDoctor/${_id}`, doctorInfo)
            console.log(doctorRes.data)
            if (doctorRes.data.modifiedCount) {
                // reset()
                // setImage(res.data.data.display_url);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    
        }
       

        // console.log('image url:', );

        // if (res.data.success) {



    }



    // }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input defaultValue={name} {...register("name")} type="text" placeholder='name' className="input input-bordered w-full" />
                    {errors.name && <span>This field is required</span>}
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input defaultValue={email} {...register("email",)} type="email" placeholder='email' className="input input-bordered w-full " />
                    {errors.email && <span>This field is required</span>}
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder='Price' className="input input-bordered w-full " />
                    {errors.email && <span>This field is required</span>}
                </label>


                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Specialty</span>
                    </div>
                    <select defaultValue={Specialty} {...register("specialty",)} className="select select-bordered w-full ">
                        <option disabled value="specialty" selected>Select the specialty</option>
                        <option value="Tooth Extraction">Tooth Extraction</option>
                        <option value="Grouper">Grouper</option>
                        <option value="Braces">Braces</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                    </select>
                </label>

                <div className="mt-4">
                    <div className="avatar">
                        <div className="w-24 rounded-xl">
                            <img src={img} />
                        </div>
                    </div>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Image</span>
                        </div>
                        <input  {...register("image")} type="file" className="file-input file-input-bordered w-full " />
                    </label>
                </div>


                <input type="submit" value="Submit" className="btn" />
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
};

export default UpdateDoctor;