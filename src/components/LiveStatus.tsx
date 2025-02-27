import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const parameters = [
  { name: 'pH Level', value: 7.2, status: 'good' },
  { name: 'Turbidity', value: '2.1 NTU', status: 'good' },
  { name: 'Temperature', value: '22°C', status: 'warning' },
  { name: 'Dissolved Oxygen', value: '8.5 mg/L', status: 'good' },
];

export function LiveStatus() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm w-full">
      <h3 className="text-lg font-semibold mb-4">Live Water Quality Status</h3>
      <div className="space-y-4">
        {parameters.map((param) => (
          <div key={param.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {param.status === 'good' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              <span className="text-gray-700">{param.name}</span>
            </div>
            <span className={`font-medium ${
              param.status === 'good' ? 'text-green-600' : 'text-yellow-600'
            }`}>
              {param.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}