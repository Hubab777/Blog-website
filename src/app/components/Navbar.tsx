"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-700 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl uppercase font-bold text-black hover:scale-110 hover:text-green-900 hover:shadow-lg transition-all duration-300"
            >
              Blog <span className="text-white text-2xl uppercase font-bold">Web</span>
            
           
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-black transition font-semibold">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-black transition font-semibold">
              Blog
            </Link>
            <Link href="/about" className="hover:text-black transition font-semibold">
              About
            </Link>
            <Link href="/contact" className="hover:text-black transition font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-600">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 transition"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 transition"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
