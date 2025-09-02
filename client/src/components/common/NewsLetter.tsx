import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../ui/Button';
import { subscribeToNewsletter } from "../../services/operations/NewsLetterAPI"

export const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string): boolean => {
    // Simple email regex (adjustable if needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    if (!isValidEmail(email)) {
        toast.error('Please enter a valid email address');
        return;
    }

    setLoading(true);
    try {
      const data = await subscribeToNewsletter(email);
      toast.success(data.message || 'Subscribed successfully!');
      setEmail('');
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Something went wrong';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Subscribe to get notified about new blog posts, tutorials, and insights about web development and technology trends.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <Button
          className="w-full sm:w-auto"
          onClick={handleSubscribe}
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
    </div>
  );
};
