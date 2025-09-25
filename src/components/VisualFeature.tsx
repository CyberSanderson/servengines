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
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Powerful Tools for Your Business</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We provide modern, intuitive solutions that make a real impact on your bottom line.
        </p>
        <div className="mt-12 max-w-lg mx-auto">
          {/* NOTE: You will need to replace this image with one that represents your services */}
          <Image
            src="/app-visual.png"
            alt="A visual demonstration of a modern website or chatbot interface"
            width={400}
            height={800}
            className="rounded-lg shadow-2xl border"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default VisualFeature;