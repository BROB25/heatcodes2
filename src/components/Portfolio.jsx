import React from 'react'
import {FaArrowDown} from 'react-icons/fa'
import http from '../assets/http.jpg'

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='relative w-full h-[500px]'>
        <img className='w-full h-full object-cover' src={http} alt="" />
        <div className='absolute inset-0 bg-black opacity-80'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
          <h2 className='text-3xl sm:text-4xl text-gray-400 font-bold pt-16 mb-4'>Portfolio</h2>
          <p className='text-sm md:text-base'><FaArrowDown className='inline-block text-red-600' /> View some of my latest projects <FaArrowDown className='inline-block text-red-600' /></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio