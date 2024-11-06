
import React from 'react';

const BudgetsPage = () => {
  return (
    <div className="py-20 px-10 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Budgets</h1>

      {/* Budget Summary Section */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Budget</h2>
          <p className="text-2xl font-bold">₦0.00</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Spent</h2>
          <p className="text-2xl font-bold">₦0.00</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Remaining</h2>
          <p className="text-2xl font-bold">₦0.00</p>
        </div>
      </div>

      {/* Add Budget and Filter */}
      <div className="flex items-center justify-end gap-10 mb-6">
      <button
        className=" bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
     
      >
        + Add Transaction
      </button>
        <select className="p-2 border border-gray-300 rounded-lg">
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Entertainment</option>
          <option>Bills</option>
          <option>Savings</option>
        </select>
      </div>

      {/* Budget List Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Budgeted Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Spent</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Remaining</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="border-b">
              <td className="px-6 py-4 text-sm text-gray-800">Groceries</td>
              <td className="px-6 py-4 text-sm text-gray-800">₦200.00</td>
              <td className="px-6 py-4 text-sm text-gray-800">₦150.00</td>
              <td className="px-6 py-4 text-sm text-gray-800">₦50.00</td>
              <td className="px-6 py-4 text-sm">
                <button className="text-blue-500 hover:underline mr-4">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
            {/* Repeat for additional budget items */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetsPage;
