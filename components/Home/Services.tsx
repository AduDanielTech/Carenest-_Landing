import Image from 'next/image'
import React from 'react'
import TopHeading from '../Helper/TopHeading'
import { nunito } from '../Helper/exports'








const servicesData  = [
    {
        title: "General Check-Ups",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
        icon: <Image src="/images/safe-icon.png" alt='image' width={100} height={100} className='w-[50] h-[50] mr-7 '/>,
        link: null,
        image: "/images/service1.png",
    },
    {
        title: "Specialized Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci ",
        icon: <Image src="/images/safe-icon.png" alt='image' width={100} height={100} className='w-[50] h-[50] mr-7 '/>,
        link: <a href="##" className="text-sky-500 hover:underline flex items-center gap-2">Learn More</a>,
        image: "/images/service2.png",
    },
    {
        title: "Laboratory Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo",
        icon: <Image src="/images/safe-icon.png" alt='image' width={100} height={100} className='w-[50] h-[50] mr-7 '/>,
        link: null,
        image: "/images/service3.png",
    },
   
]






const Services = () => {
  return (
    <div className='flex items-center flex-col justify-between px-10 mb-20' >
        <TopHeading green='SERVICES' heading='Comprehensive Medical Services'/>
            <div className="flex items-center w-[100%]  mt-10"  >
                <div className="flex items-center justify-center ">
                    <Image src="/images/service-arrow-left.png" alt='image' width={100} height={100} className='w-[80] h-[40] cursor-pointer text-white'/>
                </div>
                            <div className='flex items-center mx-9 gap-8'>

                           
    {servicesData.map((service, index) => (
  <div
    key={index}
    className="w-full sm:w-[70%] mx-auto bg-sky-50 rounded-2xl p-6 flex flex-col gap-6 h-[520px] max-h-[620px]" // static height
  >
    <div className="flex items-center gap-4">
      {service.icon}
      <h2 className={`${nunito.className} text-[1.2rem] font-semibold`}>{service.title}</h2>
    </div>

    <div className="w-full flex-1 flex flex-col">
      <div className="rounded-xl overflow-hidden flex-1 flex flex-col">
        <div className="relative w-full flex-1">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
            priority={index === 0}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>

    {/* description */}
    <p className="text-gray-600">{service.description}</p>

    {/* link / CTA */}
    <div className="flex items-center justify-between">
      {service.link}
    </div>
  </div>
))}

                         </div>
                <div  className="flex items-center  h-[100%]">
                    <Image src="/images/service-arrow-right.png" alt='image' width={100} height={100} className='w-[80] h-[40]  cursor-pointer text-white'/>
                </div>
            </div>

            <button className='px-6 py-3 mt-10 bg-sky-500 text-white rounded-4xl shadow hover:bg-sky-400'>
                All Serivices
            </button>
    </div>
  )
}

export default Services