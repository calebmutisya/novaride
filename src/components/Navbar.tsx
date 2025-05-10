import React from 'react'
import Image from 'next/image'
import logo from "../assets/images/logo.svg"

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
                        <li ><a  href="#">Our Fleet</a></li>
                        <li ><a  href="service.html">Services</a>
                            <ul>
                                <li ><a  href="service.html">Long Term CarHire</a></li>
                                <li ><a  href="service-single.html">Chauffer Driven Service</a></li>
                                <li ><a  href="service-single.html">Airport Transfer Service</a></li>
                                <li ><a  href="service-single.html">Wedding Services</a></li>
                            </ul>
                        </li>
                        <li ><a  href="about.html">Terms&Conditions</a></li>
                        <li ><a  href="about.html">About Us</a></li>
                        <li ><a  href="about.html">FAQS</a></li>
                        <li ><a  href="contact.html">Contact Us</a></li>
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
    </nav>
  )
}
