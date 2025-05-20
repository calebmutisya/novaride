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
    <section className='container py-[50px] lg:py-[100px] lg:px-[15px]'>
      <div className='text-[16px] mb-[15px] text-myorange flex flex-row w-fit mx-auto '>
        <FaStarOfLife size={16} />
        <h3 className='ml-[10px]' >
          Contact Us
        </h3>
      </div>
      <h4 className='text-[28px] lg:text-[44px] font-[700] text-center'>
        Get In Touch
      </h4>
      <div className='flex flex-col lg:flex-row lg:justify-between py-[50px] lg:py-[100px] px-[15px] lg:px-[0px] '>
        <div className='text-mywhite bg-myblack  p-[40px] rounded-[30px] min-w-[300px] lg:max-w-[40%] xl:max-w-[580px] h-fit '>
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
                Harambee Street, Nairobi, Kenya
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
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.twitter.com/' target='blank' ><BsTwitterX size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.instagram.com/' target='blank'><BsInstagram size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.linkedin.com/' target='blank'><BsLinkedin size={16} className='hover:text-myorange'/></a></li>
              <li><a className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%] border border-mywhite hover:border-myorange' href='https://www.youtube.com/' target='blank'><BsYoutube size={16} className='hover:text-myorange'/></a></li>
            </ul>
          </div>
        </div>
        <Form action="" className=' min-w-[300px] lg:max-w-[50%] xl:max-w-[680px] mt-[40px] lg:mt-[0px]' >
          <div className='flex flex-wrap mb-[30px]'>
            <div className='px-[15px] mb-[24px] w-[100%] lg:w-[50%] '>
              <h6>First Name</h6>
              <input type="text" placeholder='Enter First Name' className='my-[10px] py-[12px] w-[100%] border-b border-gray-200 outline-none'  />
            </div>
            <div className='px-[15px] mb-[24px] w-[100%] lg:w-[50%]'>
              <h6>Last Name</h6>
              <input type="text" placeholder='Enter Last Name' className='my-[10px] py-[12px] w-[100%] border-b border-gray-200 outline-none'  />
            </div>
            <div className='px-[15px] mb-[24px] w-[100%] lg:w-[50%]'>
              <h6>Email</h6>
              <input type="text" placeholder='Enter Email' className='my-[10px] py-[12px] w-[100%] border-b border-gray-200 outline-none'  />
            </div>
            <div className='px-[15px] mb-[24px] w-[100%] lg:w-[50%]'>
              <h6>Phone</h6>
              <input type="text" placeholder='Enter Number' className='my-[10px] py-[12px] w-[100%] border-b border-gray-200 outline-none'  />
            </div>
          </div>
          <div className='px-[15px] mb-[24px]'>
            <h6>Message</h6>
            <textarea placeholder='Enter Message' className='my-[10px] h-[96px] py-[12px] w-[100%] border-b border-gray-200 outline-none'  />
          </div>
          <MyButton href="#">Send Message</MyButton>
          <div className='flex flex-row justify-end'>
            <Image src={formplan} alt='' className='w-[50%]'/>
          </div>
        </Form>
      </div>

      <div>
        <div className='text-[16px] mb-[15px] text-myorange flex flex-row w-fit mx-auto '>
          <FaStarOfLife size={16} />
          <h3 className='ml-[10px]' >
            Location
          </h3>
        </div>
        <h4 className='text-[28px] lg:text-[44px] font-[700] text-center'>
          How to Reach Our Location
        </h4>
        <div className="mt-[40px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17044271911!2d36.764995635071365!3d-1.303035977979267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1747761290022!5m2!1sen!2ske" width="100%" height="550" style={{border:0, borderRadius:'30px'}}  loading="lazy" ></iframe>
        </div>

      </div>
      

    </section>
  )
}
