import React from "react";
import { Lightbulb, Users, Rocket, Sprout } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-[#FFE8DB]">
      <div className="max-w-4xl text-center bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-indigo-900 great-vibes">GlowNest</span>
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          Welcome to <strong>GlowNest</strong> — a place where technology and creativity meet.  
          Our mission is to empower people with smart, beautiful, and innovative digital experiences.  
          We believe that great design can inspire action, and great code can make it possible.
        </p>

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
          alt="GlowNest Team"
          className="rounded-2xl shadow-md mb-8 w-full object-cover max-h-[350px]"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-8">
          At GlowNest, we strive to build tools that make people's lives brighter — 
          whether it’s through intuitive user interfaces, efficient performance, or creative design.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-3">
            <Rocket className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We constantly explore new ideas and technologies to stay ahead of trends.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-3">
            <Users className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We believe in teamwork and sharing ideas to create something truly exceptional.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-3">
            <Sprout className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">
                We grow together — learning, improving, and evolving with every challenge.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-3">
            <Lightbulb className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Creativity</h3>
              <p className="text-gray-600 text-sm">
                Every project at GlowNest starts with imagination and ends with impact.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} GlowNest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

