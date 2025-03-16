import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-600 text-white p-4">
      <div className="logo font-bold text-xl">
        <Link href="/">
        BitLinks
        </Link>
      </div>
      <ul className="flex items-center gap-6">
        <Link href="/"> <li className="hover:text-purple-300 cursor-pointer">Home</li></Link>
        <Link href="/about"> <li className="hover:text-purple-300 cursor-pointer">About</li></Link>
        <Link href="/generate"> <li className="hover:text-purple-300 cursor-pointer">Shorten</li></Link>
        <Link href="/contact"> <li className="hover:text-purple-300 cursor-pointer">Contact Us</li></Link>
        <li className='flex items-center gap-3'>
          <Link href="/generate">
            <button className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition duration-300">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-purple-500 hover:text-white transition duration-300">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
