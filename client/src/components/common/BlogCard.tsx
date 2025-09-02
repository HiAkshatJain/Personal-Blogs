import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../../types';
import Card from '../ui/Card';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  return (
    <Card hover className={featured ? 'col-span-full md:col-span-2' : ''}>
      <Link to={`/blog/${post._id}`} className="block">
        <div className="aspect-video w-full overflow-hidden rounded-t-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span>{post.tags[0]}</span>
              </div>
            )}
          </div>
          <h3 className={`font-semibold text-gray-900 mb-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default BlogCard;