import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
          <div className='flex items-center gap-2'>
              <img onClick={()=>navigate(-1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_left} alt="" />
              <img onClick={()=>navigate(1)} className='w-8 bg-black rounded-2xl p-2 cursor-pointer' src={assets.arrow_right} alt="" />
          </div>

          <div className='flex items-center gap-4'>
             <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer hidden md:block'>Explore Premium</p>
             <p className='bg-black text-white py-1 px-4 rounded-2xl text-[15px] cursor-pointer'>Install Apps</p>
             <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>A</p>
          </div>
      </div>

      <div className='flex items-center mt-4 gap-2'>
       <p className='bg-white px-4 py-1 text-black rounded-2xl cursor-pointer'>All</p>
       <p className='bg-black rounded-2xl px-4 py-1 cursor-pointer'>Music</p>
       <p className='bg-black rounded-2xl px-4 py-1 cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar
