import React, { createContext, useState } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransactions, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
