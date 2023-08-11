import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {


    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        getVideos()
    },[])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const response = await data.json();
        // console.log(response.items)
        setVideos(response.items)
    }

  return (
    <div className='flex flex-wrap px-3 ml-10'>
      {videos.map((video) =>
      <Link to={'/watch?v=' + video.id} >
       <VideoCards key={video.id} info={video} /> 
      </Link>)}
    </div>
  )
}

export default VideoContainer