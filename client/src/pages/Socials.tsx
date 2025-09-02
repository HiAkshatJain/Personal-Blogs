import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { socialLinks } from '../data/socials';
import SocialIcon from '../components/common/SocialIcon';
import Card from '../components/ui/Card';

const Socials: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Connect With Me
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find me across different platforms and stay updated with my latest work and thoughts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {socialLinks.map((social) => (
          <Card key={social.name} hover className="p-8 text-center">
            <div className="mb-6">
              <SocialIcon social={social} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {social.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {social.name === 'LinkedIn' && 'Professional networking and career updates'}
              {social.name === 'GitHub' && 'Open source projects and code repositories'}
              {social.name === 'LeetCode' && 'Coding challenges and algorithm practice'}
              {social.name === 'Instagram' && 'Behind the scenes and personal moments'}
              {social.name === 'Facebook' && 'Personal updates and community engagement'}
            </p>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <span>Visit Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-gradient-to-r from-blue-50 to-gray-50 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Let's Collaborate
        </h3>
        <p className="text-gray-600 mb-6">
          I'm always open to interesting conversations and collaboration opportunities. 
          Don't hesitate to reach out through any of these platforms or send me a direct message.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Send Direct Message
          </a>
          <a
            href="mailto:akshatjn15@email.com"
            className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Socials;