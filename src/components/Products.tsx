// src/components/Products.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Products = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <motion.div {...sectionAnimation}>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Specialized Products</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Targeted AI solutions, built for your industry.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Ariah Desk */}
            <div className="bg-gray-50 p-8 rounded-lg border text-left flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900">Ariah Desk</h3>
              <p className="mt-1 text-indigo-600 font-medium">For Salons & Spas</p>
              <p className="mt-4 text-gray-600 flex-grow">
                An AI assistant that automatically books appointments and answers client questions from your website and Instagram, 24/7.
              </p>
              <Link href="/ariah-desk" className="mt-6 inline-block text-indigo-600 font-semibold hover:text-indigo-800">
                Learn More &rarr;
              </Link>
            </div>

            {/* Card 2: Local Lead Bot */}
            <div className="bg-gray-50 p-8 rounded-lg border text-left flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900">Local Lead Bot</h3>
              <p className="mt-1 text-indigo-600 font-medium">For Plumbers & Contractors</p>
              <p className="mt-4 text-gray-600 flex-grow">
                Capture every lead, even after hours. Our chatbot qualifies potential customers and books service calls automatically.
              </p>
              <Link href="/local-lead-bot" className="mt-6 inline-block text-indigo-600 font-semibold hover:text-indigo-800">
                Learn More &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;