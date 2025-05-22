import React from 'react'
import aboutimg from "../../assets/images/aboutme_1.webp"
import booking from "../../assets/svg/booking.svg"
import pickup from "../../assets/svg/pickup.svg"
import MyButton from '@/components/MyButton'
import Image from 'next/image'

import { FaStarOfLife } from "react-icons/fa";

import Testimonials from '@/components/Testimonials'
import Vision from '@/components/Vision'

export default function Aboutus() {
  return (
    <div className='container'>
      {/* About Us Start */}
      <section>
        <div className='py-[50px] lg:py-[100px] flex flex-col lg:flex-row'>
          <div className='w-[500px] hidden lg:block'>
            <Image src={aboutimg} alt='about' className=' rounded-[12px]'/>
          </div>
          <div className='px-[15px] lg:w-[65%]'>
            <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
              <FaStarOfLife size={16} />
              <h3 className='ml-[10px]' >
                About Us
              </h3>
            </div>
            <div>
              <h4 className='text-[28px] font-[700]'>
                NovaRide, we consider ourselves an ongoing Kenyan Success Story.
              </h4>
              <p className='my-[20px]'>
              NovaRide Car Hire Services is a reputable family business based in Nairobi. We strive for nothing short of perfection in our service delivery. We are renown for our superb and well-maintained fleet of cars available for you to rent. Moreover, we also offer chauffeur driven and VIP services to our clients.
              </p>
              <div className='mb-[40px]'>
                <div className='flex flex-row '>
                  <Image src={booking} alt='booking' />
                  <div className='ml-[15px]'>
                    <h5 className='text-[20px] font-[600] mb-[10px]'>Easy Booking</h5>
                    <p>We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                  </div>
                </div>
                <div  className='w-full h-[1px] my-[20px] bg-gray-200'></div>
                <div className='flex flex-row'>
                  <Image src={pickup} alt='booking' />
                  <div className='ml-[15px]'>
                    <h5 className='text-[20px] font-[600] mb-[10px]'>Convenient Pick-Up & Return Process</h5>
                    <p>We Have Optimised The Pick-up And Return Process So That Our Clients Can Experience The Easiest And The Safest Service</p>
                  </div>
                </div>
              </div>

              <MyButton href={'/contactus'}>Contact Us</MyButton>

            </div>
          </div>
        </div>
      </section>
      {/* About Me End */}

      {/* Vision Start */}
      <Vision />
      {/* Vision End */}

      <Testimonials />

    </div>
  )
}
