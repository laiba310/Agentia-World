import { Wrench, Bot, Coins, BarChart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Features = () => {
  return (
    <>
      <div className="py-10 px-4 md:px-10">
        <h1 className="text-2xl md:text-5xl font-extrabold text-center 
          bg-gradient-to-r from-white via-purple-400 to-purple-600 
          text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]">
          Explore Features
        </h1>
        <p className="text-center text-white mt-2">
          Explore our features designed for a seamless experience and powerful functionality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 text-white">
          <AnimatedSection>
            <div className="p-6 border border-purple-800 rounded-lg  transition duration-300 
              hover:border-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
              <Wrench className="text-purple-400 w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold">Process Optimization</h3>
              <p>Enhance workflows and maximize productivity with AI-driven automation.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-6 border border-purple-800 rounded-lg  transition duration-300 
              hover:border-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
              <Bot className="text-purple-400 w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold">AI Assistance 24/7</h3>
              <p>Uninterrupted support with intelligent AI-powered virtual agents.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-6 border border-purple-800 rounded-lg  transition duration-300 
              hover:border-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
              <Coins className="text-purple-400 w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold">Operational Efficiency</h3>
              <p>Minimize costs and improve output with data-driven AI solutions.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-6 border border-purple-800 rounded-lg transition duration-300 
              hover:border-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
              <BarChart className="text-purple-400 w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold">Smarter Insights</h3>
              <p>Make informed business decisions with advanced AI analytics.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default Features;
