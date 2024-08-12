// components/GuidedMeditations.tsx

import Image from 'next/image';
import React from 'react';

const meditations = [
  {
    title: "Mindful Breathing",
    description: "A 10-minute meditation focusing on breath awareness to calm the mind and reduce stress.",
    image: "https://replicate.delivery/yhqm/ebf5e7yEziAHBJuLgFmvNSfItQu0UKaGFr9QE3wyxyNzYeMaC/out-0.webp"
  },
  {
    title: "Body Scan Relaxation",
    description: "A 15-minute guided journey through your body, releasing tension and promoting deep relaxation.",
    image: "https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp"
  },
  {
    title: "Loving-Kindness Meditation",
    description: "A 20-minute practice to cultivate compassion and positive emotions towards yourself and others.",
    image: "https://replicate.delivery/yhqm/waQNX0qsdJqaNBPQLN4yGsYeUycs2cZ85BSq1o3WniOHzzoJA/out-0.webp"
  },
  {
    title: "Chakra Balancing",
    description: "A 30-minute meditation to align and balance your energy centers, promoting overall well-being.",
    image: "https://replicate.delivery/yhqm/ebf5e7yEziAHBJuLgFmvNSfItQu0UKaGFr9QE3wyxyNzYeMaC/out-0.webp"
  },
  {
    title: "Sleep Meditation",
    description: "A calming 25-minute guided meditation to help you relax and prepare for restful sleep.",
    image: "https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp"
  },
  {
    title: "Mindful Walking",
    description: "A 15-minute guide to practicing mindfulness while walking, perfect for outdoor or indoor practice.",
    image: "https://replicate.delivery/yhqm/waQNX0qsdJqaNBPQLN4yGsYeUycs2cZ85BSq1o3WniOHzzoJA/out-0.webp"
  },
];

const YogaPage = () => {
  return (
    <div className="bg-gray-900 text-white p-8 py-[10rem] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Guided Meditations</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {meditations.map((meditation, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            {meditation.image && (
              <Image
                src={meditation.image}
                alt={meditation.title}
                className="w-full h-40 object-cover rounded-t-lg"
                width={500} height={300}
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{meditation.title}</h3>
              <p className="text-sm mb-4">{meditation.description}</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaPage;
