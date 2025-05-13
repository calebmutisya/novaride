"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
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
            <a href="./">
                <Image src={logo} className='h-[20px] lg:h-[26px]' alt="logo" />
            </a>
            {/* <!-- Logo End --> */}

            
            
            <div className='xl:flex flex-row justify-between hidden'>
                <ul  id="menu" className=' flex flex-row text-[16px]'>
                    <li ><a  href="./">Home</a></li>
                    <li ><a  href="/ourfleet">Our Fleet</a></li>
                    <li className='dropdown'><a  href="/services" >Services</a>
                        <ul className='dropdown-items rounded-[16px]'>
                            <li ><a  href="/services/longtermhire">Long Term CarHire</a></li>
                            <li ><a  href="/services/chauffeurservice">Chauffer Driven Service</a></li>
                            <li ><a  href="/services/airporttransfer">Airport Transfer Service</a></li>
                            <li ><a  href="/services/weddingservices">Wedding Services</a></li>
                        </ul>
                    </li>
                    <li ><a  href="/terms&conditions">Terms&Conditions</a></li>
                    <li ><a  href="/aboutus">About Us</a></li>
                    <li ><a  href="/faqs">FAQS</a></li>
                    <li ><a  href="/contactus">Contact Us</a></li>
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
                            <li ><a  href="./">Home</a></li>
                            <li ><a  href="/ourfleet">Our Fleet</a></li>
                            <li ><a  href="/services">Services</a>
                                <ul >
                                    <li ><a  href="/services/longtermhire">Long Term CarHire</a></li>
                                    <li ><a  href="/services/chauffeurservice">Chauffer Driven Service</a></li>
                                    <li ><a  href="/services/airporttransfer">Airport Transfer Service</a></li>
                                    <li ><a  href="/services/weddingservices">Wedding Services</a></li>
                                </ul>
                            </li>
                            <li ><a  href="/terms&conditions">Terms&Conditions</a></li>
                            <li ><a  href="/aboutus">About Us</a></li>
                            <li ><a  href="/faqs">FAQS</a></li>
                            <li ><a  href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        }
    </nav>
  )
}
