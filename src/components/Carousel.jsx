import { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import logo1 from '../assets/elite1.jpg'
import logo2 from '../assets/elite2.jpg'
import logo3 from '../assets/travel.jpg'
import logo4 from '../assets/picselatehome.jpg'
import logo5 from '../assets/gallery.jpg'
import logo6 from '../assets/prime.jpg'
import logo7 from '../assets/tay1.jpg'
import logo8 from '../assets/tay2.jpg'


const slideImages = [
  <img src={logo1} alt="local web design company and web design agency project example" />,
  <img src={logo2} alt="about section by website designers near me" />,
  <img src={logo3} alt="travel site example created by website design near me" />,
  <img src={logo4} alt="photography site created using digital marketing services for small businesses" />,
  <img src={logo5} alt="slideshow of photos created by an seo consulting company of local web designers" />,
  <img src={logo6} alt="carpet wholesale site programmed by website design companies near me" />,
  <img src={logo7} alt="DJ site created by a website design company near me" />,
  <img src={logo8} alt="section of content created by the best website designer for small businesses near me " />,
]

export default function Carousel() {
  const [curr, setCurr] = useState(0)

  const prev = () => 
    setCurr((curr) => (curr === 0 ? slideImages.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slideImages.length - 1 ? 0 : curr + 1))

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>
        {slideImages}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <a onClick={prev} className='p-1 rounded-full text-gray-300 bg-red-600 hover:scale-110 transition-all ease-in-out duration-300'>
          <BsFillArrowLeftCircleFill size={15} />
        </a>
        <a onClick={next} className='p-1 rounded-full text-gray-300 bg-red-600 hover:scale-110 transition-all ease-in-out duration-300'>
          <BsFillArrowRightCircleFill size ={15} />
        </a>
      </div>

      <div className='absolute bottom-2 right-0 left-0'>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          {slideImages.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-gray-300 rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}