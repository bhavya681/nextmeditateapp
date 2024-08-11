"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This product has completely transformed the way I work. It's intuitive and easy to use, making my workflow seamless.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote:
      "I've never been more satisfied with a purchase. The customer support is outstanding and the product exceeded my expectations.",
    name: "Jane Smith",
    title: "Project Manager",
  },
  {
    quote:
      "The features offered are unmatched in the industry. I've recommended it to all my colleagues and they love it too!",
    name: "Alice Johnson",
    title: "Product Designer",
  },
  {
    quote:
      "Incredible value for money. The attention to detail and the ease of use are truly impressive.",
    name: "Robert Brown",
    title: "Business Analyst",
  },
  {
    quote:
      "A game-changer in our field. The integration capabilities and functionality have boosted our productivity significantly.",
    name: "Emily Davis",
    title: "Chief Technology Officer",
  },
];

const TestimonailsCards = () => {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-[#060606] light:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-center mt-6 mb-8 z-10 bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600">Serenity Speaks: Echoes of Inner Peace</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              className="shadow-lg shadow-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonailsCards;

