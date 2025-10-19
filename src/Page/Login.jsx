import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='h-[calc(100vh-74px)] flex justify-center items-center'>
      <div className="card bg-base-100 w-lg shrink-0">
        <div className="card-body">
          <h3 className='text-center text-4xl font-semibold'>Login your account</h3>
          <div className='border-b border-b-base-300 my-4'></div>
          <fieldset className="fieldset gap-0 space-y-3">
            <label className="label font-semibold text-lg text-primary">Email</label>
            <input type="email" className="input bg-base-200 border-0 w-full" placeholder="Enter your email address" />
            <label className="label font-semibold text-lg text-primary">Password</label>
            <input type="password" className="input bg-base-200 border-0 w-full" placeholder="Enter your password" />
            <button className="btn mt-1 bg-primary rounded-sm border-primary shadow-none btn-neutral">Login</button>
            <p className='text-[16px] font-medium text-center text-accent'>
              Dont’t Have An Account ? <Link to='/auth/register' className='text-[#FF8C47] underline'>Register</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;