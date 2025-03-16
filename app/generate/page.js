"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: `${url}`,
      shortUrl: `${shortUrl}`,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
          setUrl("");
          setShortUrl("");
          console.log(result);
          alert(result.message);
        } else {
          alert(result.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Generate Your Short URL
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="original"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="shortened"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            placeholder="Enter your preferred short URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Generate Button */}
          <button
            onClick={generate}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Generate
          </button>
        </div>

        {/* Styled Short URL Box */}
        {generated?.length > 0 && (
          <div className="mt-6 bg-white shadow-lg rounded-lg p-4 border border-gray-300 text-center">
            <p className="text-gray-700 font-semibold">Your Short URL:</p>
            <Link
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-purple-600 font-bold text-lg mt-1 hover:underline"
            >
              {generated}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
