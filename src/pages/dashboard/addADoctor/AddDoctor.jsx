import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {

        const image_file = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, image_file, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const doctorInfo = {
                name: data.name,

                email: data.email,
                price: parseInt(data.price),
                Specialty: data.specialty,
                image: res.data.data.display_url,
                startTime: '2024-05-15T19:00:00.000Z',
                endTime: '2024-05-15T19:00:00.000Z'
            }
            const doctorRes = await axiosSecure.post('/allDoctor', doctorInfo)
            console.log(doctorRes.data)
            if (doctorRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 2500
                });
            }


        }



    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input {...register("name", { required: true })} type="text" placeholder='name' className="input input-bordered w-full" />
                    {errors.name && <span>This field is required</span>}
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input {...register("email", { required: true })} type="email" placeholder='email' className="input input-bordered w-full " />
                    {errors.email && <span>This field is required</span>}
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input {...register("price", { required: true })} type="number" placeholder='Price' className="input input-bordered w-full " />
                    {errors.email && <span>This field is required</span>}
                </label>


                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Specialty</span>
                    </div>
                    <select defaultValue="specialty" {...register("specialty", { required: true })} className="select select-bordered w-full ">
                        <option disabled value="specialty" selected>Select the specialty</option>
                        <option value="Tooth Extraction">Tooth Extraction</option>
                        <option value="Grouper">Grouper</option>
                        <option value="Braces">Braces</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                    </select>
                </label>


                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Image</span>
                    </div>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                </label>


                <input type="submit" value="Submit" className="btn" />
                {/* <input type="submit" /> */}
            </form>
        </div>
    );
};

export default AddDoctor;