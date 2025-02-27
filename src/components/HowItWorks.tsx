import React from 'react';
import { Wifi, Server, LineChart, Mail } from 'lucide-react';

const steps = [
  {
    icon: Wifi,
    title: 'Data Collection',
    description: 'Sensors collect real-time water quality data',
  },
  {
    icon: Server,
    title: 'Processing',
    description: 'Data is processed and analyzed instantly',
  },
  {
    icon: LineChart,
    title: 'Analysis',
    description: 'Advanced algorithms detect anomalies',
  },
  {
    icon: Mail,
    title: 'Notification',
    description: 'Instant alerts for any issues detected',
  },
];

export function HowItWorks() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-white flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-4">
                    <step.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}