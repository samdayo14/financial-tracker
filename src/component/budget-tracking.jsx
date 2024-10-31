import React from 'react';

const BudgetTracking = () => {
  const budgets = [
    { category: "Groceries", spent: 150, total: 200 },
    { category: "Entertainment", spent: 100, total: 150 },
    { category: "Bills", spent: 250, total: 300 },
    { category: "Savings", spent: 500, total: 500 },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Budget Tracking</h2>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = Math.min((budget.spent / budget.total) * 100, 100);
          const progressColor = percentage >= 100 ? 'bg-red-500' : 'bg-green-500';
          return (
            <div key={budget.category}>
              <div className="flex justify-between mb-2">
                <p className="font-semibold">{budget.category}</p>
                <p className="text-gray-500">{`$${budget.spent} / $${budget.total}`}</p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className={`${progressColor} h-4 rounded-full`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetTracking;
