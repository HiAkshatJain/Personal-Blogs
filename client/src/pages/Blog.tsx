import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedPosts } from '../services/operations/BlogAPI';
import BlogCard from '../components/common/BlogCard';
import Button from '../components/ui/Button';
import { NewsLetter } from '../components/common/NewsLetter';

const Blog: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await getFeaturedPosts();
        if (response.success) {
          setFeaturedPosts(response.data);
        } else {
          setError('Failed to load blog posts');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology, and the creative process.
        </p>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Posts</h2>
          <Link to="/blog/all">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogCard
                key={post._id}
                post={post}
                featured={index === 0}
              />
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default Blog;
