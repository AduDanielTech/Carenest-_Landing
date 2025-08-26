import Image from 'next/image'
import React from 'react'
import { FaChevronDown, FaPaperPlane } from 'react-icons/fa'






const Contact = () => {
  return (       
   <section className="max-w-7xl mx-auto px-6 py-7 relative">
      <div className="bg-sky-400 rounded-4xl p-8 lg:p-12  ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4  flex justify-center  lg:justify-start h-[100%]">                     
                     <Image src="/images/contact-us.png" alt="doctor"  width={100} height={100}  className="w-[27%] h-[70vh] absolute top-[-60] " />
                  </div>

            {/* Form */}
                  <div className="lg:col-span-7">
                        <div className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <input
                              type="text"
                              placeholder="Your Name"
                              className="w-full px-4 py-3 rounded-md bg-sky-500 placeholder-sky-100 text-white focus:outline-none"
                              />
                              <input
                              type="email"
                              placeholder="Your Email"
                              className="w-full px-4 py-3 rounded-md bg-sky-500 placeholder-sky-100 text-white focus:outline-none"
                              />
                              </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-md bg-sky-500 placeholder-sky-100 text-white focus:outline-none"
                        />
                       <div className="relative w-full">
  <select className="w-full px-4 py-3 rounded-md bg-sky-500 placeholder-sky-100 text-white focus:outline-none appearance-none">
    <option>Select Services</option>
    <option>General Checkup</option>
    <option>Specialized Care</option>
  </select>
  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
    <Image src="/images/chevron-down.png" alt="doctor"  width={100} height={100}  className="w-[15px] h-[7px] " />
  </span>
</div>
                       
                        </div>


                        <textarea
                        rows={4}
                        placeholder="Messages"
                        className="w-full px-4 py-3 rounded-md bg-sky-500 placeholder-sky-100 text-white focus:outline-none"
                        />


                        <div>
                        <button className="px-5 py-2.5 bg-white text-sky-500 rounded-full shadow-md hover:shadow-lg">
                        Send Message
                        </button>
                        </div>
                        </div>
                  </div>
            </div>
      </div>
</section>
  )
} 

export default Contact