'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type MobileNavProps = {
  onClose: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen)

  return (
    <>
      {/* Dark semi-transparent backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={onClose}
      ></div>

      {/* Right-side slide-in menu */}
      <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-50 flex flex-col transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={onClose} aria-label="Close menu">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-6 py-4 text-gray-700">
          <Link href="/about" onClick={onClose} className="hover:text-indigo-600">
            About
          </Link>
          <Link href="/blog" onClick={onClose} className="hover:text-indigo-600">
            Blog
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={toggleProducts}
              className="w-full flex justify-between items-center py-2 hover:text-indigo-600 focus:outline-none"
            >
              <span>Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 transition-transform duration-200 ${
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

            {/* Collapsible Content */}
            <div
              className={`pl-4 flex flex-col overflow-hidden transition-all duration-300 ${
                isProductsOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <Link
                href="/ariah-desk"
                onClick={onClose}
                className="py-2 hover:text-indigo-600"
              >
                Ariah Desk
              </Link>
              <Link
                href="/local-lead-bot"
                onClick={onClose}
                className="py-2 hover:text-indigo-600"
              >
                Local Lead Bot
              </Link>
            </div>
          </div>

          <Link href="/contact" onClick={onClose} className="hover:text-indigo-600">
            Contact
          </Link>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
