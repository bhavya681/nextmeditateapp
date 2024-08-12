import React from "react";
import Link from "next/link";
import Image from "next/image";

const shlokas = [
  {
    verse:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    translation:
      "Perform your duty with equanimity, abandoning attachment to success and failure. Such equanimity is called Yoga.",
    explanation:
      "In this verse, Lord Krishna advises Arjuna to perform his duties with a sense of balance, without attachment to the outcomes. This approach, known as equanimity, allows one to maintain peace of mind regardless of success or failure.",
  },
  {
    verse:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation:
      "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, nor be attached to inaction.",
    explanation:
      "Here, Krishna emphasizes the importance of focusing on one's actions and duties without being attached to the results. This mindset helps in maintaining focus and diligence without being swayed by the desire for outcomes.",
  },
  // Add more shlokas as needed
];

const images = [
  "https://shlokam.org/wp-content/uploads/2020/06/Thumb_Sankara2-uai-258x188.jpg",
  "https://shlokam.org/wp-content/uploads/2020/06/Thumb_BhagavadGita-1-uai-258x188.jpg",
  "https://shlokam.org/wp-content/uploads/2020/10/Thumb_Prakriyas-uai-258x188.jpg",
  "https://shlokam.org/wp-content/uploads/2020/10/Daily-Shlokas-uai-258x188.jpg",
];

const BhagavadGitaShlok = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center text-white p-8"
         style={{
           backgroundImage: "url('https://cdn.gencraft.com/prod/user/ce35418c-d99f-48f9-8cbb-2984920faeb5/fee25501-d61a-43a6-bae6-c731602c361e/image/image0_0.jpg?Expires=1723486129&Signature=ezGvUvZyFqeKuYrN2oIP6XrvgnCCGzDtr4IPOi1Tu7kctDcKvtu3ZL2BFtofF5QRlIVLXxshTXlH--eqpqhiMAix7YmZQUgl8fgiDhZfCL9CN9Pw0vKqaOxvEkYZD9S7OidPaXPJlSf4~1dwnwkRZu2yZnqhsQVKX3ziARhlbmwD7DiJaB02-i-VRtoy~3Z1gAVFiqBdUBppyCmKGvMB4HF9QF17m8rp-QZ0FMC3HbKiFx-KU4X8uosYkJGOJsoYRVtG3jSlwa0NG9Y4M8yYFWmo01h1zb1dHewpGrFe-qQ7NvfHZsPjMfA8BrMkg9ccRrrpYs11F2Ao~wInjCEulA__&Key-Pair-Id=K3RDDB1TZ8BHT8')"
         }}>
      <h1 className="text-4xl font-bold mb-6 text-black pt-[13rem]">Bhagavad Gita Shlokas</h1>
      
      <div className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg mb-10">
        <p className="text-xl font-medium mb-2">Mantras for Meditation</p>
        <ul className="list-disc list-inside">
          <li className="mb-2">Om Bhur Bhuvaḥ Swaḥ</li>
          <li className="mb-2">Tat Savitur Vareñyaṃ</li>
          <li className="mb-2">Bhargo Devasya Dhīmahi</li>
          <li className="mb-2">Dhiyo Yonaḥ Prachodayāt</li>
          <li className="mb-2">Om Shanti Shanti Shanti</li>
        </ul>
      </div>
      
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 rounded-lg shadow-lg overflow-hidden p-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Ancient illustration ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
              width={500} height={300}
              
            />
          ))}
        </div>
        <div className="space-y-8">
          {shlokas.map((shloka, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-md border-l-4 border-yellow-500"
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-500">
                श्लोक {index + 1}
              </h2>
              <p className="text-lg italic mb-4 whitespace-pre-wrap font-serif">
                {shloka.verse}
              </p>
              <p className="text-md mb-4">
                <strong className="text-yellow-400">Translation:</strong> {shloka.translation}
              </p>
              <p className="text-md">
                <strong className="text-yellow-400">Explanation:</strong> {shloka.explanation}
              </p>
            </div>
          ))}
          <div className="text-center mt-8">
            <Link
              href="/meditationOm"
              className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-600 transition duration-200"
            >
              Go to Om Meditation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGitaShlok;
