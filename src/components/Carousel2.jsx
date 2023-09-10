import React, {useState} from 'react'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useRef } from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';


const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      video: 'src/assets/website_builders_near_me.mp4',
      text: 'DZ Rentals',
      description: 'I recently had the pleasure of designing a new website for DZ Rentals, a leading rental company based in Minneapolis. As a designer, I strive to create websites that are aesthetically pleasing yet highly functional, enabling users to easily navigate and find information. For this project, I focused on developing an intuitive interface to showcase their extensive inventory of rentals in a visually engaging way. I incorporated subtle animations and bold imagery to highlight the different amenities and features of each rental. The final result is a website that brings their vibrant collection of rentals to life on screen.',
    },
    {
      video: 'src/assets/best_small_business_websites.mp4',  
      text: 'Beats By Tay',
      description: 'I had the privilege to collaborate with Beats By Tay, a premier event DJ based in South Dakota, to design a website that reflects his talents. Working closely with Tay, I created a modern, sleek website to showcase his services for weddings, parties, and corporate events. My goal was to craft an engaging yet professional site where current and prospective clients can view his past work, and packages, and get a feel for his brand. Through a polished, user-friendly interface, this new website presents Tay as an experienced, reliable DJ who can provide the perfect soundtrack for any event.',
    },
    {
      video: 'src/assets/custom_web_design_services.mp4',
      text: 'Picselate',
      description: 'I recently designed an engaging new website for Picselate, a premier real estate photography business serving the Minneapolis area. Working closely with their talented photographer, I created a creative design that effectively displays her artistic eye and stellar portfolio. Vibrant gradient colors and a responsive image carousel showcase listing photos tailored to highlight each property and their unique features. With an emphasis on seamless mobile functionality and an intuitive interface, the website enables real estate clients to easily view their work, understand offered services, and schedule shoots. This project allowed me to blend strong aesthetics with practical business goals to build an impactful platform for the Picselate brand.',
    } 
  ];

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  }

  const nextSlide = () => {  
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  }
  
  return (
    <div className="relative h-full w-full pt-12 bg-neutral-900 border-t">
      <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
        {slides.map((slide,index) => (
          <div key={index} className="w-full shrink-0 text-center">
            <h2 className="text-gray-100 font-extrabold text-2xl mb-8">{slide.text}</h2>
            <div className='flex justify-center items-center w-full md:w-[80%] mx-auto border rounded-lg p-2'>
              <video src={slide.video} controls/>
            </div>
            <p className='text-white my-14 w-[80%] md:w-[70%] mx-auto text-sm'>{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center px-2 md:px-8">
        <a onClick={prevSlide} className='hover:scale-125 transition-all duration-300'><FaArrowLeft color='white' size={23} /></a>  
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 md:px-8">
      <a onClick={nextSlide} className='hover:scale-125 transition-all duration-300'><FaArrowRight color='white' size={23} /></a>  
      </div>

    </div>
  );
}

export default Carousel2