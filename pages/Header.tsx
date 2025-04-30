"use client"

import React, { useEffect, useState } from 'react'
import {  HeaderDataProcess, HeaderMap,HeaderItem } from './headerData'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { data } from './dummy';

const Header = () => {

    const [monsun, setmonsun] = useState<boolean>(true);  



    const MoonAndSun = (): void => {
        setmonsun(prev => !prev);
        
      }

      useEffect(()=> {
        if(!monsun)
            document.querySelector("html")?.classList.add("dark")
        else
        document.querySelector("html")?.classList.remove("dark")

      },[monsun])


  return (
    <div className='h-20 dark:bg-black  dark:text-white bg-white-500   flex items-center justify-evenly'>
        <div>
        <span className='font-bold'><b className='text-red-700'>E</b>M YAZILIM</span>
        </div>
        <div>
            <ul className='header-menu flex gap-7'>
         {data.map((x, i) => (
        <Link key={i} href={`${x.MenuLınk}`}>
        <li>{x.MenuDescription}</li>
       </Link>
            ))}


            </ul>
        </div>
        <div>
            <FontAwesomeIcon onClick={()=> MoonAndSun()} className='text-yellow-400 text-2xl' icon={faSun}></FontAwesomeIcon>
        </div>
    </div>
  )
}

 


export default Header