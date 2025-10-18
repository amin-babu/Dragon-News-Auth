import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-semibold mb-4'>Login With</h2>
      <div className='space-y-2'>
        <button className='btn btn-outline hover:bg-[#467BDB] hover:text-white text-[#467BDB] border-[#467BDB] w-full'>
          <FcGoogle size={22}/> Login with Google
        </button>
        <button className='btn btn-outline btn-primary w-full'>
         <FaGithub size={22}/> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;