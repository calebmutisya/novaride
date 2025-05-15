"use client"
import React from 'react'
import ourfleet from '@/constants/fleet'
import CarCard from './CarCard'
import { FaStarOfLife } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Import required Swiper modules
import { Pagination, Autoplay } from 'swiper/modules'

export default function CarCarousel() {
  return (
    <section className='container px-[15px] lg:px-[0px] py-[50px] lg:py-[100px] flex flex-col items-center'>
        <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
          <FaStarOfLife size={16} />
          <h3 className='ml-[10px]' >
            Our Fleet
          </h3>
        </div>
        <h4 className='text-[28px] mb-[60px] lg:text-[44px] font-[700] text-center'>
          Explore our perfect and
          extensive fleet
        </h4>
        <Swiper
            spaceBetween={30}
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
                  slidesPerView: 3,
                  centeredSlides: false,
                },
            }}
        >
            {ourfleet.map((car: any) => (
            <SwiperSlide key={car.id}>
                <div className="w-[320px] xl:w-[340px] mx-auto lg:mx-[0px] xl:ml-[15px]">
                    <CarCard car={car} />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}
