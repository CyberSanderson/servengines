// src/components/Testimonials.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Testimonials = () => {
  const sectionVariants: Variants = { /* ... */ };

  return (
    <motion.section /* ... */ >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Trusted by Businesses Like Yours</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">&quot;The new website is a night-and-day difference. We&apos;re getting more online orders than ever, and customers are complimenting the new design.&quot;</p>
            <p className="mt-4 font-semibold text-gray-800">- Jane D., Owner of The Corner Bistro</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">&quot;I was skeptical about AI, but the chatbot has saved me at least 5 hours a week. It handles all the basic questions so I can focus on my clients.&quot;</p>
            <p className="mt-4 font-semibold text-gray-800">- Mike R., Owner of Precision Plumbing</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">&quot;Working with Servengines was a seamless experience. They listened to our needs and delivered a product that exceeded our expectations. Highly recommend.&quot;</p>
            <p className="mt-4 font-semibold text-gray-800">- Chloe T., Manager at City Style Salon</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;