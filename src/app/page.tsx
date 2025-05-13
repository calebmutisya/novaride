import Image from 'next/image';
import herobg from '../assets/images/hero-bg.jpg'
import MyButton from '@/components/MyButton';

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
    </div>
  );
}
