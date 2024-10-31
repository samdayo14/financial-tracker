import React from 'react';

const MonthlySummary = () => {
  const categories = [
    { name: 'Food', amount: 800, percentage: 20, color: 'bg-green-500', width: '80%' },
    { name: 'Utilities', amount: 300, percentage: 8, color: 'bg-blue-500', width: '30%' },
    { name: 'Transportation', amount: 400, percentage: 10, color: 'bg-purple-500', width: '40%' },
    { name: 'Entertainment', amount: 200, percentage: 5, color: 'bg-red-500', width: '20%' },
    // Add more categories as needed
  ];

  return (
    <div className="max-w-4xl  my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Monthly Summary</h2>

      {/* Detailed Breakdown Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 font-semibold text-gray-600">Category</th>
              <th className="text-right px-4 py-2 font-semibold text-gray-600">Amount</th>
              <th className="text-right px-4 py-2 font-semibold text-gray-600">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.name}>
                <td className="px-4 py-3 border-t text-gray-700">{category.name}</td>
                <td className="px-4 py-3 text-right border-t text-gray-800">${category.amount}</td>
                <td className="px-4 py-3 text-right border-t text-gray-800">{category.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Category Progress Bars */}
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Spending by Category</h3>
        {categories.map((category) => (
          <div key={category.name}>
            <p className="text-sm font-semibold text-gray-600">{category.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className={`${category.color} h-4 rounded-full`} style={{ width: category.width }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Generate Report Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
          Generate Detailed Report
        </button>
      </div>
    </div>
  );
};

export default MonthlySummary;
