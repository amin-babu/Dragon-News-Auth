import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-4 p-4 bg-base-200'>
      <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>
      <Marquee className='font-semibold text-primary' pauseOnHover={true} speed={60}>
        <p className='mx-4'>⚽ Match Highlights: Germany vs Spain — as it happened!</p>
        <p className='mx-4'>🏆 Breaking: France secures a spot in the finals after a dramatic penalty shootout!</p>
        <p className='mx-4'>🔥 Live Update: Argentina edges past Brazil in a thrilling 2–1 victory!</p>
        <p className='mx-4'>🥅 Goal Rush: England dominates Italy with a 4–0 clean sweep!</p>
        <p className='mx-4'>🎯 Spotlight: Portugal’s Ronaldo scores a record-breaking hat-trick!</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;