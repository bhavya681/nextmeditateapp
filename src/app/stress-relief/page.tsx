// app/stress-relief/page.tsx

import Image from 'next/image';
import React from 'react';

const StressRelief = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 py-[10rem]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Stress Relief</h1>
        <p className="text-lg leading-relaxed">
          Find relief from stress with our specially designed relaxation techniques and meditation. Our sessions guide you through effective methods to unwind and alleviate tension.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMzM4NTIxNHw&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Stress Relief"
          className="mt-8 w-full h-80 object-cover rounded-lg shadow-lg"
 width={500} height={300}
        />
      </div>
    </div>
  );
};

export default StressRelief;
