// app/contact/page.tsx

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen  py-[10rem] bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Feel free to reach out to us with any questions or inquiries. We are here to assist you on your journey towards inner peace.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
