import React from 'react'

const RecommendedVideos = ({info}) => {

    const {snippet, statistics } = info;
    const {channelTitle, title, thumbnails} = snippet;  

    return (
        <div className=''>
          <div className='pt-5 flex max-[425px]:flex-col'>
            <img src={thumbnails.default.url} alt="thumbnail" 
            className='rounded-lg h-[109px] w-44 max-[425px]:w-screen max-[425px]:h-64 ml-2 max-[425px]:rounded-none'
            />
            <ul>
              <li className='font-bold px-1 text-sm max-[425px]:ml-2'>{title.slice(0,23)+'...'}</li> 
                {/* temporary solution for longer titles  */}

              {/* <li className='font-bold px-1 text-sm'>{title}</li> */}
              <li className='px-1 text-xs max-[425px]:ml-2'>{channelTitle}</li>
              <li className='px-1 text-xs max-[425px]:ml-2'>{statistics.viewCount} views</li>
            </ul>
          </div>
        </div>
      )
}

export default RecommendedVideos
