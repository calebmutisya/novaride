import React from 'react'
import Image from 'next/image'
import { FaStarOfLife } from "react-icons/fa";
import Form from 'next/form'
import MyButton from '@/components/MyButton';

import formplan from "../../assets/images/contact-form-plan.png"
import information from "../../assets/images/contact-information-bg.png"

// Social Icons
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

// Import SVG
import location from "../../assets/svg/icon-location.svg"
import mail from "../../assets/svg/icon-mail.svg"
import phone from "../../assets/svg/icon-phone.svg"

export default function Contactus() {
  return (
    <section className='container py-[50px] lg:py-[100px] '>
      <div className='text-[16px] mb-[15px] text-myorange flex flex-row w-fit mx-auto '>
        <FaStarOfLife size={16} />
        <h3 className='ml-[10px]' >
          Contact Us
        </h3>
      </div>
      <h4 className='text-[28px] font-[700] text-center'>
        Get In Touch
      </h4>
      <div className='flex flex-col lg:flex-row py-[50px] lg:py-[100px] px-[15px] lg:px-[0px] '>
        <div className='text-mywhite bg-myblack  p-[40px] rounded-[30px] min-w-[300px] max-w-[480px]'>
          <div className='mb-[50px] lg:mb-[100px]'>
            <h4 className='text-[28px] lg:text-[44px] font-[700] '>Contact Information</h4>
            <div className='mt-[15px]'>
              Say something to start a live chat!
            </div>
          </div>
          
          <ul>
            <li className='flex flex-row gap-[10px] mb-[30px] items-center'>
              <Image src={location} alt="location" className='w-[26px] lg:w-[40px]' /> 
              <div>
                Harambe Streett, Nairobi, Kenya
              </div>
            </li>

            <li className='flex flex-row gap-[10px] mb-[30px] items-center'>
              <Image src={phone} alt="phone" className='w-[26px] lg:w-[40px]' /> 
              <div>
                +1 (123) 456-7890
              </div>
            </li> 

            <li className='flex flex-row gap-[10px] mb-[30px] items-center'>
              <Image src={mail} alt="mail" className='w-[26px] lg:w-[40px]' /> 
              <div>
                sales@novaride.com 
              </div>
            </li>

          </ul>

          <div className='mt-[50px]'>
            <ul className='footer-links flex flex-row gap-[20px] xl:gap-[16px]'>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.facebook.com/' target='blank'><BsFacebook size={16} className='hover:text-myorange' /></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.twitter.com/' ><BsTwitterX size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.instagram.com/'><BsInstagram size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.linkedin.com/'><BsLinkedin size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.youtube.com/'><BsYoutube size={16} className='hover:text-myorange'/></a></li>
            </ul>
          </div>
        </div>
        <Form action="" >
          <input type="text" placeholder='First Name' className='my-[10px] p-[10px] w-[100%] border border-gray-200 outline-none'  />
        </Form>

      </div>
      

    </section>
  )
}
