import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../../../../public/assets/home/slide1.jpg'
import slide2 from '../../../../public/assets/home/slide2.jpg'
import slide3 from '../../../../public/assets/home/slide3.jpg'
import slide4 from '../../../../public/assets/home/slide4.jpg'
import slide5 from '../../../../public/assets/home/slide5.jpg'
import SectionTitle from '../../../shareComponent/sectionTitle/SectionTitle';
const Slider = () => {
    return (
        // max-h-[600px]
        <div className=''>
            <div>
                <SectionTitle heading={'Category'} subHeading={'Swiper React components will likely be removed in future versions. It is recommended to migrate '}></SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // navigation={true}
                centeredSlides={true}
                pagination={
                    { clickable: true }
                }

                modules={[Pagination]}

                loop={true}
                // autoplay={
                //     { delay: 3000 }
                // }
                className='mySwiper'
            >


                <SwiperSlide>

                    <img src={slide1} alt="Your Image" className="" />
                    <p className='text-white uppercase text-center -mt-9 font-extrabold'>Salad</p>

                </SwiperSlide>
                <SwiperSlide>

                    <img src={slide2} alt="Your Image" className="" />

                </SwiperSlide>



                <SwiperSlide>

                    <img src={slide3} className="" />


                </SwiperSlide>

                <SwiperSlide>

                    <img src={slide4} alt="Your Image" className="" />


                </SwiperSlide>
                <SwiperSlide>

                    <img src={slide5} className="" />


                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;