// src/components/Pricing.tsx
'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const Pricing = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <motion.section
      id="pricing"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Service Packages</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Choose the perfect solution to launch and grow your business online.</p>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Package 1: Starter Site */}
          <div className="p-8 bg-white rounded-lg border shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">Starter Site</h3>
            <p className="mt-2 text-gray-500">Perfect for a professional launch.</p>
            <p className="mt-6 text-4xl font-bold">Starting at $2,000</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-center"><CheckmarkIcon /><span>Up to 5 Pages</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Premium Template Design</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Mobile Responsive</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Contact Form Integration</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Basic SEO Setup</span></li>
            </ul>
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 text-center">Get Started</Link>
          </div>

          {/* Package 2: Business Growth Site (Most Popular) */}
          <div className="p-8 bg-white rounded-lg border-2 border-indigo-600 shadow-xl flex flex-col relative">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"><span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Best Value</span></div>
            <h3 className="text-2xl font-semibold text-gray-800">Business Growth Site</h3>
            <p className="mt-2 text-indigo-600 font-semibold">Our most popular solution.</p>
            <p className="mt-6 text-4xl font-bold">Starting at $5,000</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-center font-semibold"><CheckmarkIcon /><span>Everything in Starter, plus:</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Fully Custom Design</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>CMS Integration (Blog, etc.)</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Advanced SEO & Analytics</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Priority Support</span></li>
            </ul>
            {/* THIS LINE IS NOW FIXED */}
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-center">Request a Quote</Link>
          </div>

          {/* Package 3: AI Chatbot Setup */}
          <div className="p-8 bg-white rounded-lg border shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800">AI Chatbot</h3>
            <p className="mt-2 text-gray-500">Automate your customer service.</p>
            <p className="mt-6 text-4xl font-bold">Starting at $1,500</p>
            <ul className="mt-6 space-y-3 text-left flex-grow">
              <li className="flex items-center"><CheckmarkIcon /><span>24/7 Lead Capture</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Appointment Booking</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Custom FAQ Training</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Website & Social Integration</span></li>
              <li className="flex items-center"><CheckmarkIcon /><span>Monthly Maintenance Plan Available</span></li>
            </ul>
            <Link href="/contact" className="mt-8 block w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 text-center">Learn More</Link>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;