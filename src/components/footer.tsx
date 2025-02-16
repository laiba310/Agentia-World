import { Bird, Facebook, Github, Instagram } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
          
          {/* Left Section - Brand & Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Agentia World</h2>
            <p className="text-gray-400 mt-3 max-w-sm">
              Transforming ideas into AI-powered realities. Join us in shaping the future!
            </p>
          
          </div>
  
          {/* Middle Section - Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition">API</a></li>
            </ul>
          </div>
          {/* Right Section - Social Links */}
          <div>
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className=" hover:bg-gray-700 p-3 rounded-full transition duration-300">
              <Facebook  className="text-purple-400 w-8 h-8 mb-2" />
              </a>
              <a href="#" className=" hover:bg-gray-700 p-3 rounded-full transition duration-300">
              <Github className="text-purple-400 w-8 h-8 mb-2" />
              </a>
              <a href="#" className=" hover:bg-gray-700 p-3 rounded-full transition duration-300">
              <Instagram className="text-purple-400 w-8 h-8 mb-2" />
              </a>
              <a href="#" className=" hover:bg-gray-700 p-3 rounded-full transition duration-300">
              <Bird className="text-purple-400 w-8 h-8 mb-2" />
              </a>
            </div>
          </div>
        </div>
  
   
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Agentia World. All rights reserved.
        </div>
      </footer>
    );
  }
  