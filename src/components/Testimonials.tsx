// src/components/Testimonials.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Testimonials = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Trusted by Businesses Like Yours</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">
              {`"The new website is a night-and-day difference. We're getting more online orders than ever, and customers are complimenting the new design."`}
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              - Jane D., Owner of The Corner Bistro
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">
              {`"I was skeptical about AI, but the chatbot has saved me at least 5 hours a week. It handles all the basic questions so I can focus on my clients."`}
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              - Mike R., Owner of Precision Plumbing
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg border text-left">
            <p className="text-gray-600">
              {`"Working with Servengines was a seamless experience. They listened to our needs and delivered a product that exceeded our expectations. Highly recommend."`}
            </p>
            <p className="mt-4 font-semibold text-gray-800">
              - Chloe T., Manager at City Style Salon
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
