import React from 'react'
import { FaStarOfLife } from "react-icons/fa";


export default function Terms() {
  return (
    <div className='container py-[50px] lg:py-[100px] flex flex-col items-center'>
      <div className='text-[16px] mb-[15px] text-myorange flex flex-row'>
        <FaStarOfLife size={16} />
        <h3 className='ml-[10px]'>
            Terms & Conditions
        </h3>
      </div>
      <h4 className='text-[28px] font-[700] mb-[20px] text-center'>
        Below are our Terms & Conditions.<br/> Please read them carefully.
      </h4>
      <div className='w-[100%] px-[15px] lg:px-[30px]'>
        <div className='pt-[50px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Hiring Requirements.
          </h5>
          <p className='text-[16px] mb-[10px]'>
            Before hiring any vehicle with NovaRide Car Hire Services, the client should have following original Documents:
          </p>
          <ul style={{listStyleType: 'disc'}} className='ml-[20px]'>
            <li>National ID / Passport</li>
            <li>Valid Driver’s licence or International Driver’s licence</li>
            <li>Document to certify your residence or place of work ie: Work ID,Work Permit, VISA,Utility bill,document from Company HR</li>
          </ul>
        </div>
        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            General Agreement.
          </h5>
          <p className='text-[16px] mb-[10px]'>
            NovaRide Car Hire Services reserves the right for hiring out its vehicles.<br/>

            By Agreeing to our terms of booking,NovaRides Car Hire Services will NOT be liable to your misfortunes with our vehicles* while on self-drive.<br/>

            The Hirer has to be at-least 24 Years of age and have at-least 5 Years driving Experience.<br/>

            Cash, Card or Mpesa payments are accepted. Full Payments should be met upfront.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Hire Duration.
          </h5>
          <p className='text-[16px] mb-[10px]'>
            NovaRides Car Hire Services reserves the right for hiring out its vehicles.<br/>

            NovaRides Car Hire Services reserves the right to hire out our vehicles for a minimum of 4 days, while on self-drive.<br/>

            Chauffeur driven rentals, VIP transportation and Airport transfers can be hired for 1 day.<br/>
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Wedding Services
          </h5>
          <p className='text-[16px] mb-[10px]'>
            Wedding services are strictly chauffeur driven.<br/>
            Wedding vehicles are to be hired out betweeen 0600hrs and 1800hrs.Any additional time is subject to an agreed over-time fee.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Chauffeur Driven
          </h5>
          <p className='text-[16px] mb-[10px]'>
            For chauffeur-driven rentals, we adhere to a 12-hour work shift for all chauffeurs. The aim is to avoid fatigue. For example, the applicable working hours are from 0600hrs – 1800 hrs.<br/>
            The Driver overtime charges after 1900 hrs are subject to agreement with the hirer.
            Wedding cars, VIP transport & safari vehicles MUST be provided with a driver.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Game Park Policy
          </h5>
          <p className='text-[16px] mb-[10px]'>
            Kenya is a diverse country with a budding wildlife. We encourage and promote tourism in our country, however, we DO NOT allow certain vehicles in the game parks/ reserves due to the terrain. The only vehicles we permit in the Kenyan Game Parks and Reserve are the Safari Landcruiser and the Safari Tour vans only these vehicles come chauffeur-driven with a professional tour guide.
            <br/>

            Once the hirer breaches this policy, He/She will bear full responsibility for the vehicle repair and excess premium payment for the vehicle hired.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Crossing The Border
          </h5>
          <p className='text-[16px] mb-[10px]'>
            A Written authorization letter and Documents should be obtained from NovaRide Car Hire Services, should the hirer wish to cross the Kenyan border. NovaRide Car Hire Services will not accept any responsibility if the hirer is stopped from entry into another country.
            <br/>
            COMESA insurance, Yellow Fever vaccine and other documents are required for crossing the border.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Payment Policy
          </h5>
          <p className='text-[16px] mb-[10px]'>
            Online & card payments are subject to a bank transaction fee of 3.5%.
            <br/>
            Wedding services require 40% advance deposit(refundable),the balance is completed on the wedding day.<br/>
            We give 100% refund on cancelled or mistaken bookings.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Liability Insurance
          </h5>
          <p className='text-[16px] mb-[10px]'>
            This states that in the event of damage or mismanagement of the vehicle, the hirer carries full cost of repair for the vehicle if the cost of repair is less than 10% of the insurance value.
            <br/>
            However, if the cost of repair is more than 10% of the vehicles’ insurance value or is written off or lost the hirer bears the cost of the excess premium provided by the insurance company.<br/>
            It is the hirers’ sole responsibility to keep the car safe at all time.
          </p>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Fuel Policy
          </h5>
          <p className='text-[16px] mb-[10px]'>
            We’re flexible with our fuel policy;
          </p>
          <ul style={{listStyleType: 'disc'}} className='ml-[20px]'>
            <li>
              Vehicles provided full tank fueled should be returned likewise, for vehicles provided empty tank the client should return the vehicle likewise. NovaRides car Hire Services is not responsible for any fuel costs incurred in the event of over-fueling or under-fueling, the client bears full cost of fueling.
            </li>
            <li>In some cases, we handle the client’s fuel cost and bill the client at the end of the rental period through a collective invoice alongside the fuel receipts. For this option, prior arrangements with us should be made, and it is subject to our approval.</li>
          </ul>
        </div>

        <div className='pt-[25px] pb-[25px]'>
          <h5 className='text-[20px] font-[600] mb-[10px]'>
            Cancellation Policy
          </h5>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>1.Cancellation Period:</span>Customers must notify NovaRide Car Hire Services of any cancellations at least 72 hours prior to the scheduled pick-up time to avoid cancellation charges.
          </p>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>2.Cancellation Charges:</span>Cancellations made more than 72 hours before the scheduled pick-up time will not incur any charges.<br/>
            Cancellations made less than 24 hours before the scheduled pick-up time will be subject to a cancellation fee equivalent to 50% of the total booking amount.<br/>
            No-shows will be charged the full booking amount.
          </p>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>3. Refunds:</span>Refunds for cancellations made within the acceptable cancellation period will be processed within 7-10 business days from the cancellation date. Refunds will be issued using the same method of payment used for the booking.
          </p>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>4. Modification Policy: </span>Customers may modify their booking details (such as pick-up time, drop-off location, etc.) without incurring any charges, provided that the modifications are communicated to NovaRide Car Hire Services at least 72 hours before the scheduled pick-up time.
          </p>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>5.Force Majeure: </span>In the event of unforeseen circumstances such as natural disasters, extreme weather conditions, or other force majeure events, NovaRide Car Hire Services reserves the right to modify or cancel bookings without prior notice. In such cases, customers will be entitled to a full refund.
          </p>
          <p className='mb-[10px]'>
            <span className='font-[600] text-myblack mr-[10px] '>6. Contact Information:  </span>Customers can cancel or modify their bookings by contacting NovaRide Car Hire Services through their customer service hotline or email address provided on the booking confirmation.
          </p>
        </div>
      </div>
    </div>
  )
}
