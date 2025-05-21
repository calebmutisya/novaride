import React from 'react'
import Image from 'next/image'
import explore from '../../../assets/images/explore.png'

import { FaStarOfLife } from "react-icons/fa";
import MyButton from '@/components/MyButton';
import CarCarousel from '@/components/CarCarousel'

export default function Longtermhire() {
  return (
    <section className='container py:50px lg:py-[100px]'>
      <div className=' flex flex-col lg:flex-row lg:justify-between px-[15px] lg:px-[0px]'>
        <div className=' mt-[30px] lg:mt-0  lg:w-[48%] order-2 lg:order-1 lg:block'>
          <Image src={explore} alt='about' className=' rounded-[12px]'/>
        </div>
        <div className='px-[15px] lg:w-[48%] order-1 lg:order-2'>
          <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
              Long Term Hire
            </h3>
          </div>
          <div>
            <h4 className='text-[28px] font-[700]'>
              Freedom to Explore
            </h4>
            <p className='my-[20px]'>
              Get amazing discounts on long term car hire in Kenya. We offer long term car hire in Kenya at competitive prices. Whether you are a business traveler or a tourist, we have the perfect vehicle for your needs.
            </p>
            <p className='my-[20px]'>
              Definitely, this is normally a better option for both corporate car hire services and individual or family car hire needs. So, always talk to us and see what we have in store for you.
            </p>

            <MyButton href={'/contactus'}>Contact Us</MyButton>

          </div>
        </div>
      </div>
      <CarCarousel />
    </section>
  )
}
