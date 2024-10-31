import React from 'react';
import Button from '../component/button';
import TextInput from '../component/text-input';
function Login() {
    return (
        <>
        <section className="flex flex-col gap-8 items-center justify-center mx-auto lg:mt-20 lg:w-[40%]">
            <img src="spring-credit.jpg" alt="spring credit logo" className="lg:w-[200px]" />
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
            <p>No account? <span className='font-semibold cursor-pointer'>Sign Up for free </span> </p>
        </section>
        </>

    );
}

export default Login;
