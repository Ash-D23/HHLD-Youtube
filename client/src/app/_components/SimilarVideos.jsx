import React, { useEffect, useState } from 'react'
import HorizontalVideo from './HorizontalVideo'
import axios from 'axios'

const SimilarVideos = () => {
    const [videoList, setVideoList] = useState([])

  const getRecommendedVideo = async () => {
    try{
        const res = await axios.get('http://localhost:8082/watch/topVideos')
        console.log(res)
        setVideoList(res.data)
    }catch(err){
        console.log(err)
    }
  }

  useEffect(() => {
    getRecommendedVideo()
  }, [])
  return (
    <div className='pt-2 ml-2 flex flex-col grow'>
        {videoList?.map((video) => <HorizontalVideo video={video} />)}
    </div>
  )
}

export default SimilarVideos