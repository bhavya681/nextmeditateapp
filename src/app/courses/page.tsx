// app/courses/page.tsx

import Image from 'next/image';
import React from 'react';

const courses = [
  {
    title: "Mindful Breathing",
    description: "A 10-minute meditation focusing on breath awareness to calm the mind and reduce stress.",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM4NTIxNHw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Body Scan Relaxation",
    description: "A 15-minute guided journey through your body, releasing tension and promoting deep relaxation.",
    image: "https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp",
  },
  {
    title: "Loving-Kindness Meditation",
    description: "A 20-minute practice to cultivate compassion and positive emotions towards yourself and others.",
    image: "https://replicate.delivery/yhqm/waQNX0qsdJqaNBPQLN4yGsYeUycs2cZ85BSq1o3WniOHzzoJA/out-0.webp",
  },
  {
    title: "Chakra Balancing",
    description: "A 30-minute meditation to align and balance your energy centers, promoting overall well-being.",
    image: "https://replicate.delivery/yhqm/ebf5e7yEziAHBJuLgFmvNSfItQu0UKaGFr9QE3wyxyNzYeMaC/out-0.webp",
  },
  {
    title: "Sleep Meditation",
    description: "A calming 25-minute guided meditation to help you relax and prepare for restful sleep.",
    image: "https://media.istockphoto.com/id/1455601128/photo/woman-meditating-at-sunset-in-the-mountains.webp?b=1&s=170667a&w=0&k=20&c=zPOtRdkI9RZ6Ows-ZB_bZLIGqEKBA7e844ci5QsJs6s=",
  },
  {
    title: "Mindful Walking",
    description: "A 15-minute guide to practicing mindfulness while walking, perfect for outdoor or indoor practice.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const AllCoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 py-[10rem] ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All Courses</h1>
        <p className="text-lg mb-12 text-center leading-relaxed">
          Browse through our extensive list of courses designed to enhance your meditation and mindfulness practice. Discover a range of guided meditations and relaxation techniques that cater to different needs and preferences.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <Image src={course.image} alt={course.title} className="w-full h-48 object-cover" width={500} height={300} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-base mb-4">{course.description}</p>
                <a href={`/courses/${course.title.replace(/\s+/g, '-').toLowerCase()}`} className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200">
                  Explore Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
