import React, {useState, useEffect} from 'react'
import {MdOutlineMenu} from 'react-icons/md'
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='absolute w-full flex justify-between items-center'>
      <div className="fixed z-30 top-2 left-2">
        {nav ? (
          <IoMdClose onClick={handleNav} className='z-20 cursor-pointer text-red-600' size={35} />
        ) : (
          <MdOutlineMenu onClick={handleNav} className='z-20 cursor-pointer text-stone-500' size={35} />
        )}
      </div>
      <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500 z-10'}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-lg sm:text-xl p-8 cursor-pointer'><Link to='home' smooth={true} duration={500} onClick={handleNav}>Home</Link></li>
          <li className='font-bold text-lg sm:text-xl p-8 cursor-pointer'><Link to='about' smooth={true} duration={500} onClick={handleNav}>About</Link></li>
          <li className='font-bold text-lg sm:text-xl p-8 cursor-pointer'><Link to='services' smooth={true} duration={500} onClick={handleNav}>Services</Link></li>
          <li className='font-bold text-lg sm:text-xl p-8 cursor-pointer'><Link to='portfolio' smooth={true} duration={500} onClick={handleNav}>Portfolio</Link></li>
          <li className='font-bold text-lg sm:text-xl p-8 cursor-pointer'><Link to='contact' smooth={true} duration={500} onClick={handleNav}>Contact</Link></li>
          <div className='flex items-center mt-4'>
            <a href="tel:6125849396">
              <FaPhoneAlt className='mx-3 text-red-600 hover:scale-125 ease-in-out duration-500' size={20} /> 
            </a>
            <a href="mailto:bbrenterprise25@gmail.com">
              <GrMail className='mx-3 text-red-600 hover:scale-125 ease-in-out duration-500' size={20} /> 
            </a>
            <a href="https://www.facebook.com/brandon.roberts.96558/" target='_blank'>
              <FaFacebook className='mx-3 text-red-600 hover:scale-125 ease-in-out duration-500' size={20} /> 
            </a>
            <a href="https://www.linkedin.com/in/brandonroberts25/" target='_blank'>
              <BsLinkedin className='mx-3 text-red-600 hover:scale-125 ease-in-out duration-500' size={20} />
            </a>
            <a href="https://www.instagram.com/off.brand.drake/" target='_blank'>
              <AiOutlineInstagram className='mx-3 text-red-600 hover:scale-125 ease-in-out duration-500' size={25} />
            </a>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar