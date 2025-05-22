"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { FaStarOfLife } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

import approach from "../assets/images/our-approach-img.webp"
import mission from "../assets/images/our-mission-img.webp"
import vision from "../assets/images/our-vision-img.webp"
import type { StaticImageData } from 'next/image';


export type Content = {
    id: number;
    img: StaticImageData;
    title: string;
    main_slogan: string;
    content: string;
    slogans: {
        id: number;
        quote: string;
    }[];
}



const content = [
    {
        id: 1,
        img: vision,
        title: "Our Vision",
        main_slogan: "Redefining travel with trust and top-tier service",
        content: "To be the most trusted and preferred car hire company in Kenya, recognized for delivering exceptional service, luxury, and reliability.",
        slogans: [
            {
                id: 1,
                quote: "A future where every journey reflects our promise of quality, comfort, and professionalism."
            },
            {
                id: 2,
                quote: "Setting the standard for excellence in Kenya’s car hire industry—today and tomorrow."
            }
        ]
    },
    {
        id: 2,
        img: mission,
        title: "Our Mission",
        main_slogan: "Your journey, our pride",
        content: "To provide superior car rental services by maintaining a premium fleet, delivering outstanding customer care, and ensuring safety, comfort, and convenience for every client.",
        slogans: [
            {
                id: 1,
                quote: "Driven by service, powered by trust — every trip, every time."
            },
            {
                id: 2,
                quote: "Ensuring a smooth, secure, and stylish ride for every client."
            }
        ]
    },
    {
        id: 3,
        img: approach,
        title: "Our Approach",
        main_slogan: "Where professionalism meets personal touch",
        content: "We combine attention to detail, top-tier vehicle maintenance, and a personal touch to deliver tailor-made car hire experiences with unmatched reliability.",
        slogans: [
            {
                id: 1,
                quote: "From VIP rides to self-drive ease—every detail matters to us."
            },
            {
                id: 2,
                quote: "Reliable, refined, and ready—our service is built around you."
            }
        ]
    }
];


export default function Vision() {

    const[active, setActive] = useState(1)

    const handleActive = (type: number) => {
        setActive(type)
    }

  return (
    <div className='py-[50px] lg:py-[100px] flex flex-col items-center'>
        <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
            <FaStarOfLife size={16} />
            <h3 className='ml-[10px]' >
            Vision Mission
            </h3>
        </div>
        <h4 className='text-[28px] mb-[60px] lg:text-[44px] font-[700] text-center'>
            Driving excellence and innovation<br className='hidden lg:block'/> in car rental services
        </h4>
        <div className='p-[15px] flex flex-wrap justify-center gap-[10px]  lg:gap-[25px] bg-bgsubtle rounded-[100px]'>
            <div className={`${active === 1 ? 'bg-myorange text-mywhite' : 'bg-white'} py-[15px] px-[30px] rounded-[100px] font-[700] cursor-pointer hover:bg-myorange hover:text-mywhite transition duration-500 ease-in-out`} onClick={() => handleActive(1)}>
                Our Vision
            </div>
            <div className={`${active === 2 ? 'bg-myorange text-mywhite' : 'bg-white'} py-[15px] px-[30px] rounded-[100px] font-[700] cursor-pointer hover:bg-myorange hover:text-mywhite transition duration-500 ease-in-out`} onClick={() => handleActive(2)}>
                Our Mission
            </div>
            <div className={`${active === 3 ? 'bg-myorange text-mywhite' : 'bg-white'} py-[15px] px-[30px] rounded-[100px] font-[700] cursor-pointer hover:bg-myorange hover:text-mywhite transition duration-500 ease-in-out`} onClick={() => handleActive(3)}>
                Our Approach
            </div>
        </div>
        {content.map((item, index: number) => (
            <div key={index} className={active === item.id ? 'px-[15px] lg:px-[15px] flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[50px]' : 'hidden'}>
                <div  className='w-[100%] lg:w-[50%]'>
                    <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
                        <FaStarOfLife size={16} />
                        <h3 className='pl-[25px] font-[400]' >
                            {item.title}
                        </h3>
                    </div>
                    <h4 className='text-[28px] mb-[20px] lg:text-[44px] font-[700]'>
                        {item.main_slogan}
                    </h4>
                    <p>
                        {item.content}
                    </p>
                    <div className='mt-[30px]'>
                        {item.slogans.map((item, index) => (
                            <div key={index} className='flex items-center justify-start mb-[20px] '>
                                <IoIosCheckmarkCircle size={21} className='text-myorange mr-[10px] min-w-[21px]'/> <div className='text-[16px] font-[500]'>{item.quote}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[100%] lg:w-[45%] mt-[50px] lg:mt-[0px]'>
                    <Image src={item.img} alt='' className='rounded-[46px]'/>
                </div>

            </div>
        ))}

    </div>
  )
}
