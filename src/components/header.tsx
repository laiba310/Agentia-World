"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Bot } from 'lucide-react'; // Using a robot icon

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center md:px-10 py-5">
    
        <div className="flex items-center">
          <Bot size={40} className="text-purple-400 w-8 h-8 mb-2" />
          <h1 className="ml-3 text-xl md:text-2xl font-bold">Agentia World</h1>
        </div>

      
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/features" className="hover:text-gray-400">Features</Link>
          <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-5 space-y-4">
          <Link href="/" className="block hover:text-gray-400">Home</Link>
          <Link href="/features" className="block hover:text-gray-400">Features</Link>
          <Link href="/pricing" className="block hover:text-gray-400">Pricing</Link>
          <Link href="/contact" className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
