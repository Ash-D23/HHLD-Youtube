import React from 'react'
import { VideoCard } from './VideoCard'

const VideoList = () => {
  return (
    <div className='p-4 flex flex-wrap gap-8 mx-auto justify-center mt-4 overflow-y-scroll'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default VideoList