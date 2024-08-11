"use client"

import React from "react";

const OmMeditationPage = () => {
  // Array of symbols to animate
  const symbols = ["ॐ", "🐚", "🔱", "🚩", "🛕", "🐚", "🪘", "ॐ", "🕉", "ૐ", "🛞","ॐ", "🐚", "🔱", "🚩", "🛕", "🐚", "🪘", "ॐ", "🕉", "ૐ", "🛞","ॐ", "🐚", "🔱", "🚩", "🛕", "🐚", "🪘", "ॐ", "🕉", "ૐ", "🛞"];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://cdn.gencraft.com/prod/user/ce35418c-d99f-48f9-8cbb-2984920faeb5/33c439a9-afa4-4642-ba52-10a7140f78f7/image/image1_0.jpg?Expires=1723485460&Signature=gGqWm19aFSf5z-8UfnxduoLIDkJqhVdB2fFwLIMEDDNOZRdMcMKQiGeCtPhHWr9DIs3DFjxKbs9sS7bL2zJY~gVXBa70KhVqU9a~UKVubXAjbnyxmyhlU9UxrtiZCuJJJfg9FavNHIf4Np03MJ-ZqjpzOIdjn-oKbSexqzAl2hG0CvwLOL9DzjhwQpxPhJTeIp8PhYJ25UnCyfWNhFdFA3U0J1Qku2DJwInuHCoHqdwGNwmaBsWZYn7jCM1AG0Hml2gnxUmmj2DIkxmO45TNKrwTmWRHSL39paffsWWopI18NzGjlOMXH4PNhpbIzBUiIwdfuPicUk2b9AH1WDVWwA__&Key-Pair-Id=K3RDDB1TZ8BHT8')", // Background image URL
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative">
          {/* Glowing light ball */}       
          <div className="w-48 h-48 md:w-64 md:h-64 bg-pink-900 rounded-full blur-3xl shadow-2xl animate-pulse opacity-80"></div>
          {/* Om symbol in the center */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-red-300">卐</h1>
          </div>
        </div>
      </div>
      {/* Animated symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="absolute text-3xl md:text-4xl text-orange-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
            }}
          >
            {symbols[index % symbols.length]}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OmMeditationPage;
