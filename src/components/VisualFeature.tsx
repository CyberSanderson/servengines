// src/components/VisualFeature.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const VisualFeature = () => {
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
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Business Engines for <span className="text-indigo-600">Serious Growth</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We don't just build "pretty" sites. We deploy automated lead-scoring and 
          CRM systems that manage your sales pipeline while you focus on your clients.
        </p>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative group">
            {/* PRO TIP: Replace "/sentient-desktop.png" with a clear 
              screenshot of your Sentient CRM dashboard. 
            */}
            <Image
              src="/sentient-desktop.png"
              alt="Sentient CRM Sales Pipeline Dashboard"
              width={800}
              height={500}
              className="rounded-2xl shadow-[0_20px_50px_rgba(79,70,229,0.15)] border border-gray-200 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            
            {/* Overlay Caption for extra context */}
            <div className="mt-6 flex justify-center gap-8 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Real-time Tracking
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div> AI Lead Scoring
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> Automated Follow-ups
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VisualFeature;