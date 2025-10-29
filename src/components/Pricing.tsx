// src/components/Pricing.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Pricing = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };
  const sectionViewport = { once: true, amount: 0.2 };

  const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <motion.section
      id="pricing"
      variants={sectionVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={sectionViewport}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Smart Packages for Your Business</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Choose the perfect solution to launch and grow your business online.</p>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Tier 1: Starter Site Package --- UPDATED CONTENT BELOW --- */}
          <div className="p-8 bg-white rounded-lg border shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">Starter Site: Your Essential Online Foundation</h3>
            <p className="mt-2 text-gray-500">Launch your professional web presence quickly and affordably. Perfect for getting found, looking credible, and capturing your first online leads.</p>
            <p className="mt-6 text-4xl font-bold">$997 - $1,497</p>
            <p className="text-sm text-gray-500">(one-time project)</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-start"><CheckmarkIcon /><span>Professional 5-Page Website (Home, About, Services, etc.)</span></li>
              <li className="flex items-start"><CheckmarkIcon /><span>Instant Lead Capture (Booking/Contact Form)</span></li>
              <li className="flex items-start"><CheckmarkIcon /><span>Flawless Mobile Experience</span></li>
              <li className="flex items-start"><CheckmarkIcon /><span>Local Google Visibility Setup (GMB)</span></li>
              <li className="flex items-start"><CheckmarkIcon /><span>Built by Experts, Not Templates</span></li>
            </ul>
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 text-center">Get Started</Link>
          </div>
          {/* --- END OF UPDATED TIER 1 --- */}

          {/* Tier 2: Business Pro Package (Best Value) */}
          <div className="p-8 bg-white rounded-lg border-2 border-indigo-600 shadow-xl flex flex-col relative">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"><span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span></div>
            <h3 className="text-2xl font-semibold text-gray-800">Business Pro Package</h3>
            <p className="mt-2 text-indigo-600 font-semibold">Your 24/7 marketing machine.</p>
            <p className="mt-6 text-4xl font-bold">$2,000 - $3,000</p>
            <p className="text-sm text-gray-500">(one-time project)</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-center font-semibold"><CheckmarkIcon /><span>Everything in Starter, plus:</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Fully Custom & Unique Design</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Blog/Gallery Integration (CMS)</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Advanced Analytics Setup</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Priority Support</span></li>
            </ul>
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-center">Request a Quote</Link>
          </div>

          {/* Tier 3: AI Automation Add-On */}
          <div className="p-8 bg-white rounded-lg border shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">AI Automation Add-On</h3>
            <p className="mt-2 text-gray-500">Automate your business 24/7.</p>
            <p className="mt-6 text-4xl font-bold">$49 - $199 / mo</p>
            <p className="text-sm text-gray-500">(+ $1,000 setup fee)</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-center"><CheckmarkIcon /><span>24/7 AI Booking Assistant</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Smart FAQ & Service Responses</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Google Sheets / Email Notifications</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Monthly Analytics & Lead Report</span></li>
            </ul>
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 text-center">Learn More</Link>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;