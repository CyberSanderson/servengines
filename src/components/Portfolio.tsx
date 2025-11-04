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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sectionViewport = {
    once: true,
    amount: 0.2,
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={sectionViewport}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Work</h2>
        <p className="mt-4 text-lg text-gray-600">
          A look at some of the credibility-driven projects we’ve built for professionals.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* --- PROJECT 1: Docs By Ana --- */}
          <div className="bg-white rounded-xl border shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/11] md:aspect-[16/9] overflow-hidden bg-gray-100">
              <Image
                src="/docsbyana-desktop.png"
                alt="Docs By Ana professional website design"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900">Docs By Ana</h3>
              <p className="mt-2 text-gray-600 flex-grow">
                A credibility-first website for a professional documentation expert.
                Designed to build trust, simplify service explanations, and increase client consultations.
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

          {/* --- PROJECT 2: AI Habit Coach --- */}
          <div className="bg-white rounded-xl border shadow-lg overflow-hidden flex flex-col">
            {/* ✅ This ratio displays tall mobile screenshots properly */}
            <div className="relative w-full aspect-[10/16] md:aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src="/coach-desktop.png"
                alt="AI Habit Coach app screenshot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-900">AI Habit Coach</h3>
              <p className="mt-2 text-gray-600 flex-grow">
                A full-stack AI-powered SaaS app with secure authentication, dynamic habit tracking, 
                and user dashboards—built with Next.js, Supabase, and OpenAI integration.
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
    </motion.section>
  );
};

export default Portfolio;

