import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';
import {AiFillFire} from 'react-icons/ai'
import { Link } from 'react-scroll';
import fire from '../assets/fire.jpg'

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
      <h2 className='flex justify-center text-3xl sm:text-4xl font-bold text-gray-400 mt-12 mb-4 slide-down'>Services</h2>
      <p className='text-sm text-stone-200 flex justify-center items-center mb-4 slide-left'>Professional Responsive Websites start as low as&nbsp;<span className='text-base fw-bold text-red-600'>$300</span> </p>
      <p className='text-stone-200 flex justify-center items-center text-start mx-auto slide-right max-w-[75%]'>The Ignite package is perfect for startups needing a captivating online presence. With 1-3 strategically designed pages, we'll build 3 sections of engaging content like videos, images, animations, and SEO-optimized copy.
      For small businesses seeking more visibility, the Wildfire package delivers enhanced capabilities. Get 1-5 responsive pages showcasing 5 sections of content, ongoing keyword research and SEO optimization, social media advertising assistance, and more. Wildfire empowers your brand's growth.
      The Inferno package offers our most comprehensive web design services for established brands. With 1-10 fully customized pages, we include routine upgrades, a client login portal for easy edits, and priority support access. Backed by our digital marketing agency, Inferno accelerates your business’s online success.


      </p><br></br>
      <p className='text-stone-200 flex justify-start items-start text-start mx-auto slide-right max-w-[75%]'>All packages include:</p><br></br>
      <ul className='flex flex-col justify-start items-start text-start mx-auto slide-right max-w-[75%]'>
        <li className='text-gray-400 font-bold'>
        - Free lifetime hosting - no hidden monthly fees
        </li>
        <li className='text-gray-400 font-bold'>
        - SEO optimization with advanced web design services
        </li>
        <li className='text-gray-400 font-bold'>
        - Commitment to frequent communication
        </li>
        <li className='text-gray-400 font-bold'>
        - Quick layout changes upon request
        </li>
      </ul>
      <p className='text-stone-200 flex justify-center items-center text-start mx-auto slide-right max-w-[75%]'><br></br>
      Partnering with our small business digital marketing agency gives you an exceptional website and so much more. Our custom web design packages fit within any budget while providing a lasting impact. Let's connect to ignite your online presence today!
      </p>


      <div className='grid md:grid-cols-3 gap-4 mt-20 px-4'>
        {/* Cards */}
        <div className='border border-4 border-gray-800 h-[600px] group relative slide-down'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src={fire} alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-red-600 text-2xl font-bold my-4 mr-4'>Ignite</h3>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> 1-3 pages</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Engaging content</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Eye-grabbing animations, images, videos</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Lifelong maintenance and updates</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-2 border-stone-300 bg-red-600 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
        <div className='border border-8 border-orange-600 h-[600px] group relative slide-down  mt-0 md:-mt-8'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src={fire} alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-red-700 text-2xl font-bold my-4 mr-4'>Wildfire</h3>
            <p className='text-xs muted -mt-2 mb-4'>(Most popular)</p>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> 1-5 pages</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Ongoing SEO keyword research </li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Continuous SEO optimization</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Social media advertising assistance</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-2 border-stone-300 bg-red-600 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
        <div className='border border-4 border-gray-800 h-[600px] group relative slide-down'>
          {/* Dim Overlay */}
          <div className='absolute inset-0 bg-black opacity-80'></div>
          <img className='w-full h-full overflow-hidden object-cover' src={fire} alt="" />
          {/* Overlay Content */}
          <div className='absolute inset-0 flex flex-col justify-center items-center px-2'>
            <h3 className='flex text-red-800 text-2xl font-bold my-4 mr-4'>Inferno</h3>
            <ul className='text-white items-center leading-loose'>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> 1-10 pages</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Routine site upgrades</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Client login portal</li>
              <li className='items-center'><AiFillFire className='inline-block text-red-600 items-center' size={23}/> Priority/prompt support</li>
            </ul>
            <Link to='contact' smooth={true} duration={500}>
              <button className='p-3 border-2 border-stone-300 bg-red-600 text-xs font-bold'>Request A Quote</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services