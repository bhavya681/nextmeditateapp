// import Image from 'next/image';
// import { WavyBackground } from "./ui/wavy-background"
// import { AnimatedTooltip } from "./ui/animated-tooltip";

// // Meditation instructors data
// const instructors = [
//   {
//     id: 1,
// name: 'Aria Sharma',
// designation: 'Mindfulness Coach',
//     image:
//       'https://images.unsplash.com/photo-1584996369393-04f16fcd026f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 2,
// name: 'Kiran Patel',
// designation: 'Yoga & Meditation Guru',
//     image:
//       'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 3,
// name: 'Maya Ling',
// designation: 'Spiritual Healer',
//     image:
//       'https://images.unsplash.com/photo-1541675154757-0da8f1e3b77e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 4,
// name: 'Rajiv Mehta',
// designation: 'Meditation Mentor',
//     image:
//       'https://images.unsplash.com/photo-1542518504-e929de2c61a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
// ];

// function Instructors() {
//   return (
//     <div className="relative h-[40rem] overflow-hidden flex items-center justify-center bg-black">
//       <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
//         <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
//           Meet Our Meditation Instructors
//         </h2>
//         <p className="text-base md:text-lg text-white text-center mb-4">
//           Discover the spiritual guides who will lead you on your journey to inner peace and enlightenment.
//         </p>
//         <div className="flex flex-row items-center justify-center mb-10 w-full">
//           {instructors.map((instructor) => (
//             <div key={instructor.id} className="text-center mx-4">
//               <img
//                 src={instructor.image}
//                 alt={instructor.name}
//                 width={150}
//                 height={150}
//                 className="rounded-full"
//               />
//               <h3 className="text-lg text-white font-semibold mt-4">{instructor.name}</h3>
//               <p className="text-sm text-gray-400">{instructor.designation}</p>
//             </div>
//           ))}
//         </div>
//       </WavyBackground>
//     </div>
//   );
// }

// export default Instructors;

"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Aria Sharma",
    designation: "Mindfulness Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Kiran Patel",
    designation: "Yoga & Meditation Guru",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "Maya Ling",
    designation: "Spiritual Healer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Rajiv Mehta",
    designation: "Meditation Mentor",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function Instructors() {
  return (
    <div className="relative h-[50rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Meditation Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          {" "}
          Discover the spiritual guides who will lead you on your journey to
          inner peace and enlightenment.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;

// Use the 'use client' directive to enable client-side rendering for this component
// 'use client';

// import React from 'react';
// import { WavyBackground } from './ui/wavy-background';
// import { AnimatedTooltip } from './ui/animated-tooltip';
// import Image from 'next/image';

// // Meditation instructors data
// const instructors = [
//   {
//     id: 1,
//     name: 'Aria Sharma',
//     designation: 'Mindfulness Coach',
//     image:
//       'https://images.unsplash.com/photo-1584996369393-04f16fcd026f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 2,
//     name: 'Kiran Patel',
//     designation: 'Yoga & Meditation Guru',
//     image:
//       'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 3,
//     name: 'Maya Ling',
//     designation: 'Spiritual Healer',
//     image:
//       'https://images.unsplash.com/photo-1541675154757-0da8f1e3b77e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 4,
//     name: 'Rajiv Mehta',
//     designation: 'Meditation Mentor',
//     image:
//       'https://images.unsplash.com/photo-1542518504-e929de2c61a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
// ];

// function Instructors() {
//   return (
//     <div className="relative h-[40rem] overflow-hidden flex items-center justify-center bg-black">
//       <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
//         <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
//           Meet Our Meditation Instructors
//         </h2>
//         <p className="text-base md:text-lg text-white text-center mb-4">
//           Discover the spiritual guides who will lead you on your journey to inner peace and enlightenment.
//         </p>
//         <div className="flex flex-row items-center justify-center mb-10 w-full">
//           <AnimatedTooltip items={instructors} />
//         </div>
//       </WavyBackground>
//     </div>
//   );
// }

// export default Instructors;
