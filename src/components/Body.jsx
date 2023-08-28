import React from 'react'
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  
  return (
    <div className='flex'>
      <div className="sidebar fixed ">
        <Sidebar/>
      </div>
      {/* <MainContainer/> */}
      {/* <div className='w-[90%] ml-60'> */}
      <div className= {`${isMenuOpen ? ' ml-48' : 'ml-16 max-[768px]:ml-4 max-[820px]:ml-10 max-[425px]:-ml-[8px]' } flex `}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Body
