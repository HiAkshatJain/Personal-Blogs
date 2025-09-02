import Interest from '../models/Interest';
import Experience from '../models/Experience';
import Social from '../models/Social';
import Blog from '../models/Blog';

export const seedDatabase = async (): Promise<void> => {
  try {
    // Clear existing data
    await Promise.all([
      Interest.deleteMany({}),
      Experience.deleteMany({}),
      Social.deleteMany({}),
      Blog.deleteMany({})
    ]);

    // Seed Interests
    const interests = [
      {
        title: 'Web Development',
        description: 'Building modern, responsive web applications with cutting-edge technologies',
        imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        title: 'Machine Learning',
        description: 'Exploring AI and machine learning algorithms to solve complex problems',
        imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        title: 'Photography',
        description: 'Capturing moments and telling stories through the lens',
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        title: 'Travel',
        description: 'Exploring new cultures and gaining inspiration from different places',
        imageUrl: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ];

    await Interest.insertMany(interests);

    // Seed Experiences
    const experiences = [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp Solutions',
        duration: '2022 - Present',
        description: 'Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers. Implemented modern development practices and improved application performance by 40%.',
        icon: '💼'
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Innovations Inc',
        duration: '2020 - 2022',
        description: 'Developed end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions on time.',
        icon: '🚀'
      },
      {
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        duration: '2019 - 2020',
        description: 'Built responsive user interfaces and implemented modern web technologies. Worked closely with designers to create pixel-perfect implementations of complex designs.',
        icon: '💻'
      },
      {
        title: 'Junior Developer',
        company: 'CodeCraft Agency',
        duration: '2018 - 2019',
        description: 'Started my professional journey developing websites and learning industry best practices. Gained experience in HTML, CSS, JavaScript, and various frameworks.',
        icon: '🌱'
      }
    ];

    await Experience.insertMany(experiences);

    // Seed Social Links
    const socials = [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/alexjohnson',
        icon: 'linkedin',
        color: '#0077B5'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/alexjohnson',
        icon: 'github',
        color: '#333333'
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/alexjohnson',
        icon: 'code',
        color: '#FFA500'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/alexjohnson',
        icon: 'instagram',
        color: '#E4405F'
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/alexjohnson',
        icon: 'facebook',
        color: '#1877F2'
      }
    ];

    await Social.insertMany(socials);

    // Seed Blog Posts
    const blogs = [
      {
        title: 'Building Modern Web Applications with React',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
        excerpt: 'Exploring the latest trends and best practices in React development for 2025.',
        content: `
          <h2>Introduction</h2>
          <p>React continues to evolve and shape the modern web development landscape. In this post, we'll explore the latest trends and best practices that are defining React development in 2025.</p>
          
          <h2>Key Trends</h2>
          <p>Server Components and the React Server Components architecture have revolutionized how we think about rendering. This approach allows us to render components on the server, reducing the JavaScript bundle size and improving performance.</p>
          
          <h2>Performance Optimization</h2>
          <p>Modern React applications benefit from advanced optimization techniques including code splitting, lazy loading, and efficient state management patterns.</p>
          
          <h2>Conclusion</h2>
          <p>The future of React development is bright, with new features and patterns emerging that make building complex applications more manageable and performant.</p>
        `,
        tags: ['React', 'JavaScript', 'Web Development'],
        isPublished: true
      },
      {
        title: 'The Future of TypeScript',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
        excerpt: 'How TypeScript is revolutionizing JavaScript development with strong typing and better tooling.',
        content: `
          <h2>Why TypeScript Matters</h2>
          <p>TypeScript has become an essential tool in modern JavaScript development, providing static type checking that catches errors at compile time rather than runtime.</p>
          
          <h2>Advanced Features</h2>
          <p>Recent versions of TypeScript have introduced powerful features like template literal types, conditional types, and improved inference that make the developer experience even better.</p>
          
          <h2>Ecosystem Impact</h2>
          <p>The TypeScript ecosystem continues to grow, with better framework integration and tooling support across the board.</p>
        `,
        tags: ['TypeScript', 'JavaScript', 'Development'],
        isPublished: true
      },
      {
        title: 'CSS Grid vs Flexbox: When to Use Each',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        excerpt: 'A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.',
        content: `
          <h2>Understanding the Differences</h2>
          <p>CSS Grid and Flexbox serve different purposes in modern web layout. While both are powerful, knowing when to use each is crucial for efficient development.</p>
          
          <h2>When to Use Flexbox</h2>
          <p>Flexbox excels at one-dimensional layouts, component-level design, and when you need to distribute space among items in a single direction.</p>
          
          <h2>When to Use CSS Grid</h2>
          <p>CSS Grid is perfect for two-dimensional layouts, page-level design, and when you need precise control over both rows and columns.</p>
          
          <h2>Combining Both</h2>
          <p>The most powerful approach often involves using Grid for the overall page layout and Flexbox for component-level arrangements.</p>
        `,
        tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
        isPublished: true
      },
      {
        title: 'Getting Started with Node.js and Express',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
        excerpt: 'A beginner-friendly guide to building your first REST API with Node.js and Express.',
        content: `
          <h2>Setting Up Your Environment</h2>
          <p>Before we dive into building our API, let's set up a proper development environment with Node.js and the necessary tools.</p>
          
          <h2>Creating Your First Express Server</h2>
          <p>We'll start by creating a simple Express server and gradually add more functionality to build a complete REST API.</p>
          
          <h2>Database Integration</h2>
          <p>Learn how to connect your Express application to MongoDB using Mongoose for data persistence.</p>
          
          <h2>Best Practices</h2>
          <p>Discover industry best practices for structuring your Node.js applications, handling errors, and implementing security measures.</p>
        `,
        tags: ['Node.js', 'Express', 'Backend', 'API'],
        isPublished: true
      }
    ];

    await Blog.insertMany(blogs);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};