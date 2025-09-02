import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';
import Interests from '../components/common/Interests';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://img.icons8.com/?size=500&id=81139&format=png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hello, I'm{' '}
            <span className="text-blue-600">Akshat Jain</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
            Full Stack Developer passionate about creating beautiful, 
            functional web experiences that make a difference.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            I specialize in React, TypeScript, and modern web technologies. 
            Currently exploring new Tech Stacks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/blog">
            <Button size="lg" className="flex items-center space-x-2">
              <span>I also write</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </Button>
        </div>

        <Interests/>

      </div>
    </div>
  );
};

export default Home;