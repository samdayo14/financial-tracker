import Button from '../component/button';
import TextInput from '../component/text-input';
import Image from '../assets/images/spring-credit.jpg';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <>

<section className="flex flex-col gap-8 items-center justify-center mt-10 mx-5 md:mx-auto md:w-[60%] lg:mt-20 lg:w-[40%] mb-20">
            <img src={Image} alt="spring credit logo" className="lg:w-[200px]" />
            <p className='text-3xl'>Create Your Account</p>
            <form className="flex flex-col gap-[18px]">
                <div className='flex gap-4'>
                <TextInput label="First Name" type='text'  />
                <TextInput label="Last Name" type='text'  />
                </div>
                <TextInput label="Email" type='email' required />
                <TextInput label="Password"  type="password" required />
                <TextInput label="Confirm Password"  type="password" required />
                <Button text="Sign Up"/>
            </form>
            <p>Already have an account? <Link className='font-semibold cursor-pointer' to="/auth/login">Log in</Link> </p>
        </section>
            </>
    )
}

export default Register