// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link'; // Make sure Link is imported

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <Link href="/privacy-policy" className="mx-3 text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-of-service" className="mx-3 text-gray-400 hover:text-white">
            Terms of Service
          </Link>
        </div>
        <p>&copy; {currentYear} Servengines. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;