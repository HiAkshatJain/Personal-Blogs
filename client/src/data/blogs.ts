import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Exploring the latest trends and best practices in React development for 2025.",
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
    tags: ["React", "JavaScript", "Web Development"],
    date: "2025-01-15"
  },
  {
    id: 2,
    title: "The Future of TypeScript",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "How TypeScript is revolutionizing JavaScript development with strong typing and better tooling.",
    content: `
      <h2>Why TypeScript Matters</h2>
      <p>TypeScript has become an essential tool in modern JavaScript development, providing static type checking that catches errors at compile time rather than runtime.</p>
      
      <h2>Advanced Features</h2>
      <p>Recent versions of TypeScript have introduced powerful features like template literal types, conditional types, and improved inference that make the developer experience even better.</p>
      
      <h2>Ecosystem Impact</h2>
      <p>The TypeScript ecosystem continues to grow, with better framework integration and tooling support across the board.</p>
    `,
    tags: ["TypeScript", "JavaScript", "Development"],
    date: "2025-01-10"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
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
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    date: "2025-01-05"
  }
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.slice(0, 3);
};

export const getBlogPost = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};