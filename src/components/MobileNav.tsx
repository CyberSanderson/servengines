'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type MobileNavProps = {
  onClose: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(true) // Default to open on mobile so they see options immediately
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen)

  return (
    <>
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Right-side slide-in menu */}
      <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Menu</h2>
          <button onClick={onClose} aria-label="Close menu" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 py-6 space-y-6 overflow-y-auto">
          <Link href="/about" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">
            About
          </Link>
          
          {/* Products Section */}
          <div className="border-l-2 border-gray-100 pl-4 ml-1">
            <button
              onClick={toggleProducts}
              className="w-full flex justify-between items-center py-1 text-lg font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <span>Live Demos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 transition-transform duration-200 text-indigo-600 ${
                  isProductsOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {/* Collapsible Content */}
            <div
              className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                isProductsOpen ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
            >
              {/* Internal Link to Sentient CRM Page */}
              <Link
                href="/products/sentient-crm"
                onClick={onClose}
                className="py-3 text-gray-600 hover:text-indigo-600 flex flex-col"
              >
                <span className="font-semibold">Sentient CRM</span>
                <span className="text-xs text-gray-400">Real Estate AI Demo</span>
              </Link>

              {/* External Link to DocsByAna */}
              <a
                href="https://www.docsbyana.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="py-3 text-gray-600 hover:text-indigo-600 flex flex-col border-t border-gray-50"
              >
                <span className="font-semibold">Client Intake Pro</span>
                <span className="text-xs text-gray-400">Legal/Tax Demo (External)</span>
              </a>
            </div>
          </div>

          <Link href="/blog" onClick={onClose} className="text-lg font-medium text-gray-700 hover:text-indigo-600">
            Blog
          </Link>
        </nav>

        {/* Bottom CTA */}
        <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50">
            <Link 
                href="/contact" 
                onClick={onClose}
                className="block w-full bg-indigo-600 text-white text-center font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
            >
                Book Your Audit
            </Link>
            <p className="text-center text-xs text-gray-400 mt-4">
                Servengines © 2025
            </p>
        </div>
      </div>
    </>
  )
}

export default MobileNav
