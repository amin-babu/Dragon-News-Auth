import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    console.log('Clicked from navber logout button');
    logOut()
      .then(() => alert('Your logged out successfull'))
      .catch(error => console.log(error));
  };

  return (
    <div className='grid grid-cols-3 items-center'>
      <div className='flex gap-2 items-center'>
        <img className='w-10 h-10 object-cover rounded-full' src={`${user ? user.photoURL : userimg}`} alt="" />
        <p className='font-medium'>{user && user.displayName}</p>
      </div>
      <div className='nav space-x-3 text-center text-accent'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='ml-auto'>
        {
          user ?
            <Link onClick={handleLogOut} className='btn btn-primary py-5 px-10 h-0 rounded-none shadow-none'>Log Out</Link> :
            <Link to='/auth/login' className='btn btn-primary py-5 px-10 h-0 rounded-none shadow-none'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;