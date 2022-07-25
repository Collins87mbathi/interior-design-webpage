import React from 'react'
import Best from '../best/Best'
import Featured from '../featured/Featured'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
    <Navbar />
    <Fade top>
    <Hero/>
    <Best/>
    <Featured/>
    <Footer/>
    </Fade>
    </>
  )
}

export default Home