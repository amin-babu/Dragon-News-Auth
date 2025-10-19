import React from 'react';
import fb from '../../assets/Facebook.png'
import insta from '../../assets/Instagram.png'
import twitter from '../../assets/Twitter.png'

const FindUs = () => {
  return (
    <div className='mt-8'>
      <h2 className='font-semibold'>Find Us On</h2>
      <div className='mt-3'>
        <div className="join join-vertical w-full">
          <button className="btn font-medium py-6 text-accent justify-start join-item bg-transparent">
            <img className='mr-1' src={fb} alt="" /> Facebook
          </button>
          <button className="btn font-medium py-6 text-accent justify-start join-item bg-transparent">
            <img className='mr-1' src={twitter} alt="" /> Twitter
          </button>
          <button className="btn font-medium py-6 text-accent justify-start join-item bg-transparent">
            <img className='mr-1' src={insta} alt="" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;