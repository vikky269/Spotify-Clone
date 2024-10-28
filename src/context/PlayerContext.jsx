import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext()


const PlayerContextProvider = (props)=> {

const audioRef = useRef()

const seekBg = useRef()

const seekBar = useRef()


const [track, setTrack] = useState(songsData[0])
const [PlayStatus, setPlayStatus] = useState(false)

const [time, setTime] = useState({
  currentTime:{
    seconds:0,
    minutes:0
  },
  totalTime:{
    seconds:0,
    minutes:0
  }
})


const play = ()=> {
  audioRef.current.play()
  setPlayStatus(true)
}



const pause = ()=> {
  audioRef.current.pause()
  setPlayStatus(false)
}

const prev = async ()=> {
   if(track.id > 0){
     await setTrack(songsData[track.id - 1])
     await audioRef.current.play()
     setPlayStatus(true)
   }
}

const next = async ()=> {
  if(track.id < songsData.length -1 ){
    await setTrack(songsData[track.id + 1])
    await audioRef.current.play()
    setPlayStatus(true)
}
}


const seekSong = async (e)=> {
  //console.log(e) oofsetX is a parameter

  audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)* audioRef.current.duration)
}

const playWithId = async (id)=> {
  await setTrack(songsData[id])
  await audioRef.current.play()
  setPlayStatus(true)
}

useEffect(()=>{
   setTimeout(()=>{
      audioRef.current.ontimeupdate = ()=> {
       
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration *100)) + "%"

        setTime({
          currentTime:{
            seconds: Math.floor(audioRef.current.currentTime % 60),
            minutes: Math.floor(audioRef.current.currentTime / 60)
          },
          totalTime:{
            seconds: Math.floor(audioRef.current.duration % 60),
            minutes: Math.floor(audioRef.current.duration / 60)
          }
        })
      }
   }, 1000)
}, [audioRef])

const contextvalue = {
     audioRef,
     seekBg,
     seekBar,
     track,setTrack,
     PlayStatus,setPlayStatus,
     time, setTime,
     play, pause,
     playWithId,
     prev, next,
     seekSong
}


return (

    <PlayerContext.Provider value={contextvalue}>

      {props.children}

    </PlayerContext.Provider>
)

}



export default PlayerContextProvider