// src/app/audit/page.tsx
'use client'; 

import React, { useState } from 'react';
import { sendEmail } from '@/app/actions'; 
// We removed 'import { Metadata } from 'next';' from here, as it was unused.

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: `New Credibility Audit Request: ${formData.websiteUrl}`,
    };

    const result = await sendEmail(emailData); 

    if (result?.error) {
      setResponseMessage(`Error: ${result.error}. Please try again.`);
    } else {
      setResponseMessage("Success! We've received your request and will send your audit shortly.");
      setFormData({ name: '', email: '', websiteUrl: '' }); // Clear the form
    }
    
    setIsSubmitting(false); 
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get Your Free Credibility Audit
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Find out what&apos;s holding your website back. Enter your info below, and we&apos;ll personally review your site and send you a short, 5-minute video with 3 actionable tips.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... (your form inputs remain the same) ... */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
              <div className="mt-2.5"> 
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
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div className="mt-2.5">
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
            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-semibold leading-6 text-gray-900">Your Current Website URL</label>
              <div className="mt-2.5">
                <input
                  type="url"
                  name="websiteUrl"
                  id="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://www.mywebsite.com"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting} 
                className="w-full rounded-full bg-indigo-600 px-4 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 transition"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Audit'}
              </button>
            </div>
            {responseMessage && <p className="mt-4 text-center text-sm font-medium">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}