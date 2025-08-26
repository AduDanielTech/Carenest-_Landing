import { nunito } from '@/components/Helper/exports';
import Image from 'next/image'
import React from 'react'


 type Props = {
    i: string;
    tname: string;
    trole: string;
    tavatar: string;
    text: string;
    
 }


const TestimonialCards = ({tname,trole,tavatar,text ,i}:Props) => {
  return (
    <div key={i} className="px-2 mb-20">
              <article className="bg-sky-50 flex flex-col justify-between rounded-2xl p-8 h-[280px] shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">{text}</p>

                <div className="flex items-center mb-7">
                  {/* avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    {/* use <img> or next/image in Next.js */}
                    <Image src={tavatar} alt={tname} width={100} height={100} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className={`${nunito.className}font-semibold text-gray-800`}>{tname}</div>
                    <div className="text-sm text-sky-400">{trole}</div>
                  </div>

                  {/* quote icon */}
                  <Image src="/images/quote-testimonial.png" alt='image' width={100} height={100} className="ml-4 w-[40] h-[40]" />
                  
                </div>
              </article>
            </div>
  )
}

export default TestimonialCards