// src/components/MobileNav.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // 1. Added missing import

// 2. Added the missing type definition
type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden" 
      onClick={handleLinkClick}
    >
      <motion.div
        // 3. Added the missing animation props
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-[1100]"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col space-y-6 text-lg text-gray-800 mt-8">
          <Link href="/about" onClick={handleLinkClick} className="hover:text-indigo-600">About</Link>
          <Link href="/blog" onClick={handleLinkClick} className="hover:text-indigo-600">Blog</Link>
          
          <div className="pl-4 border-l-2 border-gray-200">
            <p className="text-sm font-bold text-gray-500 uppercase mb-2">Products</p>
            <Link href="/ariah-desk" onClick={handleLinkClick} className="block mb-4 hover:text-indigo-600">Ariah Desk</Link>
            <Link href="/local-lead-bot" onClick={handleLinkClick} className="block hover:text-indigo-600">Local Lead Bot</Link>
          </div>
          
          <Link href="/contact" onClick={handleLinkClick} className="hover:text-indigo-600">Contact</Link>
        </nav>
      </motion.div>
    </div>
  );
};

export default MobileNav;