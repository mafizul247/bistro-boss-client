import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from '../../../src/assets/home/slide2.jpg'
import slide3 from '../../../src/assets/home/slide3.jpg'
import slide4 from '../../../src/assets/home/slide4.jpg'
import slide5 from '../../../src/assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = ({heading, subHeading}) => {
    return (
        <section>
            <SectionTitle 
                subHeading={'From 11.00am to 10.00pm'}
                heading={'Order Online'}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Sops</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Sops</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center uppercase -mt-24 text-white text-2xl'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;