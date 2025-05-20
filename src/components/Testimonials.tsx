"use client"
import React from 'react'
import Image from 'next/image'
import { FaStarOfLife } from "react-icons/fa";

import testimonies from '@/constants/testimony'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Import required Swiper modules
import { Pagination, Autoplay } from 'swiper/modules'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-myorange text-[18px]" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-myorange text-[18px]" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-myorange text-[18px]" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default function Testimonials() {
  return (
    <div className='container py-[50px] lg:py-[100px] flex flex-col items-center'>

        <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
                Testimonials
            </h3>
        </div>
        <h4 className='text-[28px] mb-[60px] lg:text-[44px] font-[700] text-center'>
            What our customers are
            saying about us
        </h4>

        <Swiper
            spaceBetween={0}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='w-[100%]'
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    
                },
                1024: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
            }}
        >
            { testimonies.map((testimony: any, index) => (
                <SwiperSlide key={index}>
                    {/* Testimony Card Start */}
                    <div className='border border-gray-200 rounded-[15px] lg:rounded-[30px] p-[10px] lg:p-[20px] w-[355px] xl:w-[394px] mx-auto xl:mx-[15px]'>
                        <div className='mb-[20px]'>
                            <StarRating rating={testimony.rating} />
                        </div>
                        <p>
                            {testimony.testimony}
                        </p>
                        <div className='mt-[30px] pt-[30px] border-t border-gray-200 flex flex-row items-center'>
                            <div >
                                <Image src={testimony.image} alt='' className='rounded-[100px] w-[60px] mr-[15px]' />
                            </div>
                            
                            <div>
                                <h4  className='font-[500]'>{testimony.name}</h4>
                                <p>{testimony.occupation}</p>
                            </div>

                        </div>
                    </div>
                    {/* Testimony Card End */}
                </SwiperSlide>
            ))
            }
        </Swiper>
    </div>
  )
}
