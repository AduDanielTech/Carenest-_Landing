"use client"
import TopHeading from '@/components/Helper/TopHeading'
import React from 'react'

import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div className='flex items-center flex-col justify-between px-10 mb-20' >
         <TopHeading green='TESTIMONIAL' heading='Customer Feedback'/>
          <div className=" w-[90%] lg:w-[60%] mx-auto mt-16 ">
            {/* slider */}
            <TestimonialSlider />

            </div> 
    </div>
  )
}

export default Testimonial