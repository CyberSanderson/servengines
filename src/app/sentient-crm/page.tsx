// src/app/products/sentient-crm/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SentientCRMPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Product Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-slate-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl"
        >
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium border border-indigo-500/30">
            Live Demo
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold mb-6">
            The Agent Accelerator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            See how our AI qualifies leads and books viewings in real-time.
            <br /> Interact with the live demo below.
          </p>
        </motion.div>
      </section>

      {/* 2. The "Interactive Window" (The iframe) */}
      <section className="relative -mt-16 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Laptop Frame Styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gray-800 rounded-t-2xl p-2 md:p-4 shadow-2xl border border-gray-700"
          >
            {/* Browser Header (Fake UI) */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-md w-full max-w-md">
                sentient-crm.ai/dashboard
              </div>
            </div>

            {/* The Embed - This keeps them on your site */}
            <div className="bg-white rounded-lg overflow-hidden h-[600px] w-full relative">
              <iframe 
                src="https://sentient-crm.vercel.app/"
                className="w-full h-full border-0"
                title="Sentient CRM Live Demo"
                loading="lazy"
              />
              
              {/* Mobile Warning (Optional: If the app is hard to use on mobile iframe) */}
              <div className="md:hidden absolute inset-0 bg-black/80 flex items-center justify-center text-center p-6 z-10">
                <div>
                  <p className="text-white mb-4">For the best experience, view this demo on a desktop or open in full screen.</p>
                  <a 
                    href="https://sentient-crm.vercel.app/" 
                    target="_blank"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
                  >
                    Open Full Screen
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Call to Action below the demo */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to install this for your brokerage?</h3>
            <div className="flex justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get This System
              </Link>
              <a 
                href="https://sentient-crm.vercel.app/" 
                target="_blank"
                className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
              >
                Open in New Tab
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}