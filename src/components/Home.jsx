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
      <img className='top-0 left-0 w-[200px] md:w-[500px] md:h-full my-12' src={logo} alt="Heat Codes logo affordable seo and professional seo" />
      <div className='flex flex-nowrap flex-col justify-center items-center w-full text-center'>
        <h1 className='text-base md:text-xl text-stone-400 font-bold uppercase'>Custom Web Design Services</h1>
        <Link to='portfolio' smooth={true} duration={500}>
          <button className='mt-8 slide-left hover:scale-110 transition-all duration-300 shadow-lg'>View Portfolio</button>
        </Link>

        <section className="flex flex-col md:flex-row justify-center">
          <div className="max-w-sm mx-6 my-8 flex justify-center flex-col items-center border border-2 py-8">
            <img 
              className="rounded-full border-4 p-2"
              src={web1}
              width="250"
              height="250"
              alt="affordable seo services from the best web design company" 
            />
            <div className="p-6 bg-black">
              <h1 className="text-xl font-bold text-white text-center whitespace-nowrap">Website Development Services</h1>
              
              <p className="text-gray-400 pt-4 text-start text-sm">
              Heat Codes is a top web development service in the Twin Cities. By utilizing high-level programming skills, the customization possibilities are endless. Delivering stunning, responsive websites, with affordable SEO services, that will leave a lasting first impression. I've helped a handful of small businesses build affordable, optimized sites, including website redesign, that connect with their audience and properly represents their brand. At Heat Codes, we collaborate closely with each client to understand their brand, goals, and target users. Then, by carefully curating the process, I'll launch your carefully crafted site, optimized for organic search traffic and seamlessly showcasing your services to grow your business.
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
              width="250"
              height="250"
              alt="web design mn company providing minnesota seo services" 
            />
            <div className="p-6 bg-black">
              <h1 className="text-xl font-bold text-white text-center">Local Web Designer</h1>
              
              <p className="text-gray-400 pt-4 text-start text-sm">
                Heat Codes stands out as a top Minneapolis web design company. What sets the work apart is the high-level professionalism, attention to detail, and extensive programming background, which gives the edge in delivering top-tier quality websites. When it comes to local website designers, I strive to remain the best by continuously improving the quality of work and viewing experience of your site. I offer effective communication and a streamlined process to understand each client's unique needs and goals. My affordable web design pricing packages are packed with tremendous value, including responsive layouts, SEO optimization, and all the bells and whistles your business needs to establish an online presence.
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
              width="250"
              height="250"
              alt="programmer operating as a digital marketing agency for small businesses" 
            />
            <div className="p-6 bg-black">
              <h1 className="text-xl font-bold text-white text-center">Responsive Web Design</h1>
              
              <p className="text-gray-400 pt-4 text-start text-sm">
              Choosing the right web designer is critical for an impactful online presence. 62% of customers ignore a business without a website. Users form an opinion in 0.05 seconds - which is why I focus on quality sites with stunning visuals to immediately engage visitors. Having a seamless responsive layout matters. My sites provide optimal mobile-friendliness across devices. I craft custom sites tailored to your brand, making it effortless for customers to find and purchase your products. A well-executed website could mean 67% higher conversion rates! Let's connect to build your eye-catching responsive site today. With an emphasis on communicating your unique value proposition, I develop sites that turn your visitors into leads and customers. Check out some of the affordable web design packages Heat Codes offers below!
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
