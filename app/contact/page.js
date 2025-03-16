"use client";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Contact Us</h1>

        <p className="text-gray-700 mb-4">
          If you have any questions, feedback, or suggestions, feel free to
          reach out. We&apos;d love to hear from you!
        </p>

        {/* Contact Details */}
        <div className="bg-gray-200 p-4 rounded-lg text-left shadow-md">
          <h2 className="text-purple-700 font-semibold mb-2">Get in Touch</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:sp7763360@gmail.com"
                className="text-purple-600 font-semibold hover:underline"
              >
                sp7763360@gmail.com
              </a>
            </li>
            <li>
              🐦 Twitter:{" "}
              <a
                href="https://x.com/SuryaPratap300"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline"
              >
                @SuryaPratap300
              </a>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <div className="mt-6">
          <Link
            href="/"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
