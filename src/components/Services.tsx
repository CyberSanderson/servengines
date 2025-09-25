// src/components/Services.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Services = () => {
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
        <h2 className="text-4xl font-bold text-gray-800">Stop Leaving Money on the Table</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Your online presence should be your hardest-working employee. We build digital tools that capture every opportunity.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Modern Websites</h3>
            <p className="mt-2 text-gray-500">Impress visitors with a professional, fast, and mobile-friendly site that turns clicks into customers.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">24/7 AI Automation</h3>
            <p className="mt-2 text-gray-500">Our chatbots answer questions, capture leads, and book appointments automatically, even while you sleep.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Business Growth</h3>
            <p className="mt-2 text-gray-500">With a powerful website and automated systems, you can focus on what you do best: running your business.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;