import Image from 'next/image'
import React from 'react'


type Props = {
    desc: string;
    img: string;
    link: string;
}
const CustomerTestimonyCard = ({img,link,desc}:Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="w-full h-[35vh] relative ">
<Image src={img} alt={link} fill className="rounded-3xl object-cover" />
</div>
<div className="p-6">
<p className="font-semibold mb-4">{desc}</p>
<a href={link} className="text-sky-300 text-sm font-semibold">Learn more</a>
</div>
</div>
  )
}

export default CustomerTestimonyCard