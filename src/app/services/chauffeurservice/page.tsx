import React from 'react'
import Image from 'next/image'
import chauffeur from '../../../assets/images/chauffeur.png'

import { FaStarOfLife } from "react-icons/fa";
import MyButton from '@/components/MyButton';
import CarCarousel from '@/components/CarCarousel'

export default function Chauffeurservice() {
  return (
    <section className='container py:50px lg:py-[100px]'>
      <div className=' flex flex-col lg:flex-row lg:justify-between px-[15px] lg:px-[0px]'>
        <div className=' mt-[30px] lg:mt-0  lg:w-[48%] order-2 lg:order-1 lg:block'>
          <Image src={chauffeur} alt='about' className=' rounded-[12px]'/>
        </div>
        <div className='px-[15px] lg:w-[48%] order-1 lg:order-2'>
          <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
              Chauffeur Service
            </h3>
          </div>
          <div>
            <h4 className='text-[28px] font-[700]'>
              Relax and Enjoy Your Trip
            </h4>
            <p className='my-[20px]'>
              Chauffeur-driven car rental in Kenya is a service that is becoming increasingly popular among tourists and business travelers alike. For those who want to avoid the hassle of public transportation or driving in unfamiliar areas in Kenya. Choosing a chauffeur-driven car rental provides a great alternative.
            </p>
            <p className='my-[20px]'>
              Working with NovaRide Car Hire Services, you only have to sit back and relax while our driver takes care of the driving. In addition, We always provide vehicles that are clean, comfortable, and well-maintained. If you are considering a chauffeur-driven car rental for your next trip to Kenya, we have the best service in town.
            </p>

            <MyButton href={'/contactus'}>Contact Us</MyButton>

          </div>
        </div>
      </div>
      <CarCarousel />
    </section>
  )
}
