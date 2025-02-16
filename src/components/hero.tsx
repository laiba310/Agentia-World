"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const description = "Transforming intelligence into limitless innovation.";
  const speed = 50; 
  const delay = 1500; 

  useEffect(() => {
    if (index < description.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + description[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText(""); // Reset text
        setIndex(0); // Restart index
      }, delay);
    }
  }, [index]); 

  return (
    <div className="relative bg-black text-center py-24 overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(circle,#222428_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 animate-pulse"></div>

     
      <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide z-10 relative">
        ⚡ Powered by Panaversity
      </p>

    
      <h1 className="text-2xl md:text-7xl font-extrabold mt-4 px-9 relative 
      bg-gradient-to-r from-white via-purple-400 to-purple-600 
      text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(192,132,252,0.7)]
      opacity-0 animate-fadeIn">
        Empower AI with Agentia World
      </h1>

      
      <p className="text-gray-400 text-lg mt-3 h-6 min-h-[1.5rem]">
        {text}
      </p>
    </div>
  );
};

export default Hero;
