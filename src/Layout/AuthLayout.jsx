import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='bg-base-200 min-h-screen'>
      <div className='lg:w-9/12 md:w-11/12 mx-auto'>
        <header className='py-4'>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;