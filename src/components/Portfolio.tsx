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
          <h2 className="text-4xl font-bold text-gray-800">
             Built for <span className="text-indigo-600">ROI</span>, Not Just Looks.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A look at the business engines we&apos;ve built for our clients.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* --- PROJECT 1: REAL CLIENT (DOCS BY ANA) --- */}
            <div className="bg-white rounded-lg border shadow-lg overflow-hidden group flex flex-col">
              <div className="relative h-64 md:h-80">
                <div className="md:hidden">
                  <Image
                    src="/docsbyana-mobile.png" 
                    alt="Mobile screenshot of Docs By Ana website"
                    fill
                    className="object-cover object-top"
                  />
                </div>
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
                  A professional, high-performance website for a trusted service provider. Built to establish credibility and capture new client consultations.
                </p>
                
                {/* --- ADDED: THE DATA PROOF --- */}
                <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                  <p className="text-sm font-bold text-indigo-800 flex items-center gap-2">
                    📈 Result: 2.3x Increase in mobile conversion rates
                  </p>
                </div>
                {/* ----------------------------- */}

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

            {/* --- PROJECT 2: SENTIENT CRM (SaaS APP) --- */}
            <div className="bg-white rounded-lg border shadow-lg overflow-hidden group flex flex-col">
              <div className="relative h-64 md:h-80">
                <div className="md:hidden">
                  <Image 
                    src="/sentient-mobile.png" 
                    alt="Mobile screenshot of Sentient CRM app" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
                <div className="hidden md:block">
                  <Image 
                    src="/sentient-desktop.png" 
                    alt="Desktop screenshot of Sentient CRM app" 
                    fill 
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">Sentient CRM (Intelligent SaaS)</h3>
                <p className="mt-2 text-gray-600 flex-grow">
                  A full-stack, AI-driven Sales CRM designed to automate lead scoring, pipeline management, and personalized client follow-ups.
                </p>

                {/* --- ADDED: THE DATA PROOF --- */}
                <div className="mt-4 bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                  <p className="text-sm font-bold text-indigo-800 flex items-center gap-2">
                    ⚡ Result: Automates 15+ hours of follow-up per week
                  </p>
                </div>
                {/* ----------------------------- */}

                <a
                  href="https://sentient-crm.vercel.app/"
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