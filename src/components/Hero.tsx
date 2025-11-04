// src/components/Hero.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center px-6 py-24 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-3xl"
        >
          Build a Website That Reflects Your Expertise—and Books More Clients.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
        >
          You sell knowledge, trust, and results. We craft credibility-driven websites and AI-powered systems
          that position you as the obvious choice—backed by Harvard/IBM-certified expertise.
        </motion.p>

        {/* --- UPDATED CTA (SINGLE BUTTON) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="/audit"
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg"
          >
            Get Your Free Credibility Audit
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-sm text-gray-500"
        >
          Harvard-certified developer • IBM AI credentials • Deployed on Vercel • Conversion-focused design
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;