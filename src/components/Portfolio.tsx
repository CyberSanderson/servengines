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
            A look at some of the solutions we&apos;ve built for our clients.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* --- PROJECT 1: REAL CLIENT (DOCS BY ANA) --- */}
            <div className="bg-white rounded-lg border shadow-lg overflow-hidden group flex flex-col">
              <div className="relative h-64 md:h-80">
                {/* Mobile Image */}
                <div className="md:hidden">
                  <Image
                    src="/docsbyana-mobile.png" 
                    alt="Mobile screenshot of Docs By Ana website"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden md:block">
                  <Image
                    src="/docsbyana-desktop.png" 
                    alt="Desktop screenshot of Docs By Ana website"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">Docs By Ana</h3>
                <p className="mt-2 text-gray-600 flex-grow">
                  A professional, high-performance website for a trusted service provider. Built to establish credibility, clearly explain services, and capture new client consultations.
                </p>
                <a
                  href="https://www.docsbyana.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  View Live Site &rarr;
                </a>
              </div>
            </div>

            {/* --- PROJECT 2: AI HABIT COACH (APP) --- */}
            <div className="bg-white rounded-lg border shadow-lg overflow-hidden group flex flex-col">
              <div className="relative h-64 md:h-80">
                {/* Mobile Image */}
                <div className="md:hidden">
                  <Image 
                    src="/coach-mobile.png" // <-- Your new screenshot
                    alt="Mobile screenshot of AI Habit Coach app" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
                {/* Desktop Image */}
                <div className="hidden md:block">
                  <Image 
                    src="/coach-desktop.png" // <-- Your new screenshot
                    alt="Desktop screenshot of AI Habit Coach app" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">AI Habit Coach (Full-Stack App)</h3>
                <p className="mt-2 text-gray-600 flex-grow">
                  A functional SaaS application built with Next.js, featuring secure user authentication, a database, and AI-powered progress tracking.
                </p>
                <a
                  href="https://ai-habit-coach.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  View Live App &rarr;
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