import React from 'react';
import fb from '../../assets/fb.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const FindUs = () => {
  return (
    <div className='mt-8'>
      <h2 className='font-semibold'>Find Us On</h2>
      <div className='mt-3'>
        <div className="join join-vertical w-full">
          <button className="btn justify-start join-item bg-transparent">
            <img src={fb} alt="" /> Facebook
          </button>
          <button className="btn justify-start join-item bg-transparent">
            <img src={twitter} alt="" /> Twitter
          </button>
          <button className="btn justify-start join-item bg-transparent">
            <img src={insta} alt="" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;