"use client"
import { navLinks } from '@/components/constants/constants'
import ThemeToggle from '@/components/Helper/ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'






const Navbar = () => {

  const [navBg, setNavBg] = useState(false);


  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90 ) setNavBg(true);
      else setNavBg(false);
    }

    window.addEventListener("scroll", handler);
    return ()=> removeEventListener("scroll", handler)
  }, [])
  return (
    <div className={`transition-all ${navBg ? "bg-white shadow-lg" : ' fixed' } duration-200 h-[12vh] z-[100] fixed w-full  bg-white`}>
      <div className='flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto'>
        {/* LOGO */}
        <div className=""> 
          <Image width={100} height={100} src="/images/logo.png" alt="logo" className='w-40 h-40 object-contain' /> 
        </div>

  {/* Links & Buttons */}
        <div className=" lg:flex items-center space-x-10">
        {navLinks.map((link) => {
          return(
            <Link
            href={link.url}
            key={link.id}
            className=" hover:text-green-300 font-semibold transition-all duration-200">
              <p>{link.label}
                
              </p>
            </Link>
          
          )
        })}

           {/* contact us button */}
             <div className='flex items-center rounded-4xl py-2 pl-2 pr-4 bg-sky-100'>
            <button className=" lg:block px-6 py-2 bg-sky-500 text-white rounded-3xl  hover:bg-sky-500">
              Contact Us
           <Image width={20} height={20} src="/images/arrow-right-circle.png" alt="arrow" className='w-6 h-6 inline-block ml-2' />
            </button>

             </div>
             
                {/* search icon */} 
                <Image width={20} height={20} src="/images/search-icon.png" alt="search" className='w-6 h-6 cursor-pointer text-white' />
                {/* globe */}
                <div className='flex items-center space-x-2'> 
                <Image width={200} height={200} src="/images/globe-icon.png" alt="globe" className='w-6 h-6 cursor-pointer ' />
                <p className='text-gray-600'>ENG</p>
                <Image width={20} height={20} src="/images/chevron-down-icon.png" alt="icon"  className='w-4 h-4 mr-2 cursor-pointer text-white' />
                </div>
        </div>
      
       
        </div>
       
    </div>
  )
}

export default Navbar
