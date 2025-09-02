import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using Akshat & ChatGPT</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2023 Blog - Akshat Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;