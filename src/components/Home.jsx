import React, { useState, useEffect } from 'react'
import { animateElements, checkSlide } from '../animations.js';
import {Link} from 'react-scroll'
import logo from '../assets/hc.jpg'
import web1 from '../assets/ex1.jpg'
import MN from '../assets/MN.png'
import code from '../assets/coder.jpg'

const Home = () => {

  useEffect(() => {
    window.addEventListener('scroll', animateElements);
    window.addEventListener('scroll', checkSlide);
    return () => {
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('scroll', checkSlide);
    };
  }, []);

  return (
    <div id='home' className='flex justify-center items-center flex-col mx-auto'>
      <img className='top-0 left-0 w-[200px] md:w-[500px] md:h-full my-12' src={logo} alt="logo" />
      <div className='flex flex-nowrap flex-col justify-center items-center w-full text-center'>
        <h2 className='text-base md:text-xl text-stone-400 font-bold uppercase'>Web Design <span className='text-stone-700'>&nbsp;|&nbsp;</span> App Creation <span className='text-stone-700'>&nbsp;|&nbsp;</span> Innovation
        </h2>
        <Link to='portfolio' smooth={true} duration={500}>
          <button className='mt-8 slide-left hover:scale-110 transition-all duration-300 shadow-lg'>View Portfolio</button>
        </Link>

        <section className="flex flex-col md:flex-row justify-center">
          <div className="max-w-sm mx-6 my-8 flex justify-center flex-col items-center border border-2 py-8">
            <img 
              className="rounded-full border-4 p-2"
              src={web1}
              width="200"
              height="200"
              alt="Web design" 
            />
            <div className="p-6 bg-black">
              <h2 className="text-2xl font-bold text-white text-start">Custom Web Design Services</h2>
              
              <p className="text-gray-400 pt-4 text-start text-xs">
              By utilizing high-level programming skills, the customization possibilities are endless. I vow to deliver stunning, responsive websites that will leave a lasting first impression. I've helped a handful of small businesses build affordable, optimized sites that connect with their audience and properly represent their brand. At Heat Codes, we collaborate closely with each client to understand their brand, goals, and target users. Then, by carefully curating the web design process, we'll launch your elegant, mobile-friendly website, optimized for organic search and seamlessly showcasing your services to grow your business.
              </p>
              <Link to='services' smooth={true} duration={500}>
              <button className='mt-8 hover:scale-110 transition-all duration-300 shadow shadow-gray-500 slide-right'>
                View Services
              </button>
              </Link>
            </div>
          </div>

          <div className="max-w-sm mx-6 my-8 flex justify-center flex-col items-center border border-2 py-8">
            <img 
              className="rounded-full border-4 p-2"
              src={MN}
              width="200"
              height="200"
              alt="Web design" 
            />
            <div className="p-6 bg-black">
              <h2 className="text-2xl font-bold text-white text-start">Top Web Design Agency in Minneapolis</h2>
              
              <p className="text-gray-400 pt-4 text-start text-xs">
                Heat Codes stands out as one of the top web design agencies in Minneapolis and the twin cities area. What sets my work apart is my high-level professionalism, attention to detail, and extensive programming background, which gives me the edge in delivering top-tier quality websites. I offer effective communication and a streamlined web design process to understand each client's unique needs and goals. My affordable web design pricing packages are packed with tremendous value, including responsive layouts, SEO optimization, and all the bells and whistles your business needs to establish an online presence.
              </p>
              <Link to='services' smooth={true} duration={500}>
              <button className='mt-8 hover:scale-110 transition-all duration-300 shadow shadow-gray-500 slide-right'>
                View Services
              </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm mx-6 my-8 flex justify-center flex-col items-center border border-2 py-8">
            <img 
              className="rounded-full border-4 p-2"
              src={code}
              width="200"
              height="200"
              alt="Web design" 
            />
            <div className="p-6 bg-black">
              <h2 className="text-2xl font-bold text-white text-start">Importance of Finding the Best Web Designer</h2>
              
              <p className="text-gray-400 pt-4 text-start text-xs">
              Choosing the right web designer is critical for an impactful online presence. 62% of customers ignore a business without a website. Users form an opinion in 0.05 seconds - which is why I focus on quality sites with stunning visuals to immediately engage visitors. Having a seamless responsive layout matters. My sites provide optimal mobile-friendliness across devices. I craft custom sites tailored to your brand, making it effortless for customers to find and purchase your products. A well-executed website could mean 67% higher conversion rates! Let's connect to build your eye-catching responsive site today.
              </p>
              <Link to='services' smooth={true} duration={500}>
              <button className='mt-8 hover:scale-110 transition-all duration-300 shadow shadow-gray-500 slide-right'>
                View Services
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home