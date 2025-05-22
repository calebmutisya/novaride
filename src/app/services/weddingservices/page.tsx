import React from 'react'
import Image from 'next/image'
import couple from '../../../assets/images/couple.webp'

import { FaStarOfLife } from "react-icons/fa";
import MyButton from '@/components/MyButton';
import CarCarousel from '@/components/CarCarousel'

export default function Weddingservice() {
  return (
    <section className='container py:50px lg:py-[100px]'>
      <div className=' flex flex-col lg:flex-row lg:justify-between px-[15px] lg:px-[0px]'>
        <div className=' mt-[30px] lg:mt-0  lg:w-[48%] order-2 lg:order-1 lg:block'>
          <Image src={couple} alt='about' className=' rounded-[12px]'/>
        </div>
        <div className='px-[15px] lg:w-[48%] order-1 lg:order-2'>
          <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
              Wedding Services
            </h3>
          </div>
          <div>
            <h4 className='text-[28px] font-[700]'>
              Let us Make Your Memorable Day Special
            </h4>
            <p className='my-[20px]'>
              We offer the best wedding services in town. With our fleet of exclusive and well-maintained cars, we promise the ultimate value for money while hiring our cars.
            </p>
            <p className='my-[20px]'>
              The vehicles come with our professional English-speaking drivers who are more than willing to be at your service.
            </p>

            <MyButton href={'/contactus'}>Contact Us</MyButton>

          </div>
        </div>
      </div>
      <CarCarousel />
    </section>
  )
}
