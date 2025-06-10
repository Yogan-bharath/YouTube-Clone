import React from 'react'
import './Video.css'
import Videoplay from '../../components/videoplay/Videoplay'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='video'>
      <div className='video-paly'>
        <Videoplay videoId={videoId} categoryId={categoryId}/>
      </div>
    </div>
  )
}

export default Video