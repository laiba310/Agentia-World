"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Field fill hone par error hata do
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" }; // 'const' use kar diya

    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      alert("Form submitted successfully!");
      // Backend ya email handling code yahan add karo
    }
  };

  return (
    <>
 
      <div className="py-10">
        <h1
          className="text-2xl md:text-7xl font-extrabold text-center px-9 relative 
          bg-gradient-to-r from-white via-purple-400 to-purple-600 
          text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(192,132,252,0.6)]
          opacity-0 animate-fadeIn"
        >
          Get In Touch
        </h1>
        <p className="text-center p-2 text-white">
          Have questions or need assistance? Get in touch with us, and we’ll respond as soon as possible!
        </p>
      </div>

      <div className="flex items-start justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 rounded-2xl shadow-xl border border-gray-700">
          <h2 className="text-white text-2xl font-bold text-center mb-4">Contact Us</h2>

          <label className="text-white font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={`w-full bg-gray-800 text-white p-3 rounded-md border ${
              errors.name ? "border-red-500 animate-shake" : "border-gray-700"
            } mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <label className="text-white font-semibold mt-3 block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={`w-full bg-gray-800 text-white p-3 rounded-md border ${
              errors.email ? "border-red-500 animate-shake" : "border-gray-700"
            } mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <label className="text-white font-semibold mt-3 block">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            className={`w-full bg-gray-800 text-white p-3 rounded-md border ${
              errors.message ? "border-red-500 animate-shake" : "border-gray-700"
            } mt-1 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
 
    </>
  );
}
