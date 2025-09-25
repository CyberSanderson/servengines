// src/components/CTA.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const CTA = () => {
  const sectionVariants: Variants = { /* ... */ };

  return (
    <motion.section /* ... */ >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Let&apos;s build a powerful digital presence that gets you results. Get in touch for a free, no-obligation quote.
        </p>
        <Link 
          href="/contact" 
          className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </motion.section>
  );
};

export default CTA;