import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {


    const [videos, setVideos] = useState([]);



    try{
      const getVideos = async () => {
      const data = await fetch(YOUTUBE_API);
      const response = await data.json();
        // console.log(response.items)
      setVideos(response.items)
      }

      useEffect(() =>{
        getVideos()
    },[getVideos])

    }catch(e){
      console.log(e)
      return(
        <h1>API not fetching data</h1>
      )
    }

  return (
    <div className=''>
      <div className='flex justify-center max-[425px]:justify-normal flex-wrap'>
        {videos.map((video) =>
        <Link to={'/watch?v=' + video.id} >
        <VideoCards key={video.id} info={video} /> 
        </Link>)}
      </div>
    </div>
  )
}

export default VideoContainer
