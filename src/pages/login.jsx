import React from 'react';
import Button from '../component/button';
import TextInput from '../component/text-input';
import Image from '../assets/images/spring-credit.jpg';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <>
        <section className="flex flex-col gap-8 items-center justify-center mt-10 md:mx-auto mx-5 lg:mt-20 md:mt-20 md:w-[60%] lg:w-[40%]">
            <img src={Image} alt="spring credit logo" className="lg:w-[200px]" />
            <p className='text-base'>Log in to your Spring Credit account</p>
            <form className="w-full flex flex-col gap-[18px]">
                <div className='flex flex-col gap-5'>
                <TextInput label="Email" type='email' required />
                <div className='flex flex-col gap-2'>
                <TextInput label="Password"  type="password" required />
        <small className='cursor-pointer'>Forgot Password?</small>
                </div>
                <Button text="Log in"/>
                </div>  
            </form>
            <p>No account? <Link className='font-semibold cursor-pointer' to="/auth/register">Sign Up for free</Link> </p>
        </section>
        </>

    );
}

export default Login;
