import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  // Function to calculate the balance, income, and expenses
  useEffect(() => {
    const calculateBalanceStats = () => {
      const totalIncome = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, cur) => acc + cur.amount, 0);
      setIncome(totalIncome);

      const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, cur) => acc + cur.amount, 0);
      setExpenses(totalExpenses);

      const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
      setBalance(totalBalance);
    };

    calculateBalanceStats();
  }, [transactions]);

  const addTransactions = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  };

  const editTransactions = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };
  

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransactions,
        deleteTransaction,
        editTransactions,
        balance,
        income,
        expenses,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
