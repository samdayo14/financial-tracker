import React, { useContext } from 'react';
import TextInput from './text-input';
import Button from './button';
import { useForm, FormProvider } from 'react-hook-form';
import { TransactionContext } from '../context/transactions';
import {  toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionModal = ({ closeModal, transaction }) => {
    const methods = useForm({
        defaultValues: {
          date: transaction ? transaction.date : '',
          category: transaction ? transaction.category : '',
          description: transaction ? transaction.description : '',
          amount: transaction ? transaction.amount : '',
        },
      }); 
    const { handleSubmit, register } = methods; 

    const { addTransactions, editTransactions } = useContext(TransactionContext);

    const onSubmit = (data) => {
      const newTransaction = {
        id: transaction ? transaction.id : Math.random(),
        description: data.description,
        amount: parseFloat(data.amount),
        date: data.date,
        category: data.category,
      };
    
      if (transaction) {
        editTransactions(newTransaction);
        toast.success("Transaction edited successfully!");
      } else {
        addTransactions(newTransaction);
        toast.success("Transaction added successfully!");
      }
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
                                {...register('date', { required: 'Date is required' })}
                            />
                            <select
                                className="input-style h-12 lg:w-[50%]"
                                validation={{ required: 'Category is required' }}
                                {...register('category', { required: 'Category is required' })}
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
                            validation={{ required: 'Description is required' }}
                            {...register('description', { required: 'Description is required' })}
                        />
                        <div className='flex flex-col gap-1'>
                            <span className='text-red-600 text-xs'>
                                Please prepend a '-' sign to the amount for any expense entries to differentiate them from income figures.
                            </span>
                        <TextInput
                            type="number"
                            name="amount"
                            label="Amount"
                            validation={{ required: 'Amount is required' }}
                            {...register('amount', { required: 'Amount is required' })}
                        />
                        </div>
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