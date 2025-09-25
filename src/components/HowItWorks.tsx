// src/components/HowItWorks.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const HowItWorks = () => {
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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Simple 3-Step Process</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From concept to launch, we make the journey seamless.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Step 1 */}
          <div className="p-8 bg-gray-50 rounded-lg border">
            <h3 className="text-2xl font-bold text-indigo-600">01</h3>
            <h4 className="mt-2 text-xl font-semibold text-gray-800">Discovery & Strategy</h4>
            <p className="mt-2 text-gray-500">We start with a deep dive into your business goals to create a tailored strategy for your new website or chatbot.</p>
          </div>
          {/* Step 2 */}
          <div className="p-8 bg-gray-50 rounded-lg border">
            <h3 className="text-2xl font-bold text-indigo-600">02</h3>
            <h4 className="mt-2 text-xl font-semibold text-gray-800">Design & Development</h4>
            <p className="mt-2 text-gray-500">Our team designs and builds your project with clean code, modern design, and a focus on user experience.</p>
          </div>
          {/* Step 3 */}
          <div className="p-8 bg-gray-50 rounded-lg border">
            <h3 className="text-2xl font-bold text-indigo-600">03</h3>
            <h4 className="mt-2 text-xl font-semibold text-gray-800">Launch & Support</h4>
            <p className="mt-2 text-gray-500">We handle the deployment and provide ongoing support to ensure your digital tools continue to perform flawlessly.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;