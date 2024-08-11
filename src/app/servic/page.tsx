// app/service/page.tsx

import React from 'react';

const services = [
  {
    title: "Personalized Meditation Sessions",
    description: "Receive tailored meditation sessions designed to meet your specific needs and goals. Our experts will work with you one-on-one to create a personalized plan.",
    image: "https://media.istockphoto.com/id/1455601128/photo/woman-meditating-at-sunset-in-the-mountains.webp?b=1&s=170667a&w=0&k=20&c=zPOtRdkI9RZ6Ows-ZB_bZLIGqEKBA7e844ci5QsJs6s=",
  },
  {
    title: "Guided Stress Relief Programs",
    description: "Join our guided programs specifically designed to relieve stress and promote relaxation. These programs include various techniques to help you unwind and rejuvenate.",
    image: "https://replicate.delivery/yhqm/waQNX0qsdJqaNBPQLN4yGsYeUycs2cZ85BSq1o3WniOHzzoJA/out-0.webp",
  },
  {
    title: "Chakra Healing and Alignment",
    description: "Experience our chakra healing sessions aimed at balancing and aligning your energy centers. This service promotes overall well-being and spiritual growth.",
    image: "https://replicate.delivery/yhqm/ebf5e7yEziAHBJuLgFmvNSfItQu0UKaGFr9QE3wyxyNzYeMaC/out-0.webp",
  },
  {
    title: "Virtual Meditation Workshops",
    description: "Participate in our virtual workshops that cover various meditation techniques and practices. Ideal for those looking to enhance their skills from the comfort of their home.",
    image: "https://replicate.delivery/yhqm/z7vBzTNeAQ17baisfAtVBrgoGrbOWjQvax5cqGY6FCgNmnRTA/out-0.webp",
  },
  {
    title: "Mindfulness Coaching",
    description: "Engage in mindfulness coaching to develop a deeper awareness of your thoughts and emotions. Our coaches provide guidance to help you incorporate mindfulness into your daily life.",
    image: "https://media.istockphoto.com/id/1972173212/photo/back-of-woman-relaxingly-practicing-meditation-yoga-in-the-forest-to-attain-happiness-from.webp?b=1&s=170667a&w=0&k=20&c=1MdMAXeOOI2_TLr2rUCWSJXo1Qc-QiSnJEN7Qn2erMg=",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8  py-[10rem]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-lg mb-12 text-center leading-relaxed">
          Explore our wide range of services designed to support your meditation and mindfulness journey. From personalized sessions to virtual workshops, we offer various options to enhance your well-being.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-base mb-4">{service.description}</p>
                <a href={`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`} className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
