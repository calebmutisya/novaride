"use client"
import React,{useState} from 'react'

import { FaStarOfLife } from "react-icons/fa";

import faqs from '@/constants/faqs';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


export default function Faqs() {
    
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='container px-[15px] lg:px-[20px] py-[50px] lg:py-[100px] flex flex-col items-center'>
      <div className='text-[16px] mb-[15px] text-myorange flex flex-row'>
        <FaStarOfLife size={16} />
        <h3 className='ml-[10px]'>
            Frequently Asked Questions
        </h3>
      </div>
      <h4 className='text-[28px] font-[700] mb-[20px]'>
      Everything you need to know about our services
      </h4>
      <div className='py-[15px] flex flex-wrap gap-[10px]'>
        <div
          className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out'
          onClick={() => document.getElementById('rentalrequirements')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Rental Requirements
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('paymentsandrefunds')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Payment & Refunds
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('bookingsandchanges')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Booking & Changes
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('cancellations')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Cancellation
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('corporate')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Corporate
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('crossborder')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Cross Border
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('fuelandinsurance')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Fuel & Insurance
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('insurance')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Insurance
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('drivinglicences')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Driving License
        </div>
        <div className='text-[16px] font-[400] bg-bgsubtle py-[10px] px-[20px] rounded-[99px] cursor-pointer hover:bg-myblack hover:text-mywhite transition duration-500 ease-in-out '
        onClick={() => document.getElementById('extras')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Extras
        </div>
      </div>
      <div className='w-[100%]'>
        <div id="rentalrequirements" className='pt-[75px] pb-[50px] '>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Rental Requirements
          </h4>
          {faqs.rentalRequirements.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="paymentsandrefunds" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Payment & Refunds
          </h4>
          {faqs.paymentAndRefunds.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="bookingsandchanges" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Bookings & Changes
          </h4>
          {faqs.bookingsAndChanges.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="cancellations" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Cancellations
          </h4>
          {faqs.cancellations.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="corporate" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Corporate
          </h4>
          {faqs.corporate.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="crossborder" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Cross Border
          </h4>
          {faqs.crossBorder.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="fuelandinsurance" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Fuel & Insurance
          </h4>
          {faqs.fuelAndInsurance.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="drivinglicences" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Driving Licences
          </h4>
          {faqs.drivingLicences.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>

        <div id="extras" className='py-[50px]'>
          <h4 className='text-[28px] font-[700] mb-[20px]'>
            Extras
          </h4>
          {faqs.extras.map((faq, index) => (
            <div key={index} className='pb-[25px] border-b border-gray-200'>
              <div
              className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
              onClick={() => toggleFAQ(index)}
              >
                <h5 className='mt-[30px] text-[18px] lg:text-[20px] font-[600] hover:text-myorange transition duration-500 ease-in-out'>
                    {faq.question}
                </h5>
                {activeIndex === index ? (
                    <IoIosArrowUp size={20} className='text-myblack hover:text-myorange' />
                ) : (
                    <IoIosArrowDown size={20} className='text-myblack hover:text-myorange' />
                )}
                </div>
                <div
                className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px] opacity-100 mt-[15px]' : 'max-h-0 opacity-0'
                }`}
                >
                    <p className='text-[16px] text-gray-700'>
                        {faq.answer}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
