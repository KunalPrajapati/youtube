import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { YOUTUBE_API } from '../utils/constants';
import RecommendedVideos from './RecommendedVideos';
import { Link } from 'react-router-dom';


const WatchPage = () => {

  const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ'

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();
    // console.log(searchParams.get('v'));
  const dispatch = useDispatch();

  // try{
  //   const getVideos = async () => {
  //     const data = await fetch(YOUTUBE_API);
  //     const response = await data.json();
  //     // console.log(response.items)
  //     setVideos(response.items)
  // }

  //   useEffect(()=> {
  //     dispatch(closeMenu())
  //     getVideos();
  //   },[dispatch, getVideos])

  // }catch(e){
  //   console.log(e)
  //   return(
  //     <h1>API not fetching data</h1>
  //   )
  // }


  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_API);
        const response = await data.json();
        setVideos(response.items || []); // Set default value as an empty array if response.items is undefined
      } catch (error) {
        console.log(error);
        // You can handle the error here if needed
      }
    };

    dispatch(closeMenu());
    getVideos();
  }, [dispatch]);


  return (
    <div className='flex max-[425px]:flex-col'>
      <div className='video-player-side m-2 -ml-5 max-[425px]:ml-2 max-[425px]:m-0'>
        <iframe width={`${isMenuOpen ? '800' : '950'}`}
          // height="500" 
          height={`${isMenuOpen ? '450' : '500'}`}
          src={"https://www.youtube.com/embed/" + searchParams.get('v') }
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className='max-[820px]:h-80 max-[820px]:w-[500px] max-[425px]:h-60 max-[425px]:w-screen
          max-[1024px]:w-[650px] max-[1024px]:h-96'
          >
        </iframe>
      </div>
      <div className='recomd-video-side'>
        <div className='flex flex-col flex-wrap'>
          {videos.map((video) =>(
          <Link to={'/watch?v=' + video.id} >
          <RecommendedVideos key={video.id} info={video} /> 
          </Link>)
          )}
        </div>
      </div>
    </div>
  )
}

export default WatchPage
