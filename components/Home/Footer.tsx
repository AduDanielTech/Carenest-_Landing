import Image from 'next/image'
import React from 'react'
import { FaDribbble, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-sky-900 ' >
        <div className="w-[80%] m-auto items-start grid-cols-1  sm:grid-cols-2 md:grid-cols-2 grid lg:grid-cols-4 gap-10  ">
            {/* 1st part */}
            <div>
                <div className="font-bold text-white text-3xl ">
                    
                    <Image 
                    src="/images/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='w-40 h-20 object-contain'

                     />
                    
                </div>
                <p className="font-semibold text-white text-sm mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Itaque dolorum nulla incidunt facilis hic minima molestias veniam maxime cum ipsam.
                </p>
                <div className="flex items-center  text-white space-x-4 mt-6 ">
                 <div className="w-8 h-8 text-white  flex items-center justify-center flex-col rounded-full ">
                    <Image  
                    src="/images/facebook-footer-icon.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='w-40 h-20 object-contain'
                    />
                    
                </div>
                <div className="w-8 h-8 text-white flex items-center justify-center flex-col rounded-full ">
                    <Image  
                    src="/images/instagram-footer-icon.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='w-40 h-20 object-contain'
                    />
                    
                </div>
                <div className="w-8 h-8 text-white flex items-center justify-center flex-col rounded-full ">
                     <Image  
                    src="/images/youtube-footer-icon.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='w-40 h-20 object-contain'
                     />
                </div>
                <div className="w-8 h-8 text-white flex items-center justify-center flex-col rounded-full ">
                     <Image  
                    src="/images/tictok-footer-icon.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='w-40 h-20 object-contain'
                    />
                </div>

                </div>
               
            </div>
            {/* 2nd part */}
            <div className="space-y-5">
                <h1 className="text-lg text-green-300  font-semibold  "> Comapny</h1>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">About Us</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Vison & Mission</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Leadership </p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Career</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">News & article</p>
            </div>
            {/* 3rd part */}
            <div className="space-y-5">
                <h1 className="text-lg text-green-300  font-semibold  "> Support</h1>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Help Center</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">FAQ</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Contact Us </p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Tickets</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">Get An Appointment</p>
            </div>
            <div className="space-y-5">
                <h1 className="text-lg text-green-300  font-semibold  ">Contact Info</h1>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">support@domain.com</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">1234 Parker Rd. Allentown, New Mexico 12345</p>
                <p className="text-white hover:text-gray-400 font-medium cursor-pointer text-sm">(012) 0123-4567</p>
               
            </div>

           
               
        </div>
        {/* bottom Part */}
        <div className="mt-8  w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-white text-sm  " >
            <p className="textcenter md:text-left">
                Copyright© 2024 Ebo Designs</p>
                <div className="flex items-center space-x-6">
                    <span>Privacy Policy</span>
                    <span className='text-white hover:text-grey-800'>
                        Terms & Services 
                         </span>
                </div>
                </div>    
    </div>
  )
}

export default Footer