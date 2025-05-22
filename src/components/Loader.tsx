import React from 'react'
import Image from 'next/image'
import loaderimg from "../assets/images/loader.png"

export default function Loader() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <Image src={loaderimg} alt="loader" className='w-[100px]'/>
    </div>
  )
}
