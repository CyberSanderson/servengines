// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300">
              Servengines
            </Link>
            <p className="text-gray-400 text-sm mt-1">
              Digital Growth Engines for Service Professionals.
            </p>
            
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-right">
            <h3 className="text-lg font-semibold text-white">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/audit" className="text-gray-400 hover:text-white transition-colors">Get Your Free Audit</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Servengines. All Rights Reserved. | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;