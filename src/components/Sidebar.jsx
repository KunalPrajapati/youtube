import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FiHome} from 'react-icons/fi';
// import store from '../utils/store';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    //early returning
    if (!isMenuOpen) return null;


  return (
    <div className='shadow-lg w-48'>
        <ul className='py-2 p-5'>
          <li className='flex'>
            <Link to='/'>
              <div><FiHome/></div>
              <p>Home</p>
            </Link>
          </li>
          <li>Shots</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <div className='h-[1px] bg-gray-300'></div>
        <ul className='py-2 pt-2 p-5'>
            <li>Coding</li>
            <li>Interview</li>
            <li>Projects</li>
            <li>DSA</li>
        </ul>
        <hr />
      <h1 className='font-bold pt-2 p-5 pb-1'>Library</h1>
            <ul className='py-2 p-5'>
                <li>Coding</li>
                <li>Interview</li>
                <li>Projects</li>
                <li>DSA</li>
            </ul>
            <hr />
      <h1 className='font-bold pt-2 p-5 pb-1'>Subscriptions</h1>
            <ul className='py-2 p-5'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
