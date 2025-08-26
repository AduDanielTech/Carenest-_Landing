"use client"

import React, { useEffect } from 'react'
import Hero from './Hero'

import About from './About'
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Services from './Services'
import Whu from './Whu'
import Team from './Team'
import Testimonial from './Testimonial/Testimonial'
import CustomerTestimony from './CustomerTestimoy/CustomerTestimony'
// ..






const Home = () => {


useEffect (() => {
  const initAos = async()=> {
    await import('aos')
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom",
    })

    
  }
  initAos()
},[])


  return (
    <div className='overflow-hidden'>
      <Hero />
      <About textOrder="lg:order-2" imageOrder='lg:order-1' greentext='WHO ARE WE' title='Professional Doctor With Years Of Experience'/>
      <Services />
      <Whu  textOrder="lg:order-1" imageOrder='lg:order-2' />
      <Team />
      <Testimonial />
      <Contact /> 
      <CustomerTestimony />
     {/*  <Features />
      <About textOrder="lg:order-2" imageOrder='lg:order-1' greentext='Shop Now' title='capture sound with 50mml drivers'/>
      <Review />
      */}
    </div>
  )
}

export default Home
