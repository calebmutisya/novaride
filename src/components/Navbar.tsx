"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../assets/images/logo.svg"

import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

import MyButton from './MyButton';

export default function Navbar() {

 const [open, setOpen] = useState(false)
 const [shouldRender, setShouldRender] = useState(false);

 useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      // Delay hiding until animation completes
      const timeout = setTimeout(() => setShouldRender(false), 500); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <nav className=' text-myblack relative '>
        {/* <!-- Main Menu Start --> */}
        <div className="container z-6 py-[15px] xl:py-[30px] lg:px-[30px]   flex flex-row items-center justify-between">
            {/* <!-- Logo Start --> */}
            <Link href="/">
                <Image src={logo} className='h-[20px] lg:h-[26px]' alt="logo" priority />
            </Link>
            {/* <!-- Logo End --> */}

            <div className='xl:flex flex-row justify-between hidden'>
                <ul  id="menu" className=' flex flex-row text-[16px]'>
                    <li ><Link href="/">Home</Link></li>
                    <li ><Link href="/ourfleet">Our Fleet</Link></li>
                    <li className='dropdown'><Link href="/" >Services</Link>
                        <ul className='dropdown-items rounded-[16px]'>
                            <li ><Link href="/services/longtermhire">Long Term CarHire</Link></li>
                            <li ><Link href="/services/chauffeurservice">Chauffer Driven Service</Link></li>
                            <li ><Link href="/services/airporttransfer">Airport Transfer Service</Link></li>
                            <li ><Link href="/services/weddingservices">Wedding Services</Link></li>
                        </ul>
                    </li>
                    <li ><Link href="/terms&conditions">Terms&Conditions</Link></li>
                    <li ><Link href="/aboutus">About Us</Link></li>
                    <li ><Link href="/faqs">FAQS</Link></li>
                    <li ><Link href="/contactus">Contact Us</Link></li>
                </ul>
            </div>
           
            <div className='hidden xl:block'>
                <MyButton  href="/contactus">Book A Rental</MyButton>
            </div>
            
            <div className='mr-[15px] xl:hidden'>
                {
                    !open ?
                    <div className='p-[10px] bg-myorange hover:bg-myblack rounded-[8px] cursor-pointer' onClick={() => setOpen(true)}>
                        <IoMenu  size={30} color='#FFF8F6' />
                    </div>
                    :
                    <div className='p-[10px] bg-myorange hover:bg-myblack  rounded-[8px] cursor-pointer' onClick={() => setOpen(false)}>
                        <RxCrossCircled size={30} color='#FFF8F6' />
                    </div>
                }
            </div>
            
            
        </div>
         {/* <!-- Main Menu End --> */}

        {/* Mobile Menu */}
        {
            shouldRender &&
            <div
                className={`mobile-menu z-5 bg-myblack  text-mywhite w-full absolute top-[80px] left-0
                    ${open ? 'animate-slide-down' : 'animate-slide-up'}
                `}
            >
                <div>
                    <div className="mobile-menu-content container pl-[15px] py-[15px]">
                        <ul id="mobile-menu">
                            <li ><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                            <li ><Link href="/ourfleet" onClick={() => setOpen(false)}>Our Fleet</Link></li>
                            <li ><Link href="/" onClick={() => setOpen(false)}>Services</Link>
                                <ul >
                                    <li ><Link href="/services/longtermhire" onClick={() => setOpen(false)}>Long Term CarHire</Link></li>
                                    <li ><Link href="/services/chauffeurservice" onClick={() => setOpen(false)}>Chauffer Driven Service</Link></li>
                                    <li ><Link href="/services/airporttransfer" onClick={() => setOpen(false)}>Airport Transfer Service</Link></li>
                                    <li ><Link href="/services/weddingservices" onClick={() => setOpen(false)}>Wedding Services</Link></li>
                                </ul>
                            </li>
                            <li ><Link href="/terms&conditions" onClick={() => setOpen(false)}>Terms&Conditions</Link></li>
                            <li ><Link href="/aboutus" onClick={() => setOpen(false)}>About Us</Link></li>
                            <li ><Link href="/faqs" onClick={() => setOpen(false)}>FAQS</Link></li>
                            <li ><Link href="/contactus" onClick={() => setOpen(false)}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        }
    </nav>
  )
}

