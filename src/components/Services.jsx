import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';
import {AiFillFire} from 'react-icons/ai'
import { Link } from 'react-scroll';

const Services = () => {

  useEffect(() => {
    window.addEventListener('scroll', animateElements);
    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);

  return (
    <div id='services' className='my-12'>
      <h2 className='flex justify-center text-4xl sm:text-5xl font-bold text-gray-400 mt-12 mb-4 slide-right'>Services</h2>
      <p className='text-sm text-stone-200 flex justify-center items-center mb-4 slide-left'>Professional Responsive Websites start as low as&nbsp;<span className='text-base fw-bold text-red-700'>$300</span> </p>
      <div className='grid md:grid-cols-3 gap-4 px-8 mt-12'>
        {/* Cards */}
        <div className='border border-4 border-gray-800 h-[600px] group relative slide-down'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src="https://images.pexels.com/photos/9667105/pexels-photo-9667105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-orange-700 text-2xl font-bold my-4 mr-4'>Web Design</h3>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Custom designs tailored to your brand</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Responsive layouts</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Eye-grabbing animations</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Lifelong maintenance and updates</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-4 border-stone-400 bg-red-700 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
        <div className='border border-4 border-gray-800 h-[600px] group relative slide-down'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src="https://images.pexels.com/photos/9667105/pexels-photo-9667105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-orange-700 text-2xl font-bold my-4 mr-4'>App Creation</h3>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> User-friendly app interface</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Visually captivating designs</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Modern responsive layouts</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Integration with API's</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-4 border-stone-400 bg-red-700 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
        <div className='border border-4 border-gray-800 h-[600px] group relative slide-down'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src="https://images.pexels.com/photos/9667105/pexels-photo-9667105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-orange-700 text-2xl font-bold my-4 mr-4'>Innovation</h3>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> AI integration and solutions</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Chat bot incorporation</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> Website enhancement consultations</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-700 items-center' size={23}/> More to come</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-4 border-stone-400 bg-red-700 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services