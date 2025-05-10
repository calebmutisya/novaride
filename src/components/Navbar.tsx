import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/logo.svg"

import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            {/* <!-- Logo Start --> */}
            <a href="./">
                <Image src={logo} alt="logo" />
            </a>
            {/* <!-- Logo End --> */}

            {/* <!-- Main Menu Start --> */}
            <div >
                <div >
                    <ul  id="menu">
                        <li ><a  href="./">Home</a></li>
                        <li ><a  href="/ourfleet">Our Fleet</a></li>
                        <li ><a  href="/services">Services</a>
                            <ul>
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
                {/* <!-- Let’s Start Button Start --> */}
                <div>
                    <a href="#">book a rental</a>
                </div>
                {/* <!-- Let’s Start Button End --> */}
            </div>
            {/* <!-- Main Menu End --> */}
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
            <div className="container">
                <IoMenu  size={30}/>
                <RxCrossCircled size={30}/>
                <div className="mobile-menu-content">
                    <ul id="mobile-menu">
                        <li ><a  href="./">Home</a></li>
                        <li ><a  href="/ourfleet">Our Fleet</a></li>
                        <li ><a  href="/services">Services</a>
                            <ul>
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
