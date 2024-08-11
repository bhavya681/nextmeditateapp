"use client";

import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Unlocking Your Inner Potential",
    description:
      "Join us for a transformative webinar where you'll learn techniques to unlock your inner potential and achieve personal growth through guided meditation and introspection.",
    slug: "unlocking-your-inner-potential",
    isFeatured: true,
  },
  {
    title: "Journey Through Past Lives",
    description:
      "Experience a deep exploration of your past lives with our guided regression session. Discover hidden insights and heal unresolved issues from previous incarnations.",
    slug: "journey-through-past-lives",
    isFeatured: true,
  },
  {
    title: "The Art of Mindful Living",
    description:
      "Learn the art of living mindfully in this engaging webinar. Our experts will share practical tips and techniques to integrate mindfulness into your daily routine for a more balanced life.",
    slug: "the-art-of-mindful-living",
    isFeatured: false,
  },
  {
    title: "Healing Through Meditation",
    description:
      "This meditation session focuses on healing and rejuvenation. Experience profound relaxation and emotional release as you delve into guided practices designed to promote wellness.",
    slug: "healing-through-meditation",
    isFeatured: false,
  },
  {
    title: "Connecting with Your Higher Self",
    description:
      "A special webinar aimed at helping you connect with your higher self. Through advanced meditation techniques, you'll gain clarity and insight into your life's purpose and direction.",
    slug: "connecting-with-your-higher-self",
    isFeatured: true,
  },
  {
    title: "Awakening the Spirit Within",
    description:
      "Awaken your inner spirit with this powerful meditation session. Explore profound spiritual practices designed to enhance your sense of self-awareness and spiritual connection.",
    slug: "awakening-the-spirit-within",
    isFeatured: true,
  },
  {
    title: "Balancing Chakras for Inner Harmony",
    description:
      "Discover the secrets to balancing your chakras and achieving inner harmony. This session provides practical exercises and meditative practices to align and balance your energy centers.",
    slug: "balancing-chakras-for-inner-harmony",
    isFeatured: false,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl">
            Embark on Your Meditative Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars
              .filter(webinar => webinar.isFeatured)
              .map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`,
              }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-6 py-3 rounded-lg border border-teal-500 text-teal-500 bg-black hover:bg-teal-700 hover:text-white transition duration-300"
          >
            Explore All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
