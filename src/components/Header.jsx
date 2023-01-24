import React from 'react';
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <div className='fixed w-screen z-50 bg-slate-300 p-6 px-16'>
        {/* desktop */}
        <div className="hidden md:flex w-full h-full"></div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full"></div>
    </div>
  )
}

export default Header