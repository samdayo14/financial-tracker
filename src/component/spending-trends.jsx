import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SpendingTrends = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 
    datasets: [
      {
        label: 'Groceries',
        data: [100, 200, 150, 300, 250, 220, 280],
        borderColor: 'rgba(34, 197, 94, 1)', 
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
      },
      {
        label: 'Bills',
        data: [300, 400, 350, 500, 450, 420, 480],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
      },
      {
        label: 'Entertainment',
        data: [150, 100, 200, 180, 220, 240, 210],
        borderColor: 'rgba(239, 68, 68, 1)', 
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Spending Trends</h2>
      
      {/* Line Chart */}
      <div className="h-64">
        <Line data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-4 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
          <p className="text-sm">Groceries</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
          <p className="text-sm">Bills</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
          <p className="text-sm">Entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default SpendingTrends;
