import React from 'react'

const RecommendedVideos = ({info}) => {

    const {snippet, statistics } = info;
    const {channelTitle, title, thumbnails} = snippet;  

    return (
        <div className=''>
          <div className='pt-5 flex'>
            <img src={thumbnails.default.url} alt="thumbnail" 
            className='rounded-lg h-[109px] w-44'
            />
            <ul>
              <li className='font-bold px-1 text-sm'>{title.slice(0,23)+'...'}</li> 
                {/* temporary solution for longer titles  */}

              {/* <li className='font-bold px-1 text-sm'>{title}</li> */}
              <li className='px-1 text-xs'>{channelTitle}</li>
              <li className='px-1 text-xs'>{statistics.viewCount} views</li>
            </ul>
          </div>
        </div>
      )
}

export default RecommendedVideos
