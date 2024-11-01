import React, { useState, useContext } from 'react';
import TextInput from './text-input';
import Button from './button';  
import { useForm, FormProvider } from 'react-hook-form'; 
import { TransactionContext } from '../context/transactions';

const TransactionModal = ({ closeModal }) => {
    const { addTransactions } = useContext(TransactionContext); 
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const methods = useForm(); 
    const { handleSubmit } = methods; 

    const onSubmit = (data) => {
        const newTransaction = {
            id: Math.random(),
            description,
            amount,
            date: data.date, // Example usage of date from form data
            category: data.category // Example usage of category from form data
        };
        addTransactions(newTransaction);
        setDescription('');
        setAmount('');
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Add / Edit Transaction</h2>
                <FormProvider {...methods}>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex justify-between'>
                            <TextInput
                                className='lg:w-[40%]'
                                type="date"
                                name="date"
                                validation={{ required: 'Date is required' }}
                            />
                            <select
                                className="input-style h-12 lg:w-[50%]"
                                {...methods.register('category', { required: 'Category is required' })}
                            >
                                <option value="">Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Salary">Salary</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <TextInput
                            type="text"
                            name="description"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            validation={{ required: 'Description is required' }}
                        />
                        <TextInput
                            type="number"
                            name="amount"
                            label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            validation={{ required: 'Amount is required' }}
                        />
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                type="button"
                                className="px-4 py-2 border border-gray-300 rounded"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <Button text="Save" />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default TransactionModal;
