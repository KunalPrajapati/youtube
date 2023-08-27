import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { YOUTUBE_API } from '../utils/constants';
import RecommendedVideos from './RecommendedVideos';

const WatchPage = () => {

  const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ'

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();
    // console.log(searchParams.get('v'));
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    // console.log(response.items)
    setVideos(response.items)
}

  useEffect(()=> {
      dispatch(closeMenu())
  },[])

  useEffect(() =>{
      getVideos();
  })


  return (
    <div className='flex'>
      <div className='video-player-side m-5 -ml-5'>
        <iframe width={`${isMenuOpen ? '800' : '950'}`}
        // height="500" 
        height={`${isMenuOpen ? '450' : '500'}`}
        src={"https://www.youtube.com/embed/" + searchParams.get('v') }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
      <div className='recomd-video-side'>
        <div className='flex flex-col flex-wrap'>
          {videos.map((video) =>
          <RecommendedVideos key={video.id} info={video} /> )}
        </div>
      </div>
    </div>
  )
}

export default WatchPage
