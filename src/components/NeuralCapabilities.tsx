"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Zap, BarChart3, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const NeuralCapabilities = () => {
  return (
    <div className="py-20">
      <h1
        className="text-2xl md:text-7xl font-extrabold text-center px-9 relative 
        bg-gradient-to-r from-white via-purple-400 to-purple-600 
        text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]
        opacity-0 animate-fadeIn"
      >
        Neural Capabilities
      </h1>
      <p className="text-center p-2 text-white">
        Fueled by cutting-edge artificial intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 py-9 gap-6 text-white">
        
        <AnimatedSection>
          <motion.div
            whileHover={{
              scale: 1.00,
              borderColor: "#a855f7",
              boxShadow: "0px 0px 8px #a855f7",
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="p-6 border border-purple-800 rounded-lg bg-gray-900"
          >
            <BrainCircuit className="text-purple-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Advanced AI Algorithms</h3>
            <p>
              Experience lightning-fast data processing with AI models that
              analyze, predict, and respond instantly.
            </p>
          </motion.div>
        </AnimatedSection>

       
        <AnimatedSection>
          <motion.div
            whileHover={{
              scale: 1.00,
              borderColor: "#a855f7",
              boxShadow: "0px 0px 8px #a855f7",
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="p-6 border border-purple-800 rounded-lg bg-gray-900"
          >
            <Zap className="text-purple-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Real-Time Processing</h3>
            <p>
              AI continuously evolves by learning from data patterns and user
              interactions, improving accuracy and efficiency over time.
            </p>
          </motion.div>
        </AnimatedSection>

       
        <AnimatedSection>
          <motion.div
            whileHover={{
              scale: 1.00,
              borderColor: "#a855f7",
              boxShadow: "0px 0px 8px #a855f7",
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="p-6 border border-purple-800 rounded-lg bg-gray-900"
          >
            <BarChart3 className="text-purple-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Adaptive Learning</h3>
            <p>
              AI continuously evolves by learning from data patterns and user
              interactions, improving accuracy and efficiency over time.
            </p>
          </motion.div>
        </AnimatedSection>

       
        <AnimatedSection>
          <motion.div
            whileHover={{
              scale: 1.00,
              borderColor: "#a855f7",
              boxShadow: "0px 0px 8px #a855f7",
            }}
            transition={{ type: "spring", stiffness: 150 }}
            className="p-6 border border-purple-800 rounded-lg bg-gray-900"
          >
            <ShieldCheck className="text-purple-400 w-8 h-8 mb-2" />
            <h3 className="text-xl font-semibold">Enhanced Security</h3>
            <p>
              AI-driven security protocols protect sensitive data, detect
              anomalies, and prevent cyber threats in real-time.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NeuralCapabilities;
