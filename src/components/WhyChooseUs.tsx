"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const meditationProgramContent = [
  {
    title: "Beginner Meditation Practices",
    description:
      "This program introduces beginners to the art of meditation. Students will learn basic techniques such as mindfulness, breath awareness, and concentration exercises to develop a calm and focused mind.",
  },
  {
    title: "Intermediate Yoga & Meditation",
    description:
      "Ideal for those with basic meditation experience, this course explores deeper yoga practices and meditation techniques. Students will learn to balance their body and mind through postures, breath work, and guided meditations.",
  },
  {
    title: "Vocal Mantra Meditation",
    description:
      "A program for individuals interested in using vocal techniques for meditation. Students will learn various mantras, sound vibrations, and breathing techniques to enhance their meditative experience.",
  },
  {
    title: "Mindfulness for Beginners",
    description:
      "These lessons introduce mindfulness practices that enhance everyday awareness and presence. Students will explore techniques to reduce stress, improve focus, and develop a mindful approach to life.",
  },
  {
    title: "Advanced Meditation Techniques",
    description:
      "Designed for advanced practitioners, this masterclass covers complex meditation practices such as chakra meditation, visualization, and transcendental meditation, with personalized guidance from experienced instructors.",
  },
  {
    title: "Meditation Theory and Philosophy",
    description:
      "An in-depth course for those interested in the theory and philosophy behind meditation practices. Topics include the history of meditation, different schools of thought, and the science behind meditation's benefits.",
  },
  {
    title: "Meditation Retreat Workshop",
    description:
      "A transformative workshop where participants immerse themselves in meditation retreats. The program includes silent meditations, group discussions, and personal reflection time in a serene environment.",
  },
  {
    title: "Introduction to Mindful Living",
    description:
      "This course teaches students how to integrate mindfulness into daily life. Topics include mindful eating, walking, and communication, as well as techniques for cultivating gratitude and compassion.",
  },
  {
    title: "Children's Mindfulness Exploration",
    description:
      "A fun and engaging program for children to explore mindfulness through games, stories, and simple meditation practices. The focus is on developing emotional awareness and resilience.",
  },
  {
    title: "Understanding Spiritual Healing",
    description:
      "This course delves into various spiritual healing practices, including Reiki, energy healing, and chakra balancing. Students will learn how to apply these techniques for personal well-being and growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div>
        <StickyScroll content={meditationProgramContent} />
      </div>
    </>
  );
};

export default WhyChooseUs;
