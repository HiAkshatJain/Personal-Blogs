import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Code } from 'lucide-react';
import { Social } from '../../types';

interface SocialIconProps {
  social: Social;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  code: Code
};

const SocialIcon: React.FC<SocialIconProps> = ({ social }) => {
  const IconComponent = iconMap[social.icon as keyof typeof iconMap];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
      style={{ '--hover-color': social.color } as React.CSSProperties}
    >
      <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
    </a>
  );
};

export default SocialIcon;