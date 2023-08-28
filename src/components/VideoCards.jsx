import React from "react";
import { useSelector } from "react-redux";
// import store from '../utils/store';

const VideoCards = ({ info }) => {
  // console.log(info)

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="">
      <div
        className={`p-1 m-1 ${
          isMenuOpen ? " w-72 max-[820px]:w-60 " : " w-60"
        } max-[425px]:w-fit`}
        // className={`p-1 m-1 w-72`}
      >
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="rounded-lg max-[425px]:max-w-none max-[425px]:w-screen max-[425px]:rounded-none"
          />
        <ul>
          <li className="font-bold py-2 max-[425px]:px-1 max-[425px]:py-0">{title.length>=50 ? title.slice(0,50) : title}</li>
          <li className="max-[425px]:px-1">{channelTitle}</li>
          <li className="max-[425px]:px-1">{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCards;
