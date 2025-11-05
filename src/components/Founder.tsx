// src/components/Founder.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Founder = () => {
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
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-lg flex-shrink-0 overflow-hidden">
            {/* NOTE: You will need to replace this image with your own headshot */}
            <Image src="/CEO.png" alt="Founder of Servengines" width={256} height={256} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800">From a Builder to a Business Owner</h2>
            <p className="mt-4 text-lg text-gray-600">
              &quot;I started Servengines because I saw countless local businesses with incredible products and services struggling to compete online. My mission is to provide powerful, accessible digital tools, websites that convert and AI that assists to help you focus on what you do best.&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800">Sanderson, Founder of Servengines</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Founder;