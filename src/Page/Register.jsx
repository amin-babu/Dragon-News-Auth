import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const [nameError, setNameError] = useState('');
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError('Name should be more than 5 characters!');
      return;
    } else {
      setNameError('');
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photoUrl, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photoUrl});
            navigate('/auth/login');
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          })
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  };

  return (
    <div className='flex justify-center py-10'>
      <div className="card bg-base-100 w-lg shrink-0 border border-base-300">
        <form onSubmit={handleRegister} className="card-body">
          <h3 className='text-center text-4xl font-semibold'>Register your account</h3>
          <div className='border-b border-b-base-300 my-4'></div>
          <fieldset className="fieldset gap-0 space-y-3">

            {/* name */}
            <label className="label font-semibold text-lg text-primary">Your Name</label>
            <input name='name' required type="text" className="input bg-base-200 border-0 w-full" placeholder="Enter your Name" />

            {
              nameError && <p className='text-red-500'>{nameError}</p>
            }

            {/* photo url */}
            <label className="label font-semibold text-lg text-primary">Photo URL</label>
            <input name='photoUrl' required type="text" className="input bg-base-200 border-0 w-full" placeholder="Enter photo url" />

            {/* Email */}
            <label className="label font-semibold text-lg text-primary">Email</label>
            <input name='email' required type="email" className="input bg-base-200 border-0 w-full" placeholder="Enter your email address" />

            {/* password */}
            <label className="label font-semibold text-lg text-primary">Password</label>
            <input name='password' required type="password" className="input bg-base-200 border-0 w-full" placeholder="Enter your password" />

            {/* checkbox */}
            <label className="label">
              <input type="checkbox" className="checkbox rounded-sm" />
              <span className='text-accent text-sm'>Accept <a className='font-semibold'>Term & Conditions</a></span>
            </label>

            {/* register button */}
            <button type='submit' className="btn mt-1 bg-primary rounded-sm border-primary shadow-none btn-neutral">Register</button>

            {/* have an account? */}
            <p className='text-[16px] font-medium text-center text-accent'>
              Already have an account ? <Link to='/auth/login' className='text-[#FF8C47] underline'>Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;