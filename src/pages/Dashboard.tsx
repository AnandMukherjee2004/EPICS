import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Sample data - in a real app, this would come from your backend
  const qualityTrends = [
    { month: 'Jan', ph: 7.2, hardness: 150, sulfate: 250 },
    { month: 'Feb', ph: 7.4, hardness: 155, sulfate: 245 },
    { month: 'Mar', ph: 7.1, hardness: 148, sulfate: 255 },
    { month: 'Apr', ph: 7.3, hardness: 152, sulfate: 248 },
    { month: 'May', ph: 7.5, hardness: 157, sulfate: 242 },
  ];

  const parameterDistribution = [
    { name: 'pH Level', value: 30 },
    { name: 'Hardness', value: 25 },
    { name: 'Sulfates', value: 20 },
    { name: 'Chloramines', value: 15 },
    { name: 'Other', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Water Quality Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quality Trends Over Time</h2>
          <LineChart width={500} height={300} data={qualityTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ph" stroke="#8884d8" />
            <Line type="monotone" dataKey="hardness" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sulfate" stroke="#ffc658" />
          </LineChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Parameter Distribution</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={parameterDistribution}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {parameterDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Monthly Parameter Comparison</h2>
          <BarChart width={1000} height={300} data={qualityTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ph" fill="#8884d8" />
            <Bar dataKey="hardness" fill="#82ca9d" />
            <Bar dataKey="sulfate" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;