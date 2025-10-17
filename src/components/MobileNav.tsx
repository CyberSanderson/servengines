'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type MobileNavProps = {
  onClose: () => void
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      onClick={handleLinkClick}
    >
      {/* --- Animated Sidebar --- */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg p-6 z-50 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col space-y-6 text-lg text-gray-800">
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="hover:text-indigo-600 transition-colors"
          >
            About
          </Link>

          <Link
            href="/blog"
            onClick={handleLinkClick}
            className="hover:text-indigo-600 transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/ariah-desk"
            onClick={handleLinkClick}
            className="hover:text-indigo-600 transition-colors"
          >
            Ariah Desk
          </Link>

          <Link
            href="/local-lead-bot"
            onClick={handleLinkClick}
            className="hover:text-indigo-600 transition-colors"
          >
            Local Lead Bot
          </Link>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </div>
  )
}

export default MobileNav
