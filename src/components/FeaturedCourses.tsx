"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "../data/music_courses.json"; // Update the path to match your meditation course data file
import Link from "next/link";

// Typescript type definition for Course
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-16 bg-gradient-to-r bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">
            Featured Meditation Courses
          </h2>
          <p className="mt-2 text-4xl leading-9 font-bold tracking-tightsm:text-5xlfont-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600">
            Elevate Your Mind and Spirit
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 mx-auto">
            Explore our handpicked meditation courses designed to enhance your well-being and mindfulness.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {featuredCourses.map((course: Course) => (
              <div
                key={course.id}
                className="flex justify-center transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <BackgroundGradient className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm shadow-xl">
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    <p className="text-2xl font-semibold text-gray-900 mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-md text-neutral-700 dark:text-neutral-400 flex-grow mb-4">
                      {course.description}
                    </p>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
                    >
                      Explore Course
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 text-center">
          <Link
            href={"/courses"}
            className="px-8 py-3 rounded-full bg-white  text-black font-bold hover:bg-gray-100 transition duration-200 shadow-lg"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
