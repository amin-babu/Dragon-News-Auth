import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const [error, setError] = useState('');

  const { signIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        alert('Log in success!');
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      })

    console.log({ email, password });
  };

  return (
    <div className='h-[calc(100vh-74px)] flex justify-center items-center'>
      <div className="card bg-base-100 w-lg shrink-0 border border-base-300">
        <form onSubmit={handleLogin} className="card-body">
          <h3 className='text-center text-4xl font-semibold'>Login your account</h3>
          <div className='border-b border-b-base-300 my-4'></div>
          <fieldset className="fieldset gap-0 space-y-3">

            {/* email */}
            <label className="label font-semibold text-lg text-primary">Email</label>
            <input type="email" name='email' required className="input bg-base-200 border-0 w-full" placeholder="Enter your email address" />

            {/* password */}
            <label className="label font-semibold text-lg text-primary">Password</label>
            <input type="password" name='password' required className="input bg-base-200 border-0 w-full" placeholder="Enter your password" />

            {/* error message */}
            {
              error && <p className='text-red-500'>{error}</p>
            }

            {/* log-in button */}
            <button type='submit' className="btn mt-1 bg-primary rounded-sm border-primary shadow-none btn-neutral">Login</button>

            {/* register button */}
            <p className='text-[16px] font-medium text-center text-accent'>
              Dont’t have an account ? <Link to='/auth/register' className='text-[#FF8C47] underline'>Register</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;