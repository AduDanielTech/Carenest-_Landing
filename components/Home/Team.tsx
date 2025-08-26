import React from 'react'
import TopHeading from '../Helper/TopHeading'
import Image from 'next/image'
import { nunito } from '../Helper/exports'


const team  = [
    {
        image: "/images/team1.png",
        name: "Lydia Monroe",
        title: "Senior Doctor",
        link:"#",
    },
    {
        image: "/images/team2.png",
        name: "Lydia Monroe",
        title: "Expert Team",
        link:"#",
    },
    {
        image: "/images/team3.png",
        name: "Lydia Monroe",
        title: "Expert Team",
        link:"#",
    },
    {
        image: "/images/team4.png",
        name: "Lydia Monroe",
        title: "Expert Team",
        link:"#",
    },
]



const Team = () => {
  return (
       <div className='flex items-center flex-col justify-between px-10 mb-20' >

           <TopHeading green='WHY CHOOSE US' heading='Our Expert Team'/>

           <div className="flex items-center justify-center w-[100%] mt-15 gap-10">
            {
                team.map((person, index) => (
                  <div className="h-[350px] w-[20%] relative group" key={index}>
    <Image 
      src={`${person.image}`} 
      alt='image' 
      width={100} 
      height={100} 
      className='h-[100%] w-[100%] mr-7 rounded-3xl'
    />
    <div className="absolute grid place-content-center top-0 bottom-0 w-full h-full rounded-3xl bg-gradient-to-b from-transparent via-transparent via-[60%] to-sky-400 to-[100%] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
      <div className="absolute left-1/2 bottom-[50px] -translate-x-1/2 w-[80%] h-fit py-2 rounded-2xl flex flex-col items-center bg-white">
        <h2 className={`${nunito.className}text-[1rem] text-sky-500`}>{person.name}</h2>
        <p className='text-[0.7rem]'>{person.title}</p>
      </div>
      <div className="text-2xl flex text-white items-center absolute left-1/2 bottom-[20px] -translate-x-1/2 ">
        <a href={person.link} className='mr-2 text-[0.8rem]'>
          Doctors Profile
        </a>
        <span>
          <Image src="/images/arrow-up-right-team.png" alt='image' width={100} height={100} className='w-[15] h-[15] mr-3 cursor-pointer text-white'/>
        </span>
      </div>
    </div>
  </div>
                ))
            }     
           </div>
       </div>
  )
}

export default Team