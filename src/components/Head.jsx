import React, { useEffect } from 'react'
import { useState } from 'react';
import hamburgerIcon from '../assets/hamburger-menu.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResult } from '../utils/searchSlice';
import {GoSearch} from 'react-icons/go';
import logo from '../assets/logo.png'
// import ytLogo from '../assets/yt-logo.png';
// import ButtonList from './ButtonList';


const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // const searchCache = useSelector( store => store.search.cacheResult);
    const searchCache = useSelector(store => store.search)

    // const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}&key=AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ`

    // console.log(searchQuery);
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }

    useEffect(() => {

        const timer = setTimeout( ()=> 
        {
            if (searchCache[searchQuery]){
                setShowSuggestions(searchCache[searchQuery]);
            }else{
                getVideoSuggestions();
            }
        }
        ,200) //concept of Debouncing

        return () => clearTimeout(timer);
    }, [searchQuery, searchCache]);
    // searchSlice error; redux not detecting that ;



    // useEffect(() => {

    //     const timer = setTimeout( ()=> getVideoSuggestions(),200) //concept of Debouncing

    //     return () => clearTimeout(timer);
    // }, [searchQuery]);

    // const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}&key=AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ`


    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;

    const getVideoSuggestions = async () => {
    try {
        const data = await fetch(proxyUrl + YOUTUBE_SEARCH_API);
        const response = await data.json();
        console.log(response[1]);
        setSuggestions(response[1]);
        dispatch(cacheResult({
            [searchQuery] : response[1],
        }))
    } catch (error) {
        console.error(error);
    }
    };


    // const getVideoSuggestions = async () => {
    //     // const data = await fetch(YOUTUBE_SEARCH_API2 + searchQuery);
    //     const data = await fetch(YOUTUBE_SEARCH_API);
    //     const response = await data.json();
    //     console.log(response[1])
    //     setSuggestions(response[1]);   
    // }
    // cors error due to api

    // const getVideoSuggestions = async () => {
    // try {
    //     // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //     // const data = await fetch(proxyUrl + YOUTUBE_SEARCH_API + searchQuery);
    //     const data = await fetch(YOUTUBE_SEARCH_API);
    //     if (!data.ok) {
    //     throw new Error('Network response was not ok.');
    //     }
    //     const response = await data.json();
    //     console.log(response);
    //     setSuggestions(response[0])
    //     dispatch(cacheResult({
    //         [searchQuery] : response[0],
    //     }))
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
    // };

    

  return (
    <div className=''>
        <div className='grid grid-flow-col justify-between p-5 shadow-lg bg-white'>
            <div className='flex col-span-1'>
                <img src={hamburgerIcon} alt="menu" 
                className='h-8 cursor-pointer max-[640px]:hidden' onClick={()=>toggleMenuHandler()} />

                {/* <a href="/">
                    <img src={ytLogo} alt="youtube logo" className='h-8 mx-2 cursor-pointer' />
                </a> */}
                {/* youtube-icon */}
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube logo" className='h-8 mx-2 cursor-pointer max-[820px]:h-5 max-[820px]:mt-2' />
                </a>
            </div>

            {/* searchbar */}
            <div className='col-span-9 text-center mr-24 relative lg:block max-[640px]:hidden '>
                <div>
                    <input type="text" name="" id="" 
                    className='w-1/2 border border-gray-400 p-2 px-5 rounded-l-full'
                    value={searchQuery}
                    onFocus={() => (  (suggestions.length>0) ? setShowSuggestions(true) : '' )}
                    onBlur={() => setShowSuggestions(false)}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'
                    > 🔍 </button>
                </div>
                {showSuggestions && 
                    <div className='bg-white py-2 ml-[14rem] px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 absolute'>
                    <ul className=' text-left'>
                        {suggestions.map( (suggestion) => <li key={suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'> <div className='flex gap-2'>
                        <div className='pt-1'><GoSearch/></div> {suggestion}</div> </li>)}
                    </ul>
                </div>}
            </div>

            {/* user icon */}
            <div className='col-span-1'>
                {/* <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userIcon" className='h-8' /> */}
                <img src={logo} alt="userIcon" className='h-8 w-8 rounded-full' />
            </div>


            {/* <ButtonList/> */}
        </div>
    </div>
  )
}

export default Head
