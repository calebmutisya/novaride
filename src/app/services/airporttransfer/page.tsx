import React from 'react'
import Image from 'next/image'
import airport from '../../../assets/images/airport.png'

import { FaStarOfLife } from "react-icons/fa";
import MyButton from '@/components/MyButton';
import CarCarousel from '@/components/CarCarousel'

export default function Weddingservice() {
  return (
    <section className='container py:50px lg:py-[100px]'>
      <div className=' flex flex-col lg:flex-row lg:justify-between px-[15px] lg:px-[0px]'>
        <div className=' mt-[30px] lg:mt-0  lg:w-[48%] order-2 lg:order-1 lg:block'>
          <Image src={airport} alt='about' className=' rounded-[12px]'/>
        </div>
        <div className='px-[15px] lg:w-[48%] order-1 lg:order-2'>
          <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
              Airport Transfer
            </h3>
          </div>
          <div>
            <h4 className='text-[28px] font-[700]'>
              Arrive in Style
            </h4>
            <p className='my-[20px]'>
              Kenya is a tourism destination, the country has airports and hotels spread across different destinations. We offer airport transfers across the major airports and airstrips in the country, from Nairobi’s JKIA and Wilson Airport to the Coastal region’s Moi Airport and Ukunda Airstrip, Kisumu, and Eldoret’s  Kisumu Airport and Eldoret Airport respectively.
            </p>
            <p className='my-[20px]'>
              Get ahead of the clearance and customs queues with our flexible fast-tracking services. Simply send us your latest selfie picture and flight information, and we will have our agent reach you upon your arrival and assist you with customs clearance and baggage handling.
            </p>

            <MyButton href={'/contactus'}>Contact Us</MyButton>

          </div>
        </div>
      </div>
      <CarCarousel />
    </section>
  )
}
