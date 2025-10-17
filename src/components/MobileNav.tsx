// src/components/MobileNav.tsx
'use client'

import React from 'react';
import Link from 'next/link';

type MobileNavProps = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: MobileNavProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={handleLinkClick}>
      <div 
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col space-y-6 text-lg text-gray-800">
          <Link href="/about" onClick={handleLinkClick} className="hover:text-indigo-600">About</Link>
          <Link href="/blog" onClick={handleLinkClick} className="hover:text-indigo-600">Blog</Link>
          <Link href="/ariah-desk" onClick={handleLinkClick} className="hover:text-indigo-600">Ariah Desk</Link>
          <Link href="/local-lead-bot" onClick={handleLinkClick} className="hover:text-indigo-600">Local Lead Bot</Link>
          <Link href="/contact" onClick={handleLinkClick} className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;