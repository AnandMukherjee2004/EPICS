import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getChatResponse } from '../utils/gemini';

interface WaterParameters {
  ph: number;
  hardness: number;
  solids: number;
  chloramines: number;
  sulfate: number;
  conductivity: number;
  organic_carbon: number;
  trihalomethanes: number;
  turbidity: number;
}

// Define parameter weights and ideal ranges
const parameterConfig = {
  ph: { weight: 0.15, ideal: { min: 6.5, max: 8.5 }, label: 'pH Level' },
  hardness: { weight: 0.12, ideal: { min: 0, max: 300 }, label: 'Hardness (mg/L)' },
  solids: { weight: 0.1, ideal: { min: 0, max: 500 }, label: 'Total Dissolved Solids (mg/L)' },
  chloramines: { weight: 0.12, ideal: { min: 0, max: 4 }, label: 'Chloramines (mg/L)' },
  sulfate: { weight: 0.12, ideal: { min: 0, max: 250 }, label: 'Sulfate (mg/L)' },
  conductivity: { weight: 0.1, ideal: { min: 0, max: 800 }, label: 'Conductivity (μS/cm)' },
  organic_carbon: { weight: 0.1, ideal: { min: 0, max: 4 }, label: 'Organic Carbon (mg/L)' },
  trihalomethanes: { weight: 0.1, ideal: { min: 0, max: 80 }, label: 'Trihalomethanes (μg/L)' },
  turbidity: { weight: 0.09, ideal: { min: 0, max: 5 }, label: 'Turbidity (NTU)' }
};

const Analysis = () => {
  const [parameters, setParameters] = useState<Partial<WaterParameters>>({});
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleParameterChange = (param: keyof WaterParameters, value: string) => {
    setParameters(prev => ({
      ...prev,
      [param]: value === '' ? undefined : Number(value)
    }));
  };

  const calculateParameterScore = (param: keyof WaterParameters, value: number) => {
    const config = parameterConfig[param];
    const { min, max } = config.ideal;
    
    if (value < min) {
      return Math.max(0, 1 - (min - value) / min);
    } else if (value > max) {
      return Math.max(0, 1 - (value - max) / max);
    }
    return 1;
  };

  const calculateWaterQuality = () => {
    if (Object.keys(parameters).length === 0) return null;

    let totalScore = 0;
    let totalWeight = 0;

    Object.entries(parameters).forEach(([param, value]) => {
      if (value !== undefined) {
        const paramScore = calculateParameterScore(param as keyof WaterParameters, value);
        totalScore += paramScore * parameterConfig[param as keyof WaterParameters].weight;
        totalWeight += parameterConfig[param as keyof WaterParameters].weight;
      }
    });

    // Normalize score to account for missing parameters
    const normalizedScore = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;
    
    return {
      score: Math.round(normalizedScore * 10) / 10,
      rating: normalizedScore >= 90 ? 'Excellent' :
              normalizedScore >= 80 ? 'Very Good' :
              normalizedScore >= 70 ? 'Good' :
              normalizedScore >= 60 ? 'Fair' :
              'Poor',
      potable: normalizedScore >= 70
    };
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble processing your request at the moment. Please try again later.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const result = calculateWaterQuality();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Water Quality Analysis</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(parameterConfig).map(([key, config]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700">
                  {config.label}
                  <span className="text-xs text-gray-500 ml-1">
                    (Weight: {Math.round(config.weight * 100)}%)
                  </span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={parameters[key as keyof WaterParameters] || ''}
                  onChange={(e) => handleParameterChange(key as keyof WaterParameters, e.target.value)}
                />
                <span className="text-xs text-gray-500">
                  Ideal range: {config.ideal.min} - {config.ideal.max}
                </span>
              </div>
            ))}
          </div>

          {result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Analysis Results</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-32">Quality Score:</div>
                  <div className="font-medium">
                    {result.score}/100
                    <div 
                      className="h-2 w-24 bg-gray-200 rounded-full ml-2 inline-block"
                      style={{ verticalAlign: 'middle' }}
                    >
                      <div 
                        className={`h-full rounded-full ${
                          result.score >= 80 ? 'bg-green-500' :
                          result.score >= 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-32">Rating:</div>
                  <div className="font-medium">{result.rating}</div>
                </div>
                <div className="flex items-center">
                  <div className="w-32">Potability:</div>
                  <div className={`font-medium ${result.potable ? 'text-green-600' : 'text-red-600'}`}>
                    {result.potable ? 'Safe to drink' : 'Not safe to drink'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Water Quality Assistant</h2>
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          </div>

          {chatOpen && (
            <div className="h-[500px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-100 ml-auto'
                        : 'bg-gray-100'
                    } max-w-[80%]`}
                  >
                    {message.text}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-center">
                    <div className="animate-pulse text-gray-500">Processing...</div>
                  </div>
                )}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about water quality..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                  disabled={isLoading}
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;