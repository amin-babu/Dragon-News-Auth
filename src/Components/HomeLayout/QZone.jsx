import React from 'react';
import swimmginImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playImage from '../../assets/playground.png'

const QZone = () => {
  return (
    <div className='bg-base-200 my-5 p-3'>
      <h2 className='font-semibold mb-7'>Q-Zone</h2>
      <div className='space-y-3'>
        <img src={swimmginImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;