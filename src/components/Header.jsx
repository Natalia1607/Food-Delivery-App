import React from 'react';

import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';

import {MdShoppingBasket} from 'react-icons/md';

const Header = () => {
  return (
    <header className='fixed w-screen z-5 p-6 px-16'>
        {/* desktop */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src={Logo} className='w-8 object-cover' alt='logo' />
            <p className='text-headingColor text-xl font-bold'>City</p>
          </div>

          <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'><a href="#">Home</a></li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'><a href="#">Menu</a></li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'><a href="#">About us</a></li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'><a href="#">Service</a></li>
            </ul>

            <div className='relative flex items-center justify-center'>
              <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
              <div className="absolute -top-3 -right-3  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className='text-xs text-white font-semibold'>2</p>
              </div>
            </div>

            <img src={Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' alt="userprofile" />
          </div>
        </div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header