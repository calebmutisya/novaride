import Image from 'next/image';
import herobg from '../assets/images/hero-bg.jpg'
import abouimg from '../assets/images/aboutme_1.png'
import booking from '../assets/svg/booking.svg'
import pickup from '../assets/svg/pickup.svg'
import MyButton from '@/components/MyButton';

import { FaStarOfLife } from "react-icons/fa";

import services from '@/constants/services';
import ServiceCard from '@/components/ServiceCard';
import CarCarousel from '@/components/CarCarousel';


export default function Home() {
  return (
    <div >
      {/* Hero Start */}
      <section className='h-[70vh] md:h-[40vh] lg:h-[56vh] xl:h-[92vh] relative text-mywhite'>
        <Image src={herobg} alt="hero" className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-myblack opacity-50'></div>
        <div className=' absolute top-[20%] xl:top-[30%] w-full z-1 '>
          <div className='w-[90vw] lg:w-[80vw] mx-auto  flex flex-col items-center'>
            <div className='text-[30px] lg:text-[42px] xl:text-[74px] text-center font-bold '>
            Your Trusted Car Rental Partner
            </div>
            <div className='mt-[10px] w-[90%] lg:w-[60%] text-[18px] text-center mb-[30px]'>
            Whether you're planning a weekend getaway, a business trip, or just need a reliable ride for the day, we offer a wide range of vehicles to suit your needs.
            </div>
            <MyButton href={'/contactus'}>Make a Reservation</MyButton>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* About Us Start */}
      <section className='container '>
        <div className='py-[50px] lg:py-[100px] flex flex-col lg:flex-row'>
          <div className='w-[500px] hidden lg:block'>
            <Image src={abouimg} alt='about' className=' rounded-[12px]'/>
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

      {/* Our services Start */}
      <section className='container px-[15px] lg:px-[0px] py-[50px] lg:py-[100px] flex flex-col items-center'>
        <div className='text-[16px] mb-[15px] text-myorange flex flex-row '>
          <FaStarOfLife size={16} />
          <h3 className='ml-[10px]' >
            Our Services
          </h3>
        </div>
        <h4 className='text-[28px] mb-[60px] lg:text-[44px] font-[700] text-center'>
          Explore our wide range of
          rental services
        </h4>
        <div>
          <div className='flex flex-row flex-wrap gap-[15px] lg:gap-[30px] justify-center'>
            {services.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      {/* Our services End */}

      {/* Our Fleet Start */}
      <CarCarousel />
      {/* Our Fleet End */}

      {/* FAQ Start */}
      
      {/* FAQ End */}
    </div>
  );
}
