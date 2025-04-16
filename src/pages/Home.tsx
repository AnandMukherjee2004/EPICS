import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const articles = [
    {
      title: "Understanding Water Quality Parameters",
      image: "https://sinay.ai/wp-content/uploads/2021/05/Sensor-water-1.jpg",
      excerpt: "Learn about the key parameters that determine water quality and their importance for human health.",
      link: "https://www.intechopen.com/chapters/69568"
    },
    {
      title: "Global Water Crisis: A Deep Dive",
      image: "https://www.seametrics.com/wp-content/uploads/2014/09/global-water-crisis.jpg",
      excerpt: "Exploring the current state of water quality worldwide and its impact on communities.",
      link: "https://vocal.media/earth/the-looming-thirst-a-deep-dive-into-the-global-water-crisis"
    },
    {
      title: "Water Treatment Technologies",
      image: "https://carewater.solutions/wp-content/uploads/2021/10/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7_%D9%85%D8%B9%D8%A7%D9%84%D8%AC%D8%A9_%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87-1.jpg",
      excerpt: "Discover modern technologies and methods used in water treatment and purification.",
      link: "https://www.aquatechtrade.com/news/water-treatment/water-treatment-essential-guide"
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
          <Link to={article.link} key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
