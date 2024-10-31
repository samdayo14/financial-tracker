import Button from '../component/button';
import TextInput from '../component/text-input';
import Image from '../assets/images/spring-credit.jpg';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form'; 


function Register(){

    const methods = useForm(); 
    const { handleSubmit } = methods; 
    const onSubmit = (data) => {
   
        // Implement your login logic here
        console.log(data);

        //  make the button submit only once
    };

    return(
        <>

<section className="flex flex-col gap-8 items-center justify-center mt-10 mx-5 md:mx-auto md:w-[60%] lg:mt-20 lg:w-[40%] mb-20">
            <img src={Image} alt="spring credit logo" className="lg:w-[200px]" />
            <p className='text-3xl'>Create Your Account</p>
            <FormProvider {...methods}>

            <form className="flex flex-col gap-[18px]"  onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-4'>
                <TextInput label="First Name" type='text' name="FirstName" validation={{ required: 'First Name is required' }} 
                />
                <TextInput label="Last Name" type='text' name="name" validation={{ required: 'Last Name is required' }} 
 />
                </div>
                <TextInput label="Email" type='email' name="email"  validation={{ required: 'Email is required' }} 
                />
                <TextInput label="Password"  type="password" name="password" validation={{ required: 'Password is required' }} 
 />
                <TextInput label="Confirm Password"  type="password" name="ConfirmPassword"  validation={{ required: 'Confirm Password is required' }} 
 />
                <Button text="Sign Up"/>
            </form>

            </FormProvider>


            <p>Already have an account? <Link className='font-semibold cursor-pointer' to="/auth/login">Log in</Link> </p>
        </section>
            </>
    )
}

export default Register