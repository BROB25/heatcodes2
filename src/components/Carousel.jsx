import { useState } from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const slideImages = [
  <img src="/src/assets/elitecontracting.png" alt="" />,
  <img src="/src/assets/elite.png" alt="" />,
  <img src="/src/assets/travel-site.png" alt="" />,
  <img src="/src/assets/project.png" alt="" />,
  <img src="/src/assets/gallery.png" alt="" />, 
  <img src="/src/assets/beats.png" alt="" />, 
  <img src="/src/assets/beatsbytay.png" alt="" />, 
  <img src="/src/assets/prime.png" alt="" />, 
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
        <a onClick={prev} className='p-1 rounded-full text-slate-500 bg-slate-700 hover:scale-110 transition-all ease-in-out duration-300'>
          <BsFillArrowLeftCircleFill size={20} />
        </a>
        <a onClick={next} className='p-1 rounded-full text-slate-500 bg-slate-700 hover:scale-110 transition-all ease-in-out duration-300'>
          <BsFillArrowRightCircleFill size ={20} />
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