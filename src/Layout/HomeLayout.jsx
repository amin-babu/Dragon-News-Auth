import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <header className='space-y-3'>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='my-3 grid grid-cols-12 gap-6'>
        <aside className='col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className='col-span-6'>
          <Outlet />
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;