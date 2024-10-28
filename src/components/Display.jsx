import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Albumdetails from './Albumdetails'
import { albumsData } from '../assets/assets'

const Display = () => {
 
    const DisplayRef = useRef()

    const location = useLocation()
    //console.log(location)...... the location is an object where pathname is a parameter of that object
    const isAlbum = location.pathname.includes("album")
    //console.log(isAlbum)
    const albumId = isAlbum ? location.pathname.slice(-1) : ""
    //console.log(albumId)

    const bgcolor = albumsData[Number(albumId)].bgColor


    useEffect(()=> {
        if(isAlbum){
            DisplayRef.current.style.background = `linear-gradient(${bgcolor}, #121212)`
        }else{
            DisplayRef.current.style.background = `#121212`
        }
    })

  return (
    <div ref={DisplayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route  path='/' element={<DisplayHome />} />
        <Route  path='/album/:id' element={<Albumdetails />} />
      </Routes>
    </div>
  )
}

export default Display
