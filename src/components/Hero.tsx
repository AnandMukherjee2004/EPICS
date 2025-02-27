import React from 'react';
import { Droplets } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-8 w-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">AquaWatch</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
            Monitor Water Quality in Real-Time
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Advanced monitoring solutions for ensuring water safety and quality. Get instant alerts, 
            detailed analytics, and comprehensive reports - all in one platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}