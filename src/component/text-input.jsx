import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function TextInput({ label, type, name, validation }) {
    const { register, formState: { errors } } = useFormContext();
    const [inputType, setInputType] = useState(type);
    const isPassword = type === 'password';

    const toggleShowPassword = () => {
        setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="relative mb-2">
            <input
                type={inputType}
                id={label}
                placeholder=" "
                className={`input-style peer pr-10 ${errors[name] ? 'border-red-500' : ''}`}
                {...register(name, validation)} 
            />
            <label
                htmlFor={label}
                className="input-label" 
            >
                {label}
            </label>

            {isPassword && (
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 focus:outline-none"
                >
                    {inputType === 'password' ? 'Show' : 'Hide'}
                </button>
            )}

                {errors[name] && (
                <span className="text-red-500 text-xs my-1 absolute">{errors[name].message}</span>
                )}
        </div>
    );
}

export default TextInput;
