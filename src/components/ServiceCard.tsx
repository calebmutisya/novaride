import React from 'react'
import Image from 'next/image'
import MyButton from './MyButton'
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard( { service }: { service: any }) {
  return (
    <div className='w-[280px] rounded-[30px] py-[30px] px-[25px] mb-[30px] border border-gray-200 '>
        <div className='pl-[10px] pt-[10px] mb-[30px]'>
            <Image src={service.image} alt={service.title}/>
        </div>
        <h3 className='text-[20px] mb-[10px] font-[600]'>{service.title}</h3>
        <p className='mb-[30px] min-h-[96px]'>{service.description}</p>
        <MyButton href={service.link}> <FaArrowRight /></MyButton>
    </div>
  )
}
