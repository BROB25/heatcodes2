import React from 'react'
import {FaArrowDown} from 'react-icons/fa'

const Portfolio = () => {
  return (
    <section id='portfolio' className='h-[500px] w-full'>
      <div className='flex flex-col justify-center items-center text-white'>
        <h1 className='text-2xl md:text-4xl text-gray-100 font-bold pt-16 mb-8 slide-down'>Web Design Business <span className='text-orange-600 font-extrabold'>Portfolio</span></h1>
        <p className='max-w-[85%] text-xs text-center md:text-base'>Take a look through my web design portfolio to see the visually appealing, responsive sites I've built for diverse businesses. Utilizing React, Tailwind, and other advanced programming languages, I code and host sites optimized for desktop and mobile users. Ranging from projects like a Real Estate photography site with smooth animations, a rental company page with bold designs, and local service sites like cleaning companies and DJ agencies with seamless interfaces. Each client website focuses on creating an impactful user experience through simplicity, speed, and captivating styles. Whether you're searching for 'web design near me' or 'local website designers', my portfolio showcases the programming capabilities and eye for design that Heat Codes offers. I've helped small businesses across industries by turning their visions into fully functioning, professional-quality websites. Review my portfolio today to see samples of successful sites I can create for your company as well. Let's connect to bring your web presence to the next level!
        </p><br></br>
        <p className='text-sm md:text-base my-8'><FaArrowDown className='inline-block text-red-600' /> Video examples from latest projects <FaArrowDown className='inline-block text-red-600' /></p>
      </div>
    </section>
  )
}

export default Portfolio