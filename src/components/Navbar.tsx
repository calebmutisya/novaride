"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import logo from "../assets/images/logo.svg"

import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

import MyButton from './MyButton';

export default function Navbar() {

 const [open, setOpen] = useState(false)

  return (
    <nav className=' text-myblack '>
        <div className="container py-7.5  flex flex-row items-center justify-between">
            {/* <!-- Logo Start --> */}
            <a href="./">
                <Image src={logo} className='h-[26px]' alt="logo" />
            </a>
            {/* <!-- Logo End --> */}

            
            {/* <!-- Main Menu Start --> */}
            <div className='flex flex-row justify-between'>
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
            {/* <!-- Main Menu End --> */}
        
            <MyButton href="/contactus">Book A Rental</MyButton>
            
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu container">
            <div>
                <IoMenu  size={30} color='#FF3600'/>
                <RxCrossCircled size={30} color='#FF3600'/>
                <div className="mobile-menu-content">
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
    </nav>
  )
}
