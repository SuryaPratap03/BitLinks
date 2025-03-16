"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          About Our URL Shortener
        </h1>

        <p className="text-gray-700 mb-4">
          Our URL Shortener is a simple and efficient tool that allows you to
          convert long URLs into short, shareable links. Built with modern web
          technologies, it provides a seamless and fast experience.
        </p>

        {/* Key Features Section */}
        <div className="bg-gray-200 p-4 rounded-lg text-left shadow-md">
          <h2 className="text-purple-700 font-semibold mb-2">
            Why Use Our Shortener?
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>⚡ Fast and reliable link generation</li>
            <li>🔒 Secure and private</li>
            <li>📈 Trackable analytics (coming soon)</li>
            <li>🎨 Custom short URLs for branding</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-6">
          <Link
            href="/"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
