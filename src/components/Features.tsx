import React from 'react';
import { Activity, Bell, History, Database } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Continuous monitoring of key water quality parameters with instant updates',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Receive immediate notifications when parameters exceed safe thresholds',
  },
  {
    icon: History,
    title: 'Historical Analysis',
    description: 'Track trends and patterns with comprehensive historical data',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure storage and easy access to all your water quality data',
  },
];

export function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}