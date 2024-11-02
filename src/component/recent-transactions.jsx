import React, {useContext} from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { TransactionContext } from '../context/transactions';



const RecentTransactions = () => {
  const { transactions } = useContext(TransactionContext); 
  return (
    <div className="mx-auto my-8 p-6 bg-white rounded-lg shadow-lg lg:w-[300px]">
      <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
      {transactions.length > 0 ?
      <div className="space-y-4 overflow-y-auto cursor-pointer">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md ${
              transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex items-center gap-4">
              {transaction.amount > 0 ? (
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
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {transaction.amount < 0 ? `-$${Math.abs(transaction.amount)}` : `$${transaction.amount}`}
            </p>
          </div>
        ))}
      </div>
: 
<span className='mx-auto'>No transactions yet. 📅 Add your first transaction and take control of your finances!</span>
    
}
    </div>
  );
};

export default RecentTransactions;
