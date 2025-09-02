import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getAllBlogPosts } from '../services/operations/BlogAPI';
import BlogCard from '../components/common/BlogCard';

interface BlogPost {
  _id: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  createdAt: string;
}

const AllBlogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogPosts();

        if (response?.success && response.data) {
          setPosts(response.data);
        } else {
          setError('Failed to load posts.');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          All Posts
        </h1>
        <p className="text-xl text-gray-600">
          Explore all my articles and tutorials on web development and technology.
        </p>
      </div>

      {loading && (
        <div className="text-center py-16 text-gray-500 text-lg">
          Loading posts...
        </div>
      )}

      {error && (
        <div className="text-center py-16 text-red-500 text-lg">
          {error}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No blog posts available yet.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
