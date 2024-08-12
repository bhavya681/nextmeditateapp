import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center bg-black justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="lightblue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4l md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-200 to-green-600">
          Discover Inner Peace
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Immerse yourself in our meditation courses designed to guide you on a journey toward mindfulness and tranquility. Whether you&apos;re new to meditation or seeking to deepen your practice, join us to unlock your inner peace.
        </p>

        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-green-600 dark:bg-slate-900 text-white dark:text-white font-semibold border-green-400 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
