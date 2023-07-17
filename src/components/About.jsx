import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';
import { TypeAnimation } from "react-type-animation";
import {Link} from 'react-scroll'
import red from '../assets/red.jpg'


const About = () => {

  useEffect(() => {
    window.addEventListener('scroll', animateElements);
    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);

  return (
    <div id='about' className='flex flex-col lg:flex-row my-24 gap-8'>
      <div className="flex-1">
        <img className='w-full h-full mx-auto' src={red} alt="" />
      </div>
      <div className="flex-1 justify-center px-6">
        <div className='max-w-[700px] mx-auto h-full flex flex-col justify-center'>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-400 slide-down">
            Brandon Roberts
          </h1>
          <h2 className="pt-4 text-2xl sm:text-3xl text-gray-100 font-semibold">
            I'm a{" "}
            <span className="text-red-600">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Programmer",
                2000,
                "Veteran",
                2000,
                "Husband",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
            </span>
          </h2>
          <p className='text-white mt-8'>Hi, I'm Brandon Roberts, a 30-year-old father and husband who has a passion for coding and creating. With my primary expertise in front-end languages, as well as experience with other programming languages, I have been able to bridge that alongside my creativity to form Heat Codes. My love for coding has been honed over the years, thanks to my background in IT from my military service and various tech-related careers.</p><br></br>
          <p className='text-white'>I find joy in designing, and solving problems through coding, and my experience has helped me develop a keen eye for detail and precision. Whether it's designing visually appealing layouts or tackling complex coding obstacles, I'm always up to the challenge.</p>
          <Link to='portfolio' smooth={true} duration={500}>
            <div className='flex justify-center items-center w-full slide-left'>
              <button className=''>
                View Portfolio
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About