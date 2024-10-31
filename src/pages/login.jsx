import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import Button from '../component/button';
import TextInput from '../component/text-input';
import Image from '../assets/images/spring-credit.jpg';
import { Link } from 'react-router-dom';

function Login() {
    const methods = useForm(); 
    const { handleSubmit } = methods; 
    const onSubmit = (data) => {
   
        // Implement your login logic here
        console.log(data);

        //  make the button submit only once
    };

    return (
        <section className="flex flex-col gap-8 items-center justify-center mt-10 md:mx-auto mx-5 lg:mt-20 md:mt-20 md:w-[60%] lg:w-[40%]">
            <img src={Image} alt="spring credit logo" className="lg:w-[200px]" />
            <p className='text-base'>Log in to your Spring Credit account</p>
            <FormProvider {...methods}>
                <form className="w-full flex flex-col gap-[18px]" onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-5'>
                        <TextInput
                            label="Email"
                            type='email'
                            name="email"
                            validation={{ required: 'Email is required' }} 
                        />
                        <div className='flex flex-col gap-2'>
                            <TextInput
                                label="Password"
                                type="password"
                                name="password"
                                validation={{ required: 'Password is required' }} 
                            />
                            <small className='cursor-pointer'>Forgot Password?</small>
                        </div>
                        <Button text="Log in" />
                    </div>
                </form>
            </FormProvider>
            <p>No account? <Link className='font-semibold cursor-pointer' to="/auth/register">Sign Up for free</Link></p>
        </section>
    );
}

export default Login;
