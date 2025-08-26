import React from 'react'
import { nunito } from './exports'


 type Props = {
    heading: string;
    green: string;
   
 }

const TopHeading = ({heading,green}:Props) => {
  return (
    <>
         <h3 className="text-emerald-400 font-semibold"> 
                      <span className='tracking-[-0.1rem] mr-3'>
                        ----------
                      </span>
                      {green}
                      </h3>
                    <h1 className={`font-bold text-4xl mt-5 ${nunito.className}`}>
                      {heading}
                    </h1>
    </>
  )
}

export default TopHeading