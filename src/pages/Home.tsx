import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const articles = [
    {
      title: "Understanding Water Quality Parameters",
      image: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?auto=format&fit=crop&q=80&w=800",
      excerpt: "Learn about the key parameters that determine water quality and their importance for human health."
    },
    {
      title: "Global Water Crisis: A Deep Dive",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
      excerpt: "Exploring the current state of water quality worldwide and its impact on communities."
    },
    {
      title: "Water Treatment Technologies",
      image: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?auto=format&fit=crop&q=80&w=800",
      excerpt: "Discover modern technologies and methods used in water treatment and purification."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Water Quality Monitoring</h1>
        <p className="text-xl text-gray-600 mb-8">Ensure the safety of your water with our comprehensive analysis tools</p>
        <Link
          to="/analysis"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Analysis
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;