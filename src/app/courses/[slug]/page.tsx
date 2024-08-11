import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

// Mock data fetch function
const fetchCourseData = async (slug: string) => {
  // Simulate data fetching based on slug
  // Replace this with actual data fetching logic
  const data = {
    'deep-meditation': {
      title: 'Deep Meditation',
      description: 'Explore deeper levels of consciousness with our guided deep meditation sessions.',
      image: 'https://replicate.delivery/yhqm/waQNX0qsdJqaNBPQLN4yGsYeUycs2cZ85BSq1o3WniOHzzoJA/out-0.webp',
    },
    'mindfulness': {
      title: 'Mindfulness',
      description: 'Practice mindfulness and become more aware of the present moment with our guided sessions.',
      image: 'https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp',
    },
    // Add more mock data as needed
  };

  return data[slug] || { title: 'Not Found', description: 'No data available for this slug.', image: '' };
};

const SlugData = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      fetchCourseData(slug as string).then(result => setData(result));
    }
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {data.image && (
            <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg leading-relaxed">{data.description}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="/courses"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
          >
            Back to All Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlugData;
