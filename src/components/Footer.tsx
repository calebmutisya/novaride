import React from 'react'
import Image from 'next/image'
import footerLogo from '../assets/images/footer-logo.svg'

// Social Icons
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="main-footer bg-myblack pt-[75px] pb-[25px]">
      <div className="container  text-mywhite">
        <div className='px-[15px] lg:px-[15px] flex flex-col lg:flex-row justify-between lg:items-start' >
          <div >
            {/* <!-- About Footer Start --> */}
            <div className='mb-[40px] lg:mb-[0px]'>
              {/* <!-- Footer Logo Start --> */}
              <div >
                <Image src={footerLogo} className='h-[31px] mb-[20px]' alt="logo" />
              </div>
              {/* <!-- Footer Logo End --> */}

              {/* <!-- About Footer Content Start --> */}
              <div >
                <p>
                  Experience the ease and convenience of <br className='hidden lg:block'/> renting
                  a car with Novaride.
                </p>
              </div>
              {/* <!-- About Footer Content End --> */}
            </div>
            {/* <!-- About Footer End --> */}
          </div>

          
          {/* <!-- Footer Quick Links Start --> */}
          <div className='mb-[40px] lg:mb-[0px]'>
            <h3 className='mb-[20px]'>Legal Policy</h3>
            <ul className='footer-links'>                            
              <li ><a  href="/terms&conditions">Terms&Conditions</a></li>
            </ul>
          </div>
          {/* <!-- Footer Quick Links End --> */}
          
          {/* <!-- Footer Menu Start --> */}
          <div className='mb-[40px] lg:mb-[0px]'>
            <h3 className='mb-[20px]'>Quick links</h3>
            <ul className='footer-links'>                            
              <li ><a  href="/services/longtermhire">Long Term CarHire</a></li>
              <li ><a  href="/services/chauffeurservice">Chauffer Driven Service</a></li>
              <li ><a  href="/services/airporttransfer">Airport Transfer Service</a></li>
              <li ><a  href="/services/weddingservices">Wedding Services</a></li>
              <li ><a  href="/aboutus">About Us</a></li>
              <li ><a  href="/faqs">FAQS</a></li>
              <li ><a  href="/contactus">Contact Us</a></li>
            </ul>
          </div>
          {/* <!-- Footer Menu End --> */}
        
          
          {/* <!-- Footer Social Link Start --> */}
          <div className='mb-[40px] lg:mb-[0px]'>
            <h3 className='mb-[20px] '>Social Links</h3>
            <ul className='footer-links flex flex-row gap-[20px] xl:gap-[16px]'>
              <li><a href='https://www.facebook.com/' target='blank'><BsFacebook size={24} className='hover:text-myorange' /></a></li>
              <li><a href='https://www.twitter.com/' ><BsTwitterX size={24} className='hover:text-myorange'/></a></li>
              <li><a href='https://www.instagram.com/'><BsInstagram size={24} className='hover:text-myorange'/></a></li>
              <li><a href='https://www.linkedin.com/'><BsLinkedin size={24} className='hover:text-myorange'/></a></li>
              <li><a href='https://www.youtube.com/'><BsYoutube size={24} className='hover:text-myorange'/></a></li>
            </ul>
          </div>
          {/* <!-- Footer Social Link End --> */}
          
        </div>

        {/* <!-- Footer Copyright Section Start --> */}
        <div className='mt-[50px]'>
          <div className='h-[1px] bg-mywhite'></div>
          {/* <!-- Footer Copyright Start --> */}
          <div className='py-[25px] flex justify-center'>
              <p>© {new Date().getFullYear()} Novaride. All rights reserved.</p>
          </div>
          {/* <!-- Footer Copyright End --> */}
        </div>
        {/* <!-- Footer Copyright Section End --> */}
      </div>
    </footer>
  )
}
