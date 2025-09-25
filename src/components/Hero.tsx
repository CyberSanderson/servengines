// src/components/Hero.tsx
'use client' // Needed for Framer Motion animations

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  // For now, we'll hardcode the link. We can add more complex logic later.
  const getStartedLink = '/contact';

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          // IMPORTANT: You'll need to find a new background image for Servengines
          src="/empire.png" 
          alt="Digital services for businesses"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Build Your Digital Presence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          We create stunning websites and intelligent AI chatbots that help local businesses grow and thrive online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href={getStartedLink} className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors transform hover:scale-105">
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;