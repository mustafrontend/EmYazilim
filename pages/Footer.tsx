import React from 'react'
import { data } from '../utils/dummy'

const Footer = () => {
    const MenuData = data;
    return (
    <div className='h-24 bg-black' >
        <div className='flex items-center  justify-around text-white'>
            <div>
                <p className='font-bold'><b className='text-red-800'>E</b>M YAZILIM</p>
            </div>
            <div>
            <ul className='flex flex-col text-white text-sm'>
                {MenuData.map((x, i) => (
              <li key={i}>
                <a href={x.MenuLınk}>{x.MenuDescription}</a>
              </li>
            )).slice(0, 3)}
                </ul>
            </div>
            
 

        </div>
        <p className='text-white text-center'> 2025 <b>EM YAZILIM</b> TARAFINDAN LISANSLANMIŞTIR</p>

    </div>
  )
}

export default Footer