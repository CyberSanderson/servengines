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
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icon.png"
              alt="Servengines Logo"
              width={180}
              height={40}
              priority
              className="w-auto h-8" // Ensures responsive sizing
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
            <Link href="/about" className="hover:text-indigo-600 transition-colors">
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleProducts}
                className="hover:text-indigo-600 flex items-center space-x-1 focus:outline-none transition-colors"
              >
                <span>Live Demos</span>
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
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                  {/* Product 1: Real Estate */}
                  <a
                    href="https://sentient-crm.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <p className="font-semibold text-sm">Sentient CRM</p>
                    <p className="text-xs text-gray-500">For Real Estate Agents</p>
                  </a>
                  
                  {/* Product 2: Professional Services */}
                  <a
                    href="https://www.docsbyana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border-t border-gray-50"
                  >
                    <p className="font-semibold text-sm">Client Intake Pro</p>
                    <p className="text-xs text-gray-500">For Tax & Legal Pros</p>
                  </a>
                </div>
              )}
            </div>

            {/* CTA Button instead of plain Contact link */}
            <Link 
              href="/contact" 
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Book Audit
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