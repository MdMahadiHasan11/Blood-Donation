import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from '../../../shareComponent/sectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const PatientSays = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('Reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            {reviews.length}
            <SectionTitle heading={'What Our Patients Says'} subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}></SectionTitle>
            <div className=''>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={true}
                    pagination={
                        { clickable: true }
                    }

                    modules={[Navigation, Autoplay, Pagination]}
                    // controller={{ control: controlledSwiper }}
                    loop={true}
                    autoplay={
                        { delay: 3000 }
                    }
                >


                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="border-2 p-5">
                                    <div>
                                        <div>
                                            <div className="avatar">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-bold'>{review.name}</h1 >
                                                <p className=''>Product Designer</p>
                                            </div>

                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    <div className=" flex items-center justify-center">
                                        <div>
                                        
                                        </div>
                                        <div className='lg:w-3/4 w-5/6' >
                                            <p className=" text-yellow-600 lg:text-2xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4">Rating</p>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PatientSays;