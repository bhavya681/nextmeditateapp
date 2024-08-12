// app/webinars/page.tsx

import Image from 'next/image';
import React from 'react';

const webinars = [
  {
    title: "Unlocking Your Inner Potential",
    description: "Join us for a transformative webinar where you'll learn techniques to unlock your inner potential and achieve personal growth through guided meditation and introspection.",
    slug: "unlocking-your-inner-potential",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM4NTIxNHw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more webinar objects here
];

const Webinars = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8  py-[10rem]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Upcoming Webinars</h1>
        <div className="space-y-8">
          {webinars.map((webinar) => (
            <div key={webinar.slug} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover"  width={500} height={300} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{webinar.title}</h2>
                <p className="text-lg mb-4">{webinar.description}</p>
                <a href={`/webinars/${webinar.slug}`} className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200">Explore Webinar</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinars;
