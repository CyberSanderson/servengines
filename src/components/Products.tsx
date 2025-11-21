// src/components/Products.tsx
'use client'

import React from 'react';
import Link from 'next/link'; // We can still use Link, or standard <a> tags for external
import { motion, Variants } from 'framer-motion';

const Products = () => {
  const sectionVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const sectionViewport = {
    once: true,
    amount: 0.2
  };

  return (
    <motion.div 
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={sectionViewport}
    >
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Specialized AI Systems</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t settle for generic bots. See the actual tools we build for professionals.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1: Sentient CRM (The Agent Accelerator) */}
            <div className="bg-gray-50 p-8 rounded-lg border text-left flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">Sentient CRM</h3>
              <p className="mt-1 text-indigo-600 font-medium">The Agent Accelerator</p>
              <p className="mt-4 text-gray-600 flex-grow">
                A powerful AI-driven dashboard that manages your leads and automates follow-ups. Perfect for Real Estate Agents and High-Ticket Sales.
              </p>
              {/* External Link to Vercel App */}
              <a 
                href="https://sentient-crm.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                View Live Platform &rarr;
              </a>
            </div>

            {/* Card 2: Docs By Ana (Client Intake Pro Example) */}
            <div className="bg-gray-50 p-8 rounded-lg border text-left flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">Client Intake Pro</h3>
              <p className="mt-1 text-indigo-600 font-medium">Live Example: Document Services</p>
              <p className="mt-4 text-gray-600 flex-grow">
                See how we helped a document preparation service automate their intake and build a professional brand that builds instant trust.
              </p>
              {/* External Link to Client Site */}
              <a 
                href="https://www.docsbyana.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                See Live Client Site &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Products;