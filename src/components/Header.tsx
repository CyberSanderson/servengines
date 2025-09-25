// src/components/Header.tsx
'use client' // We need this for state management (useState)

import React, { useState } from 'react';
import Link from 'next/link';
import MobileNav from './MobileNav'; // Import the new component

const Header = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Servengines
          </Link>
          
          {/* Desktop Navigation: Hidden on small screens */}
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <Link href="/about" className="hover:text-indigo-600">About</Link>
            <Link href="/ariah-desk" className="hover:text-indigo-600">Ariah Desk</Link>
            <Link href="/local-lead-bot" className="hover:text-indigo-600">Local Lead Bot</Link>
            <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
          </nav>

          {/* Hamburger Menu Button: Visible only on small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Open navigation menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Conditionally render the MobileNav component */}
      {isMenuOpen && <MobileNav onClose={toggleMenu} />}
    </>
  );
};

export default Header;