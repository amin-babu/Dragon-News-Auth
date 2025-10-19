import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className='flex justify-center py-10'>
      <div className="card bg-base-100 w-lg shrink-0">
        <div className="card-body">
          <h3 className='text-center text-4xl font-semibold'>Register your account</h3>
          <div className='border-b border-b-base-300 my-4'></div>
          <fieldset className="fieldset gap-0 space-y-3">
            {/* name */}
            <label className="label font-semibold text-lg text-primary">Your Name</label>
            <input type="text" className="input bg-base-200 border-0 w-full" placeholder="Enter your Name" />

            {/* photo url */}
            <label className="label font-semibold text-lg text-primary">Photo URL</label>
            <input type="text" className="input bg-base-200 border-0 w-full" placeholder="Enter photo url" />

            {/* Email */}
            <label className="label font-semibold text-lg text-primary">Email</label>
            <input type="email" className="input bg-base-200 border-0 w-full" placeholder="Enter your email address" />

            {/* password */}
            <label className="label font-semibold text-lg text-primary">Password</label>
            <input type="password" className="input bg-base-200 border-0 w-full" placeholder="Enter your password" />

            {/* checkbox */}
            <label className="label">
              <input type="checkbox" className="checkbox" />
              <span className='text-accent text-sm'>Accept <a className='font-semibold'>Term & Conditions</a></span>
            </label>

            {/* register button */}
            <button className="btn mt-1 bg-primary rounded-sm border-primary shadow-none btn-neutral">Register</button>

            {/* have an account? */}
            <p className='text-[16px] font-medium text-center text-accent'>
              Already Have An Account ? <Link to='/auth/login' className='text-[#FF8C47] underline'>Login</Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;