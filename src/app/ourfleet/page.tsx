import React from 'react'
import ourfleet from '@/constants/fleet'
import { FaStarOfLife } from "react-icons/fa";
import CarCard from '@/components/CarCard';

export default function ourFleet() {
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        {
          ourfleet.map((car, index) => (
            <div key={index} className="w-[320px] md:w-[340px] ">
              <CarCard  car={car} />
            </div>
          ))
        }
      </div>
    </section>
  )
}
