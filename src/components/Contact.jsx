import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';

const Contact = () => {

  useEffect(() => {
    window.addEventListener('scroll', animateElements);
    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16'>
      <h2
        className='flex justify-center text-4xl sm:text-5xl font-bold text-gray-400 my-12 slide-right'
        >Contact
      </h2>
      <form className='slide-left' action="https://formcarry.com/s/kH5_-KjRfa" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-gray-200'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-gray-200'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-200'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-200'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-gray-200'>Message</label>
          <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' />
        </div>
        <button className='bg-red-700 text-gray-200 mt-4 w-full p-4 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}

export default Contact