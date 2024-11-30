import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import TextInput from '../component/text-input';
import Button from '../component/button'

const SettingsPage = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="mx-auto py-20 lg:w-[60%]">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md  space-y-4">
          {/* Name */}
          <div className='flex gap-4'>
            <div className='w-1/2'>
                <TextInput label="First Name" type='text' name="FirstName" validation={{ required: 'First Name is required' }} 
                />
            </div>
                <div className='ml-auto w-1/2'>

                <TextInput label="Last Name" type='text' name="name" validation={{ required: 'Last Name is required' }} 
 />
                </div>
                </div>

          {/* Email */}
          <div>
            <TextInput
              label="Email"
              type="email"
              name="email"
              validation={{ required: 'Email is required' }}
            />
          </div>

          {/* Password */}
          <div>
            <TextInput
              label="Password"
              type="password"
              name="password"
              validation={{
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
              }}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <TextInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              validation={{
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === methods.watch("password") || 'Passwords must match',
              }}
            />
          </div>

         <Button  text="Save changes"/>
          
        </form>
      </FormProvider>
    </div>
  );
};

export default SettingsPage;
