import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-[#FFE8DB]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you! Reach out through our social networks:
        </p>


        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Facebook size={28} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <Instagram size={28} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-sky-500 transition"
          >
            <Twitter size={28} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <Linkedin size={28} />
          </a>

          <a
            href="mailto:support@example.com"
            className="text-gray-600 hover:text-red-500 transition"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="text-gray-600 text-sm">
          <p> Address: 123 Main Street, New York, USA</p>
          <p> Phone: +1 (555) 123-4567</p>
          <p> Email: support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

