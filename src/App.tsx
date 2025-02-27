import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LiveStatus } from './components/LiveStatus';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Real-Time Monitoring Dashboard</h2>
              <p className="text-gray-600 mb-8">
                Get instant insights into your water quality parameters. Our advanced monitoring
                system provides accurate, real-time data to help you make informed decisions.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                View Full Dashboard
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <LiveStatus />
            </div>
          </div>
        </div>
      </div>
      
      <HowItWorks />
      <Footer />
    </div>
  );
}