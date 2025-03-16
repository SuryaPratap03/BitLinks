import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center p-10 ">
      <section className="w-full max-w-6xl bg-purple-50 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between p-8">
        
        {/* Left Half - Text & Buttons */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6">
          <h1 className="text-3xl font-bold text-red-500 leading-tight">
            The Best URL Shortener in the Market
          </h1>
          <p className="text-lg text-gray-700 mt-3">
            We provide the simplest and fastest URL shortener. No login required—just start shortening your links instantly.
          </p>

          {/* Buttons Below Text */}
          <div className="flex gap-4 mt-5">
            <Link href="/generate">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/vector.jpg"
            width={450}
            height={450}
            alt="An image for URL Shortener"
            className="rounded-lg shadow-md"
          />
        </div>

      </section>
    </main>
  );
}
