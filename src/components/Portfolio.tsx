// src/components/Portfolio.tsx
'use client'

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Portfolio = () => {
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
          <h2 className="text-4xl font-bold text-gray-800">Our Work</h2>
          <p className="mt-4 text-lg text-gray-600">
            {/* THIS IS THE CORRECTED LINE */}
            A look at some of the solutions we&apos;ve built for our clients.
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/lux-beauty-portfolio.png"
                  alt="Screenshot of the Lux Beauty salon website"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-900">Lux Beauty Salon</h3>
                <p className="mt-2 text-gray-600">
                  A custom-designed concept for a high-end beauty salon, demonstrating a seamless user experience for service booking and e-commerce. This project showcases our expertise in creating beautiful, intuitive interfaces that cater to the luxury beauty market.
                </p>
                <a
                  href="https://lux-beauty-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  View Live Site &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;