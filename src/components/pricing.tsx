"use client"
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

const plans = [
  { id: 1, name: "Starter", price: "$499", month: "/month", features: ["2 AI Agent Instances", "Basic Neural Processing", "24/7 Support", "Weekly Analytics", "Basic Integration Support"] },
  { id: 2, name: "Professional", price: "$999", month: "/month", features: ["10 AI Agent Instances", "Advanced Neural Networks", "Priority Support", "Custom AI Training", "Enhanced Security Protocols", "Seamless API Integration"] },
  { id: 3, name: "Enterprise", price: "$Custom", month: "", features: ["Unlimited Agents", "Full Neural Suite", "Dedicated Support Team", "AI-Powered Automation", "Real-Time Analytics Dashboard", "24/7 Dedicated Account Manager"] },
];

export default function Pricing() {
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

  return (
    <div className="py-10 px-4 md:px-10">
      <h1 className="text-2xl md:text-5xl font-extrabold text-center 
        bg-gradient-to-r from-white via-purple-400 to-purple-600 
        text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]">
        Pricing
      </h1>
      <p className="text-center text-white mt-2">Fueled by cutting-edge artificial intelligence.</p>
      
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 rounded-lg w-full sm:w-96 md:w-80 lg:w-96 
              cursor-pointer transition-all duration-300 
              ${selectedPlanId === plan.id ? "border-2 border-purple-500 scale-105 shadow-lg shadow-purple-600" : "border border-gray-700"} 
              hover:border-purple-400 hover:scale-105 hover:shadow-md`}
            onClick={() => setSelectedPlanId(plan.id)}
          >
            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
            <div className="flex items-baseline">
              <p className="text-3xl font-semibold  text-white">{plan.price}</p>
              {plan.month && <p className="text-sm font-semibold  text-white ml-2">{plan.month}</p>}
            </div>
            <ul className="mt-4 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex  text-white items-center gap-x-3">
                  <CircleCheckBig className="text-purple-400  w-6 h-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
