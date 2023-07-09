import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Footer = () => {
  return (
    <div id='footer' className='max-w-[1400px] h-[200px] flex items-end justify-evenly text-white border-t-2 border-gray-400 text-xs md:text-sm mx-auto pb-8'>
      <div className='flex-col'>
        <a href="tel:6125849396"><FaPhoneAlt className='inline-block cursor-pointer text-red-700' size={17} />
          <p className='inline-block pl-2 text-xs sm:text-sm'>(612) 584-9396</p><br></br>
        </a>
        <a href="mailto:bbrenterprise25@gmail.com"><GrMail className='inline-block cursor-pointer text-red-700' size={17} />
          <p className='inline-block pl-2 text-xs sm:text-sm'>bbrenterprise25@gmail.com</p>
        </a>
      </div>
      <p className='text-xs sm:text-sm'>Copyright © 2023 Brandon Roberts</p>
      
    </div>
  )
}

export default Footer