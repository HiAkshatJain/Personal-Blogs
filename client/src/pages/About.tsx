import React from 'react';
import { GraduationCap, Code, Coffee, Music } from 'lucide-react';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  const interests = [
    { icon: Code, name: 'Coding', description: 'Full-stack and AI-driven applications' },
    { icon: Coffee, name: 'Coffee', description: 'Fueling focus during late-night debugging' },
    { icon: Music, name: 'Music', description: 'Keeps me energized while building products' },
    { icon: GraduationCap, name: 'Learning', description: 'Always learning new technologies' },
  ];

  const certifications = [
    'Deep Learning with TensorFlow by IBM',
    'In-College Summer Training in Data Science (ADGIPS, IBM)',
  ];

  const skills = [
    'C / C++',
    'Java',
    'React.js / Next.js',
    'Node.js / Express.js',
    'MongoDB / MySQL',
    'Docker / Linux',
    'Kafka / Redis',
    'Machine Learning',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm a full-stack developer and computer science student, passionate about building impactful applications 
          using modern technologies. I enjoy creating scalable systems, automating tasks, and solving real-world problems 
          through code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              My journey started with a Diploma in Mechanical Engineering, but my curiosity for programming led me to pursue 
              Computer Science. Since then, I’ve built complex systems like EdTech platforms, AI-powered tools, and booking engines.
            </p>
            <p>
              I love working across the stack—from crafting intuitive frontends to architecting robust backend services using 
              technologies like Next.js, Spring Boot, and Docker. I’ve also gained hands-on experience with microservices, LLM APIs, 
              and real-time data pipelines.
            </p>
            <p>
              When I’m not coding, I’m exploring new frameworks, contributing to projects, solving DSA problems, or listening to music 
              with a strong cup of coffee.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>

          <Card className="p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              B.Tech, Computer Science & Engineering
            </h3>
            <p className="text-blue-600 font-medium mb-1">
              Dr. Akhilesh Das Gupta Institute of Technology & Management (GGSIPU)
            </p>
            <p className="text-gray-500 text-sm mb-2">2022 - 2026 | CGPA: 9.2 / 10</p>
            <p className="text-gray-600 text-sm">
              Coursework: DSA, OOPs, DBMS, CN, OS
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Diploma in Mechanical Engineering
            </h3>
            <p className="text-blue-600 font-medium mb-1">
              Aryabhatt Institute of Technology (BTE Board)
            </p>
            <p className="text-gray-500 text-sm mb-2">Completed in 2023 | Percentage: 73%</p>
          </Card>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Projects</h2>
        <div className="space-y-6">

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Learn Pulse – EdTech Platform</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tech:</strong> React.js, Node.js, Express, Redux Toolkit, MongoDB, Cloudinary, TypeScript
            </p>
            <p className="text-gray-600 text-sm">
              Developed an end-to-end learning platform with student, instructor, and admin roles. Implemented secure 
              auth, dynamic dashboards, and tools for managing content, categories, coupons, and analytics.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Expense Ease – Expense Tracker with AI</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tech:</strong> Spring Boot, React Native, MySQL, Flask, MistralAI, Kafka, Kong, Docker
            </p>
            <p className="text-gray-600 text-sm">
              Built a microservices-based personal finance system. Used LLMs for auto-expense entry, JWT-based 
              auth, and Kafka event streams. Mobile app supports category tracking, analytics, and intuitive UI.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 text-lg mb-2">Travel Ease – Booking System</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tech:</strong> Next.js, Prisma, PostgreSQL, Redis, Zustand, Puppeteer, BullMQ, Stripe
            </p>
            <p className="text-gray-600 text-sm">
              Created a booking platform for tours, hotels, and flights with real-time web scraping from Yatra & Kayak. 
              Included stripe-based payments, admin dashboard, and background queues for async scraping.
            </p>
          </Card>

        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-700">
          {skills.map((skill) => (
            <Card key={skill} className="p-4">
              {skill}
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Interests & Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest) => (
            <Card key={interest.name} hover className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <interest.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{interest.name}</h3>
              <p className="text-gray-600 text-sm">{interest.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
