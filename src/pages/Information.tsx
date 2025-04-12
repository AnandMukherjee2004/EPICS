import React from 'react';
import { AlertCircle, Droplets, ThermometerSun, Bug } from 'lucide-react';

const Information = () => {
  const diseases = [
    {
      name: "Cholera",
      description: "Bacterial disease causing severe diarrhea and dehydration",
      prevention: "Clean water, proper sanitation, and good hygiene practices"
    },
    {
      name: "Typhoid",
      description: "Bacterial infection that can spread throughout the body",
      prevention: "Safe drinking water, improved sanitation, and food safety"
    },
    {
      name: "Hepatitis A",
      description: "Viral liver disease spread through contaminated water",
      prevention: "Vaccination, clean water, and proper hand washing"
    }
  ];

  const parameters = [
    {
      name: "pH Level",
      description: "Measures how acidic/basic water is. Ideal range: 6.5-8.5",
      importance: "Affects taste and pipe corrosion"
    },
    {
      name: "Hardness",
      description: "Amount of dissolved calcium and magnesium",
      importance: "Impacts soap effectiveness and scale formation"
    },
    {
      name: "Turbidity",
      description: "Measure of water clarity",
      importance: "Indicator of filtration effectiveness"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Droplets className="h-8 w-8 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Understanding Water Quality</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Water quality refers to the chemical, physical, and biological characteristics of water. It's a measure of the condition of water relative to the requirements of one or more biotic species and/or to any human need or purpose.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {parameters.map((param, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{param.name}</h3>
                <p className="text-gray-600 mb-2">{param.description}</p>
                <p className="text-sm text-gray-500">{param.importance}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Bug className="h-8 w-8 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold">Waterborne Diseases</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {diseases.map((disease, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{disease.name}</h3>
                <p className="text-gray-600 mb-2">{disease.description}</p>
                <div className="flex items-start mt-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                  <p className="text-sm text-gray-500">{disease.prevention}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <ThermometerSun className="h-8 w-8 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold">Water Treatment Methods</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Physical Treatment</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Filtration through various media</li>
                <li>Sedimentation and settling</li>
                <li>UV radiation treatment</li>
                <li>Boiling and distillation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Chemical Treatment</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Chlorination</li>
                <li>Ozonation</li>
                <li>Ion exchange</li>
                <li>Coagulation and flocculation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Information;