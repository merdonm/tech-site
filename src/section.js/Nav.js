import React, { useRef, useEffect ,useState } from 'react';
import { NavLinks } from '../constants'
import { hamburger } from '../assets';

const Nav = () => {
       
    return (
        <div className={`flex justify-between px-4 py-5 lg:px-7 lg:py-[50px] font-Montserrat bg-white`}>

            <a className='font-bold text-2xl leading-3 pt-2' href='/'>Deon</a>

            <ul className='flex list-none max-lg:hidden'>
                {NavLinks.map((item)=>(
                    <li key={item.id}>
                    <a href='/' className='ps-3 sm:ps-5 md:ps-10 lg:ps-14 '>
                        {item.title}
                    </a>
                </li>
                ))}
                
            </ul>
            <div className='hidden max-lg:block'>
              <img 
              src={hamburger}
              alt='Icon'
              height={25}
              width={25}
              />
            </div>

        </div>
    )
}

export default Nav