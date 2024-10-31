import React, { useState } from 'react';

function TextInput({ label, type = 'text', required = false }) {
    const [inputType, setInputType] = useState(type);
    const isPassword = type === 'password';

    const toggleShowPassword = () => {
        setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="relative">
            <input
                type={inputType}
                id={label}
                placeholder=" "
                required={required}
                className="input-style peer pr-10" 
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
        </div>
    );
}

export default TextInput;
