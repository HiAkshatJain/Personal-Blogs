import React, { useEffect, useState } from 'react';
import { getInterests } from '../../services/operations/InterestAPI';

interface Interest {
  _id: string;
  title: string;
  description: string;
}

const Interests: React.FC = () => {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const response = await getInterests();

        if (response?.success && response.data) {
          setInterests(response.data);
        } else {
          setError('Failed to load interests.');
        }
      } catch (err) {
        console.error('Error fetching interests:', err);
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    fetchInterests();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 py-8">Loading interests...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  if (interests.length === 0) {
    return <div className="text-center text-gray-400 py-8">No interests available.</div>;
  }

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {interests.map((item) => (
        <div
          key={item._id}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests;
