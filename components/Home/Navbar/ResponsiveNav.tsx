"use client";
import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Navbar from './Nav';



const ResponsiveNav = () => {

    const [showNav, setShowNav] = useState(false);

    const handleNavOpen = ()=> setShowNav(true)
    const handleNavclose= ()=>setShowNav(false)
  return (
    <div >
        <Navbar openNav={handleNavOpen}  />
        <MobileNav showNav={showNav} closeNav={handleNavclose} />
    </div>
  )
}

export default ResponsiveNav
