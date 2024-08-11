// app/about/page.tsx

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8  py-[10rem]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          We are dedicated to providing transformative meditation experiences. Our mission is to guide individuals towards inner peace and personal growth through innovative meditation techniques and virtual reality experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
