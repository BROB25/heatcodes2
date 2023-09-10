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
    <section id='contact' className='mx-auto pt-16 px-4 border-t'>
      <h1 className='flex justify-center text-3xl sm:text-4xl font-bold text-gray-400 mt-12 mb-4 slide-down'>Contact Me!</h1>
      <p className='text-gray-200 w-[90%] md:w-[80%] text-center mx-auto text-sm md:text-base slide-left'>At Heat Codes, we make working with a web designer hassle-free. The main priority is crafting custom websites that perfectly capture our clients' visions. From the initial consultation to launch, we maintain clear communication every step of the way. Contact us for a complementary phone call to discuss your web design needs and business goals. We'll provide an in-depth, yet easy-to-understand outline for transforming your online presence. As a MN web designer focused on web design companies in Minneapolis, our affordable website design drives results!</p><br></br>
      <p className='text-gray-200 w-[90%] md:w-[80%] text-center mx-auto mb-8 text-sm md:text-base slide-right'>Our streamlined web design process starts with understanding your brand's unique identity and target audience. Next, we apply our creative expertise to design a site that represents your organization beautifully. With search engine optimization built-in, we ensure your new website drives meaningful traffic and conversions. Our team handles all technical work, so you can focus on your business. We provide ongoing maintenance and updates to keep your site performing optimally. Partnering with our web design organization is choosing a strategic advantage for long-term online success. Contact Heat Codes today to bring your digital vision to life with a website that delivers real value.</p>
      <div className="grid grid-cols-12 justify-center">
        <div className="col-span-12 md:col-start-3 md:col-span-8">
          <form action="https://formcarry.com/s/kH5_-KjRfa" method='POST' encType='multipart/form-data'>
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
            <button className='bg-red-600 text-gray-200 mt-4 w-full p-4 rounded-lg'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact