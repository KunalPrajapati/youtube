import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
// import store from '../utils/store';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    //early returning
    if (!isMenuOpen) return null;


  return (
    <div className='shadow-lg w-56 h-screen relative z-10'>
        <ul className='py-4 px-5'>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 py-2 pr-8 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><AiFillHome /></div>
                {/* <p>Home</p> */}
                <p className=''>Home</p> {/* Add text-left class */}
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex gap-2 p-1 py-2 hover:bg-gray-200 pr-8 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><MdLocalFireDepartment /></div>
                <p>Trending</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
          <Link to='/'>
              <div className='flex gap-2 p-1 hover:bg-gray-200 py-2 pr-8 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><CgMusicNote /></div>
                <p>Music</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex gap-2 p-1 hover:bg-gray-200 py-2 pr-8 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><FiFilm /></div>
                <p>Films</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 py-2 pr-8 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><MdLiveTv /></div>
                {/* <p>Live</p> */}
                <p className=''>Live</p> {/* Add text-left class */}
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 py-2 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><IoGameControllerSharp /></div>
                <p>Gaming</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 py-2 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><ImNewspaper /></div>
                <p>News</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 pl-1 py-2 rounded-lg'>
                <div className='pt-1 mx-5'><GiDiamondTrophy /></div>
                <p>Sports</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 py-2 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><RiLightbulbLine /></div>
                <p>Learning</p>
              </div>
            </Link>
          </li>
        </ul>
        <div className='h-[1px] bg-gray-300'></div>
        <ul className='py-2 pt-2 p-5 px-5'>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 py-2 pl-1 rounded-lg'>
                <div className='pt-1 mx-5'><FiSettings /></div>
                <p>Setting</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 pl-1 py-2 rounded-lg'>
                <div className='pt-1 mx-5'><AiOutlineFlag /></div>
                <p>History</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 pl-1 py-2 rounded-lg'>
                <div className='pt-1 mx-5'><FiHelpCircle /></div>
                <p>Help</p>
              </div>
            </Link>
          </li>
          <li className='my-3'>
            <Link to='/'>
              <div className='flex p-1 hover:bg-gray-200 pr-8 pl-1 py-2 rounded-lg'>
                <div className='pt-1 mx-5'><RiFeedbackLine /></div>
                <p>Feedback</p>
              </div>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar
