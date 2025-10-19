import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 items-center'>
      <div className=''></div>
      <div className='nav space-x-3 text-center text-accent'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-2 items-center ml-auto'>
        <img src={user} alt="" />
        <button className='btn btn-primary py-5 px-10 h-0 rounded-none shadow-none'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;