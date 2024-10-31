import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const transactions = [
  { id: 1, date: '2024-10-30', description: 'Salary', amount: 5000, type: 'income' },
  { id: 2, date: '2024-10-28', description: 'Groceries', amount: -200, type: 'expense' },
  { id: 3, date: '2024-10-27', description: 'Electricity Bill', amount: -100, type: 'expense' },
  { id: 4, date: '2024-10-25', description: 'Freelance', amount: 800, type: 'income' },
];

const RecentTransactions = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
              transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex items-center gap-4">
              {transaction.type === 'income' ? (
                <FaArrowUp className="text-green-600" />
              ) : (
                <FaArrowDown className="text-red-600" />
              )}
              <div>
                <p className="text-lg font-semibold">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p
              className={`text-xl font-bold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `$${transaction.amount}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
