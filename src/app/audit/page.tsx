// src/app/audit/page.tsx
'use client'; 

import React, { useState } from 'react';
import { sendEmail } from '@/app/actions'; 
import { motion } from 'framer-motion';

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    businessType: '', // NEW: Filter 1
    goal: '',         // NEW: Filter 2
    budget: ''        // NEW: Filter 3 (The most important one)
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [responseMessage, setResponseMessage] = useState('');

  // Handle both Inputs and Selects
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setResponseMessage('');

    // FORMAT THE EMAIL PAYLOAD
    // This ensures you see the budget right in your inbox
    const emailData = {
      name: formData.name,
      email: formData.email,
      message: `
        NEW AUDIT REQUEST
        ------------------
        Name: ${formData.name}
        URL: ${formData.websiteUrl}
        Business Type: ${formData.businessType}
        Primary Goal: ${formData.goal}
        ESTIMATED BUDGET: ${formData.budget}
        ------------------
      `,
    };

    const result = await sendEmail(emailData); 

    if (result?.error) {
      setResponseMessage(`Error: ${result.error}. Please try again.`);
    } else {
      setResponseMessage("Success! Request received. If you're a fit, look out for your video audit in 48 hours.");
      // Optional: Clear form
      setFormData({ name: '', email: '', websiteUrl: '', businessType: '', goal: '', budget: '' }); 
    }
    
    setIsSubmitting(false); 
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        
        {/* Header */}
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Get Your Free <span className="text-indigo-600">Lead-Ready</span> Audit
          </motion.h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We limit these to 5 per week to ensure quality. Please answer honestly so we can recommend the right strategy for your stage of business.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-12 bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-900">Full Name</label>
                <div className="mt-2"> 
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">Work Email</label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-bold leading-6 text-gray-900">Current Website URL</label>
              <div className="mt-2">
                <input
                  type="url"
                  name="websiteUrl"
                  id="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://www.yourbusiness.com"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* --- NEW FILTER FIELDS --- */}

            <div>
              <label htmlFor="businessType" className="block text-sm font-bold leading-6 text-gray-900">Which best describes you?</label>
              <div className="mt-2">
                <select
                  name="businessType"
                  id="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select an option...</option>
                  <option value="Document Prep/Notary">Document Preparer / Notary</option>
                  <option value="Coach/Consultant">Coach / Consultant</option>
                  <option value="Real Estate">Real Estate Agent / Broker</option>
                  <option value="Other Service">Other Professional Service</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-bold leading-6 text-gray-900">What is your #1 Goal?</label>
              <div className="mt-2">
                <select
                  name="goal"
                  id="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select an option...</option>
                  <option value="Get Leads">Get more qualified leads</option>
                  <option value="Automate">Automate bookings & follow-up</option>
                  <option value="Credibility">Look more professional (Trust)</option>
                  <option value="Fix Broken Site">Fix a broken/outdated site</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-bold leading-6 text-gray-900">Estimated Investment Range</label>
              <p className="text-xs text-gray-500 mb-2">Knowing this helps us recommend the right solution (Custom Build vs. Template vs. System).</p>
              <div className="mt-2">
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select a range...</option>
                  <option value="Under $1,500">Just starting (Under $1,500)</option>
                  <option value="$1,500 - $4,000">Growth Mode ($1,500 - $4,000)</option>
                  <option value="$4,000 - $10,000+">Scaling & Automation ($4,000 - $10,000+)</option>
                </select>
              </div>
            </div>

            {/* ------------------------- */}

            <div>
              <button
                type="submit"
                disabled={isSubmitting} 
                className="w-full rounded-full bg-indigo-600 px-4 py-4 text-center text-md font-bold text-white shadow-lg hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 transition transform active:scale-95"
              >
                {isSubmitting ? 'Submitting Request...' : 'Get My Free Lead-Ready Audit'}
              </button>
            </div>
            
            {responseMessage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 p-4 rounded-lg text-center text-sm font-medium ${responseMessage.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}
              >
                {responseMessage}
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}