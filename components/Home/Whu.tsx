import React from 'react'
import TopHeading from '../Helper/TopHeading'
import Image from 'next/image'
import { nunito } from '../Helper/exports';


 type Props = {
    imageOrder: string;
    textOrder: string;
 }

const reasons  = [
    {
        title: "Expert Team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
    },
    {
        title: "Modern Equipment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
    },
    {
        title: "Dedicated Care",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
    },
    {
        title: "Affordable Costs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
    },
 
   
]

const Whu = ({imageOrder,textOrder}:Props) => {
  return (

    <div className='flex items-center flex-col justify-between px-3 mt-[3rem] md:px-10 mb-20' >
        <TopHeading green='WHY CHOOSE US' heading='Redefining Care, One Patient at a Time'/>

         <div className='w-full md:w-[80%] Mx-3 md:Mx-10 mt-[2rem] grid items-center pb-20 grid-cols=1 lg:grid-cols-2 gap-12  md:mb-6'>
            <div className={`${textOrder} h-[90%] flex flex-col`}>
                {
                    reasons.map((reason, index) => (
                         <div className="flex py-[1rem] pl-[1rem] pr-[0.4rem] rounded-2xl gap-1.5 hover:shadow-2xl" key={index}
                         data-aos-delay={index*100}
                         data-aos="fade-in">
                            <Image src="/images/safe-icon.png" alt='image' width={100} height={100} className='w-[4rem] h-[4rem] mr-7 '/>
                            <div className="flex flex-col gap-2">
                                <h2 className={`${nunito.className} text-[1.2rem] font-semibold`}>{reason.title}</h2>
                                <p  className='text-[0.9rem] '>{reason.description}</p>
                            </div>
                      </div>
                    ))
                }
               
            </div>
             <div className={`${imageOrder} relative`}>
                    <Image src="/images/about1.png"  alt="image" width={380} height={380} className='w-[100%] h-[100%] mr-2 cursor-pointer text-white'/>
                    <div className='absolute grid place-content-center top-0 right-0 w-[100%] h-[100%]  '>
                        <Image src="/images/green-play-btn.png"  alt="image" width={380} height={380} className='w-[4.5rem] h-[4.5rem] mr-2 cursor-pointer  text-white'/>
                    </div>
                    
                    
                  </div>
        </div>
    </div>
       
    
  )
}

export default Whu