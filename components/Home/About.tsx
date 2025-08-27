"use client"
import React from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { nunito } from '../Helper/exports';


 type Props = {
    imageOrder: string;
    textOrder: string;
    title: string;
    greentext: string;
 }


const About = ({greentext,textOrder,title,imageOrder,}:Props) => {
  return (
    <div className='w-[80%] mx-auto mt-[8rem] grid items-center pb-20 grid-cols=1 lg:grid-cols-2 gap-12  md:mb-6'>
      {/* text content */}
      <div className={`${textOrder} h-[90%]`}
      data-aos-delay="150"
        data-aos="fade-up"
      >
         <div>
            <h3 className="text-emerald-400 font-semibold"> 
              <span className='tracking-[-0.1rem] mr-3'>
                ----------
              </span>
              {greentext}
              </h3>
            <h2 className={`${nunito.className} text-4xl md:text-[2.5rem] font-bold text-gray-900 mt-2`}>{title}</h2>
            <p className="mt-4 text-black">We are a team of dedicated medical practitioners committed to delivering personalized care and improving lives with compassion and expertise.</p>

            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-3 bg-sky-500 text-white rounded-[30px]">Learn more</button>
              <button className="px-4 py-2 border rounded-lg flex items-center border-none">
                <Image src="/images/play-btn.png" alt='image' width={100} height={100} className='w-[50px] h-[50px] mr-2 cursor-pointer text-white'/>
              <span>  Watch video</span>
                </button>
            </div>

            <div className="mt-6 flex gap-10">
              <Image src="/images/about1-1.png" alt="thumb" width={64} height={64} className="rounded-lg w-[30%] h-[100%]" />
                  <div className=''>
                    <p>
                      We are a team of dedicated medical practitioners committed to delivering personalized care.
                    </p>
                    <div className='flex'>
                      <Image src="/images/arrow-left-g.png" alt='image' width={100} height={100} className='w-[40] h-[20] mt-8 mr-2 cursor-pointer text-white'/>
                      <Image src="/images/arrow-right.png" alt='image' width={100} height={100} className='w-[40] h-[20] mt-8 mr-2 cursor-pointer text-white'/>
                    </div>
                  </div>
              <div>
             
              </div>
            </div>
          </div>
      
      </div>
                 {/*image  */}
      <div className={`${imageOrder}`}
       data-aos-delay="100"
        data-aos="fade-up "
      
      >
        <Image src="/images/about1.png"  alt="image" width={380} height={380} className='w-[100%] h-[100%] mr-2 cursor-pointer text-white'/>
      </div>
    </div>
  )
}

export default About
