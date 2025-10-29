'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/app/actions';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    const result = await sendEmail(formData);

    if (result?.error) {
      setResponseMessage(`❌ ${result.error}`);
    } else {
      setResponseMessage('✅ Success! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top_left,_#f5f3ff,_transparent_70%)]" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Let’s Build Something Beautiful
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Get in touch, we’ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-all"
                placeholder="Jane Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-all"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 disabled:bg-gray-400 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>

            {responseMessage && (
              <p
                className={`mt-4 text-center font-medium ${
                  responseMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {responseMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
