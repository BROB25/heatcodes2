import { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const slides = [
  <img src="/src/assets/travel-site.png" alt="" />,
  <img src="/src/assets/travel-site.png" alt="" />,
  <img src="/src/assets/travel-site.png" alt="" />,
  <img src="/src/assets/travel-site.png" alt="" />, 
]

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0)

  const prev = () => 
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <BsFillArrowLeftCircleFill size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <BsFillArrowRightCircleFill size ={40} />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div className={`
            transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}


// SERVICES COPY

import React from 'react'
import {AiFillFire} from 'react-icons/ai'
import { Link } from 'react-scroll';


const Services = () => {
  return (
    <div id='services' className='my-12'>
      <h2 className='flex justify-center text-4xl sm:text-5xl font-bold text-gray-400 mt-12 mb-4'>Services</h2>
      <p className='text-sm text-stone-200 flex justify-center items-center mb-4'>Professional Responsive Websites start as low as &nbsp;<span className='text-base fw-bold text-green-700'>$300</span> </p>
      <div className='grid md:grid-cols-3 gap-4 px-8'>
        {/* Cards */}
        <div className='border border-4 border-gray-800 h-[600px] group relative'>
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
        <div className='border border-4 border-gray-800 h-[600px] group relative'>
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
        <div className='border border-4 border-gray-800 h-[600px] group relative'>
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