import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null);
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
     };

    

    return (
        <header>
    
       <h1><span><BsFillHouseFill />Inter-wood</span></h1>

        <nav  ref={navRef}>
            <Link to='/'>Home</Link>
            <Link to='/contact'>contact</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaRegTimesCircle/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <HiOutlineMenuAlt4/>
        </button>
        
   </header>
    )
}

export default Navbar
