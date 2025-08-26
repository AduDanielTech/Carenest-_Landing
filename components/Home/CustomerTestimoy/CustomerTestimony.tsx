import Image from 'next/image'
import React from 'react'
import CustomerTestimonyCard from './CustomerTestimonyCard'
import { nunito } from '@/components/Helper/exports'






const CustomerTestimony = () => {

    const testimonials = [
{
img: '/images/customer-testimonial1.png',
link: 'Testimonial 1',
desc:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus.',
},
{
img: '/images/customer-testimonial1.png',
link: 'Testimonial 2',
desc:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus.',
},
{
img: '/images/customer-testimonial1.png',
link: 'Testimonial 3',
desc:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus.',
},
]


  return (
   <div className="max-w-7xl mt-10 mx-auto px-6 pb-20">
<div className="flex items-center justify-between mb-8">
<div>
  
 

<div className="text-sm text-emerald-400 uppercase tracking-widest mb-2">
   <span className='tracking-[-0.1rem] mr-3'>
                        ----------
                      </span>
  Testimonial
  </div>
<h2 className={`${nunito.className} text-4xl mt-2  font-bold text-gray-900`}>Customer Feedback</h2>
</div>
<button className="text-white bg-sky-500 px-4 py-2 rounded-full shadow-sm hidden md:inline">View all</button>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, idx) => (
                      <CustomerTestimonyCard key={idx} img={t.img} desc={t.desc} link={t.link} />
                ))}
        </div>
</div>
  )
}

export default CustomerTestimony