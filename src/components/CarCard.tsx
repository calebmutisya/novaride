import React from 'react'
import Image from 'next/image'

import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";
import { Fleet } from '@/constants/fleet';

export default function CarCard({car}:{car: Fleet}) {
  return (
    <div className='p-[20px] rounded-[30px] border border-gray-200 cursor-pointer'>
        <div className='mb-[15px] w-[100%] h-[200px] relative'>
            <Image src={car.image} alt={car.title} layout='fill' objectFit='cover' />
        </div>
        <div className='bg-gray-200 w-fit px-[15px] py-[8px] mb-[15px] rounded-[100px] text-[12px] font-[600]'>
            {car.type}
        </div>
        <div className='text-[18px] font-[600]'>
            {car.title}
        </div>
        <div className='mt-[15px] ml-[15px] flex flex-row '>
            <div className='flex flex-row items-center'>
                <MdOutlineAirlineSeatReclineExtra size={20} />
                <span className='ml-[10px]'>{car.capacity}</span>
            </div>
            <div className='flex flex-row items-center ml-[30px]'>
                <TbAutomaticGearbox size={20} />
                <span className='ml-[10px]'>{car.transmission}</span>
            </div>
        </div>
        <div className='h-[1px] bg-gray-200 mt-[15px]'></div>
        <div className='text-[20px] font-[700] mt-[15px]'>Ksh {car.dailyprice} <span className='text-[12px] font-[400]'>/day</span>
        </div>
    </div>
  )
}
