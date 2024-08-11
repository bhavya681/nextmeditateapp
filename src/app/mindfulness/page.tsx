// app/mindfulness/page.tsx

import React from 'react';

const Mindfulness = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 py-[10rem]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Mindfulness</h1>
        <p className="text-lg leading-relaxed">
          Practice mindfulness and become more aware of the present moment with our guided sessions. Our expert guidance helps you cultivate a mindful approach to daily life.
        </p>
        <img
          src="https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp"
          alt="Mindfulness"
          className="mt-8 w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Mindfulness;
