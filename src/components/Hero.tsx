// src/components/Hero.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center">
        
        {/* Headline - Uses Gold for the Niche */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 max-w-5xl"
        >
          Websites + AI Systems for <span className="text-gold-500">Document Preparers, Coaches & Agents</span>
          <br className="hidden md:block" /> 
          That Book Clients Automatically.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
        >
          Stop losing leads to a generic website. We craft high-performance platforms 
          that capture attention and turn visitors into booked appointments—backed by Harvard & IBM-certified expertise.
        </motion.p>

        {/* Tags with Gold styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest"
        >
          <span>Ideal for:</span>
          <span className="text-gray-900 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Document Preparers</span>
          <span className="text-gray-900 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Coaches</span>
          <span className="text-gray-900 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">Real Estate Agents</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Button uses the new Navy via 'bg-indigo-600' */}
          <Link 
            href="/audit"
            className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-full hover:bg-indigo-700 transition duration-300 text-xl shadow-xl hover:shadow-indigo-200"
          >
            Get Your Free Lead-Ready Site Audit
          </Link>
          <span className="mt-4 text-sm font-medium text-gray-500 flex items-center gap-2">
             <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             Includes Instant Recommendations • 100% Free
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-sm text-gray-400 border-t border-gray-100 pt-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center"
        >
          <span className="mx-4">Harvard-certified developer</span> 
          <span className="hidden md:inline text-gray-300">|</span> 
          <span className="mx-4">IBM AI credentials</span> 
          <span className="hidden md:inline text-gray-300">|</span> 
          {/* Gold Guarantee */}
          <span className="mx-4 font-semibold text-gold-500">30-Day Satisfaction Promise</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;