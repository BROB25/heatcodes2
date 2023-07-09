import React from 'react'
import {FaArrowDown} from 'react-icons/fa'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='relative w-full h-full'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/1591059/pexels-photo-1591059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className='absolute inset-0 bg-black opacity-80'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h3 className='text-4xl sm:text-5xl text-gray-400 font-bold pt-16 mb-4'>Portfolio</h3>
          <p className='text-sm md:text-base'><FaArrowDown className='inline-block text-red-700' /> View some of my latest projects <FaArrowDown className='inline-block text-red-700' /></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio