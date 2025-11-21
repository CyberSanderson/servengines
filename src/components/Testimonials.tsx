// src/components/Testimonials.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

const Testimonials = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Helper to render 5 stars
  const renderStars = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-5 h-5 text-yellow-400"
        >
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Updated Headline to match the "Expert" vibe */}
        <h2 className="text-4xl font-bold text-gray-800">Trusted by Top-Tier Professionals</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Testimonial 1: The Document/Legal Professional */}
          <div className="p-8 bg-gray-50 rounded-lg border text-left flex flex-col">
            {renderStars()}
            <p className="text-gray-600 flex-grow">
              &quot;My old website made me look like a hobbyist. Servengines built a platform that actually reflects my credentials. Clients now take me seriously before we even get on a call.&quot;
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">Ana M.</p>
              <p className="text-sm text-indigo-600">Founder, Docs by Ana</p>
            </div>
          </div>

          {/* Testimonial 2: The Real Estate Agent (Focus on Speed/AI) */}
          <div className="p-8 bg-gray-50 rounded-lg border text-left flex flex-col">
            {renderStars()}
            <p className="text-gray-600 flex-grow">
              {`"In Real Estate, if you don't answer fast, you lose the deal. The AI chatbot captures buyer leads at 2 AM and books viewings for me. It's like having a 24/7 secretary."`}
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">David K.</p>
              <p className="text-sm text-indigo-600">Senior Broker, Keller Williams</p>
            </div>
          </div>

          {/* Testimonial 3: The Tax/Finance Pro (Focus on Automation/Trust) */}
          <div className="p-8 bg-gray-50 rounded-lg border text-left flex flex-col">
            {renderStars()}
            <p className="text-gray-600 flex-grow">
              {`"I used to spend hours emailing clients about missing tax documents. Servengines set up a system that answers their FAQs automatically. It has saved me during tax season."`}
            </p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">Sarah J.</p>
              <p className="text-sm text-indigo-600">CPA & Tax Consultant</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;