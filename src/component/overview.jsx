import React from 'react';
import { FaWallet, FaArrowUp, FaArrowDown, FaPiggyBank } from 'react-icons/fa';

const Overview = () => {
  const cards = [
    { id: 1, icon: <FaWallet />, title: "Total Balance", amount: "$12,500", gradient: "from-teal-400 to-green-300" },
    { id: 2, icon: <FaArrowUp />, title: "Income", amount: "$5,000", gradient: "from-green-400 to-green-500" },
    { id: 3, icon: <FaArrowDown />, title: "Expenses", amount: "$2,000", gradient: "from-red-400 to-red-500" },
    { id: 4, icon: <FaPiggyBank />, title: "Savings", amount: "$3,500", gradient: "from-blue-400 to-blue-500" },
  ];

  return (
    <div className="flex gap-4 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`w-[400px] cursor-pointer p-6 rounded-lg shadow-lg bg-gradient-to-r ${card.gradient} text-white text-center transform transition duration-200 hover:scale-105`}
        >
          <div className="text-3xl mb-3 mx-auto">{card.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-2xl font-bold">{card.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
