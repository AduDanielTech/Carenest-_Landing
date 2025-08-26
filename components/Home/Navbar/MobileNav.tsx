import { navLinks } from '@/components/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrClose } from 'react-icons/gr'




type Props = {
  showNav: boolean;
  closeNav: () => void
}


const MobileNav = ({showNav, closeNav}: Props ) => {
  const navOpen = showNav ? 'translate-x-o' : "translate-x-[-100%]"
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform  transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed  justify-center flex flex-col h-full transform transition-all duration-500 delay-100 w-[80%] sm:w-[60%] bg-emerald-500 space-y-10 z-[1050]`}>

      {navLinks.map((link) => {

        
          return <Link 
          key={link.id}
          href={link.url}
          >
            <p className="text-white  w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] 
            hover:border-b-[3px] transform transition-all">
              {link.label}
              
            </p>
          </Link>
        })}
         {/* contact us button */}
                     <div className='flex items-center rounded-3xl gap-[1rem] py-2 pl-2 pr-4 bg-sky-100'>
                    <button className=" lg:block px-6 py-2 bg-sky-500 text-white rounded-3xl  hover:bg-sky-500">
                      Contact Us
                   <Image width={20} height={20} src="/images/arrow-right-circle.png" alt="arrow" className='w-6 h-6 inline-block ml-2' />
                    </button>
          {/* search icon */} 
                        <Image width={20} height={20} src="/images/search-icon.png" alt="search" className='w-6 h-6 cursor-pointer text-white' />
                        {/* globe */}
                        <div className='flex items-center space-x-2'> 
                        <Image width={200} height={200} src="/images/globe-icon.png" alt="globe" className='w-6 h-6 cursor-pointer ' />
                        <p className='text-gray-600'>ENG</p>
                        <Image width={20} height={20} src="/images/chevron-down-icon.png" alt="icon"  className='w-4 h-4 mr-2 cursor-pointer text-white' />
                        </div>
                     </div>
                     
                      
          <GrClose onClick={closeNav} className='absolute cursor-pointer   top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
      </div>
      {/* close icon */}
   
    </div>
  )
}

export default MobileNav
