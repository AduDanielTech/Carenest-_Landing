
import Image from 'next/image'
import React from 'react'
import { Nunito } from "next/font/google";
import { font } from '../Helper/exports';
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

const Hero = () => {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center bg-[linear-gradient(90deg,_theme(colors.blue.100)_0%,_theme(colors.blue.100)_50%,_theme(colors.green.100)_100%)] pt-30 sm:pt-[2rem] md:pt-[4rem]'>
      <div className="w-[90%] md:-w-[80%] mx-auto items-center h-[100%] grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* text content */}
        <div data-aos="fade-up">
           <h2 className={`${font.className} text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900`}>
  Your <span className="text-sky-500">Health</span>, Our <span className="text-emerald-400">Priority</span>
</h2>
            {/* descriiption */}
            <p className="text-xs sm:text-sm md:text-base font-medium mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id facilis quo enim dicta laborum dolorum delectus! Enim, tenetur dolorem!
            </p> 
            {/* buttons */}
            <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 bg-sky-500 text-white rounded-[30px] shadow hover:bg-sky-400">
                    Book an Appointment
                </button>
            </div>
            {/* image */}
           
        </div> 
        <div className="mx-auto hidden xl:block " 
        data-aos-delay="150"
        data-aos="zoom-in ">
                <Image src="/images/hero.png" alt='image' width={1000} height={1000}
                 className='w-[100%] h-[90vh]  cursor-pointer transform translate-y-[6rem] text-white'/>
            </div>
      </div>
      <div className="absolute hidden xl:flex top-40 right-40 items-center"
  data-aos-delay="150"
  data-aos="zoom-out"
>
  <Image
    src="/images/fl-hero.png"
    alt="scroll"
    width={1000}
    height={1000}
    className='w-[8rem] h-30'
  />
</div>
      <div className="absolute bottom-[20%] right-[36%]  hidden xl:flex items-center"
       data-aos-delay="150"
        data-aos="fade-in"
      >
        <Image src="/images/hero-stats.png" 
        alt="scroll" 
        width={1000} 
        height={1000} 
        className='w-[15rem] h-25 ' />
      </div>
      {/* Stats card overlapping bottom */}
        <div className={`relative ${nunito.className}`}
         data-aos-delay="100"
        data-aos="fade-in"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl py-7 bg-white rounded-[30px] shadow-xl shadow-sky-100 transform -translate-y-[-10] p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className='border-r border-gray-500 px-2'   >
                  <div className="text-4xl font-bold text-emerald-400 border-r-black">10+</div>
                  <div className={`${font.className}text-0.5xs mt-2 text-gray-500`}>Years of experience</div>
                </div>
                <div className='border-r md:border-gray-500 px-2'   >
                  <div className="text-4xl font-bold text-emerald-400">90%</div>
                  <div className={`${font.className}text-0.5xs mt-2 lg:text-gray-500` }>Patient satisfaction</div>
                </div>
                <div className='border-r border-gray-500 px-2'   >
                  <div className="text-4xl font-bold text-emerald-400 ">2000+</div>
                  <div className={`${font.className}text-0.5xs mt-2 text-gray-500`}>Patients served annually</div>
                </div>
                <div className=' px-2 border-gray-500'   >
                  <div className="text-4xl font-bold text-emerald-400">20+</div>
                  <div className={`${font.className}text-0.5xs mt-2 text-gray-500`}>Healthcare providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
