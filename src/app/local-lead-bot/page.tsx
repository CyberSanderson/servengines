// src/app/local-lead-bot/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

export default function LocalLeadBotPage() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Corrected line
    },
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center text-white p-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
            alt="Professional plumber organizing tools in a work van"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Stop Missing Service Calls.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Local Lead Bot is your 24/7 dispatcher, capturing and qualifying leads from your website so you never lose a job to voicemail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://www.localleadbot.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Visit LocalLeadBot.pro &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Can&apos;t Answer the Phone on a Job?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            You&apos;re busy providing expert service. Potential customers who get your voicemail are already calling your competition.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Lost Leads</h3>
              <p className="mt-2 text-gray-500">Every missed call is a potential high-value job that goes to another contractor.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Interrupted Work</h3>
              <p className="mt-2 text-gray-500">Stopping your work to answer calls from potential tire-kickers costs you time and money.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">No Time for Quotes</h3>
              <p className="mt-2 text-gray-500">Evenings are spent returning calls and writing quotes instead of relaxing.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* 3. Features Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Your Automated Front Office</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-indigo-600">01. Capture</h3>
              <p className="mt-2 text-gray-500">The bot engages website visitors instantly, gathering their name, number, and job details.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-indigo-600">02. Qualify</h3>
              <p className="mt-2 text-gray-500">It asks key questions about the service needed and the customer&apos;s location to see if they&apos;re a good fit.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-indigo-600">03. Convert</h3>
              <p className="mt-2 text-gray-500">For qualified leads, the bot can book a service call directly into your calendar or send you an alert to follow up.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Final CTA */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-800 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Start Capturing Every Lead</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Turn your website into your best lead generation tool. Get started with Local Lead Bot today.</p>
          <Link href="/contact" className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </motion.section>
    </div>
  )
}