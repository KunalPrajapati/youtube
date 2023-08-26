import React from 'react'
import { useSelector } from 'react-redux';
// import store from '../utils/store';

const VideoCards = ({info}) => {
// console.log(info)

    const {snippet, statistics } = info;
    const {channelTitle, title, thumbnails} = snippet;  
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return (

    <div className={`p-1 m-1 ${isMenuOpen ? 'w-80' : ' w-64' }`}>
      <img src={thumbnails.medium.url} alt="thumbnail" 
      className='rounded-lg'
      />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCards
