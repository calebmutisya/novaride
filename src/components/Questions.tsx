"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import faqimage from '../assets/images/faqimage.webp';

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaStarOfLife } from "react-icons/fa";

const faqData = [
  {
    question: "How can I book a car?",
    answer: "You can book a car by clicking on the 'Book Now' button on our website or by calling our customer service team."
  },
  {
    question: "What documents do I need to rent a car?",
    answer: "You'll need a valid driver's license, a credit card, and possibly proof of insurance depending on the location."
  },
  {
    question: "Can I cancel or change my booking?",
    answer: "Yes, you can cancel or modify your booking through our website or by contacting customer support."
  }
];

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-bgsubtle">
        <section className='container px-[15px] lg:px-[0px] py-[50px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center'>
            <div className='w-[100%] mb-[50px] lg:mb-[0px] lg:w-[50%] '>
                <Image src={faqimage} alt="faqimage" />
            </div>
            <div className='px-[15px] w-[100%] lg:w-[50%]'>
                <div className='text-[16px] mb-[15px] text-myorange flex flex-row'>
                <FaStarOfLife size={16} />
                <h3 className='ml-[10px]'>
                    Frequently Asked Questions
                </h3>
                </div>
                <h4 className='text-[28px] font-[700] mb-[20px]'>
                Everything you need to know about our services
                </h4>
                {faqData.map((faq, index) => (
                <div key={index} className='pb-[25px] border-b border-gray-200'>
                    <div
                    className='flex flex-row items-center justify-between pr-[30px] cursor-pointer'
                    onClick={() => toggleFAQ(index)}
                    >
                    <h5 className='mt-[30px] text-[20px] font-[600]'>
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
        </section>
    </div>
  );
}
