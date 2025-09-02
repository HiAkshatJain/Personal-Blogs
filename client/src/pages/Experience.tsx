import React from 'react';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { experiences } from '../data/experience';
import Card from '../components/ui/Card';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Experience
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          My professional journey and the roles that have shaped my career in web development.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={exp.id} className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                  {exp.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
            
            {index === 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Current Position</span>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-gray-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Resume
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;