import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
      <>
          <Navbar />

          <div className='mb-4 '>
              <h1 className='my-5 font-bold'>Featured charts</h1>

              <div className='flex overflow-auto'>
                  {albumsData.map((item, index) => {
                      return <AlbumItem
                          key={index}
                          name={item.name}
                          image={item.image}
                          desc={item.desc}
                          id={item.id}
                      />
                  })}
              </div>

          </div>



          <div className='mb-4 '>
              <h1 className='my-5 font-bold'>Today's Biggest hits</h1>

              <div className='flex overflow-auto'>
                  {songsData.map((item, index) => {
                      return <SongItem
                          key={index}
                          name={item.name}
                          image={item.image}
                          desc={item.desc}
                          id={item.id}
                      />
                  })}
              </div>

          </div>
      </>
  )
}

export default DisplayHome
