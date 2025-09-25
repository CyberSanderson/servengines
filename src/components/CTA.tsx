'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const CTA = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gray-800 text-white"
    >
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
