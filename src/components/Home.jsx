import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';
import {Link} from 'react-scroll'
import logo from '../assets/logo3.svg'

const Home = () => {

  useEffect(() => {
    window.addEventListener('scroll', animateElements);
    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);

  return (
    <div id='home' className='max-w-[800px] h-screen flex justify-center items-center flex-col mx-auto'>
      <img className='top-0 left-0 w-[300px] md:w-full h-screen' src={logo} alt="logo" />
      <div className='flex flex-nowrap flex-col justify-center items-center w-full text-center'>
        <h4 className='text-base md:text-xl text-stone-400 font-bold -mt-40 uppercase slide-right'>Web Design <span className='text-stone-700'>&nbsp;|&nbsp;</span> App Creation <span className='text-stone-700'>&nbsp;|&nbsp;</span> Innovation
        </h4>
        <Link to='services' smooth={true} duration={500}>
          <button className='mt-8 slide-left hover:scale-110 transition-all duration-300 shadow-lg'>View Services</button>
        </Link>
      </div>
    </div>
  )
}

export default Home