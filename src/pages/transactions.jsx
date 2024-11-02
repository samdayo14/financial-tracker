import React, { useState, useContext } from 'react';
import TransactionModal from '../component/transaction-modal';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TransactionContext } from '../context/transactions';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TransactionPage = () => {
  const { transactions,deleteTransaction } = useContext(TransactionContext); 
  const [showModal, setShowModal] = useState(false);
  const { balance, income, expenses } = useContext(TransactionContext);
  const [selectedTransaction, setSelectedTransaction] = useState(null);


  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  const handleDelete = (id) => {
    deleteTransaction(id);
    toast.success("Transaction deleted successfully!");
  };

  const getTransactionsData = (transaction) => {
    setSelectedTransaction(transaction);
    openModal();
  };
  
  return (
    <div className="py-20 px-10 overflow-y-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">Transactions</h1>
        <div className='flex gap-5 items-center justify-center'>
        <button
        className=" bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={openModal}
      >
        + Add Transaction
      </button>
        <div className="flex flex-col md:flex-row gap-4">
          <select className="input-field px-4 py-2 rounded-md border border-gray-300 focus:outline-none">
            <option>All Categories</option>
            <option>Food</option>
            <option>Salary</option>
            <option>Entertainment</option>
          </select>
        </div>

        </div>
      </header>

      {/* Summary Section */}
      <section className="flex gap-6 mb-8">
        <div className="flex-1 card bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Income</h2>
          <p className="text-2xl font-bold">₦{income.toFixed(2)}</p>
        </div>
        <div className="flex-1 card bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Expenses</h2>
          <p className="text-2xl font-bold">₦{expenses.toFixed(2)}</p>
        </div>
        <div className="flex-1 card bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold">₦{balance.toFixed(2)}</p>
        </div>
      </section>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-4 border-b">Date</th>
              <th className="p-4 border-b">Category</th>
              <th className="p-4 border-b">Description</th>
              <th className="p-4 border-b">Amount</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="p-4 border-b text-gray-800">{transaction.date}</td>
                <td className="p-4 border-b text-gray-800">{transaction.category}</td>
                <td className="p-4 border-b text-gray-800">{transaction.description}</td>
                <td className={`p-4 border-b ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'} font-semibold`}>
                  {transaction.amount < 0 ? '-' : '+'}₦{Math.abs(transaction.amount).toFixed(2)}
                </td>
                <td className="p-4 border-b">
                  <button className="text-blue-600 hover:text-blue-800 lg:pr-5" onClick={() => getTransactionsData(transaction)}>
                    <FaEdit className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(transaction.id)}>
                    <FaTrash className="h-5 w-5" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transaction Modal */}
      {/* {showModal && <TransactionModal closeModal={closeModal} />} */}
      {showModal && <TransactionModal closeModal={closeModal} transaction={selectedTransaction} />}


    </div>
  );
};

export default TransactionPage;
