// src/components/Header.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen)

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icon.png"
              alt="Servengines Logo"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-gray-600 relative">
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>

            <Link href="/blog" className="hover:text-indigo-600">
              Blog
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProducts}
                className="hover:text-indigo-600 flex items-center space-x-1 focus:outline-none"
              >
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    href="/ariah-desk"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Ariah Desk
                  </Link>
                  <Link
                    href="/local-lead-bot"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Local Lead Bot
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Open navigation menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && <MobileNav onClose={toggleMenu} />}
    </>
  )
}

export default Header
