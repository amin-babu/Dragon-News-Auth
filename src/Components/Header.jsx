import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
      <Link to='/'>
        <img className='w-[400px] mt-5' src={logo} alt="" />
      </Link>
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      {/* Today's Date */}
      <p className="font-medium text-accent">
        <span className='text-primary'>
          {format(new Date(), 'EEEE, ')}
        </span>
        {format(new Date(), 'MMMM dd, yyyy')}
      </p>
    </div>
  );
};

export default Header;