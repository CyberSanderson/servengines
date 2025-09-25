// src/app/ariah-desk/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

export default function AriahDeskPage() {
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
            src="/salon.png"
            alt="Elegant and modern salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Never Miss a Booking Again.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Our AI chatbot answers client questions and automatically books appointments from your social media and website, 24/7.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://www.ariahdesk.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
            >
              Visit AriahDesk.com &rarr;
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
          <h2 className="text-4xl font-bold text-gray-800">Tired of Late-Night DMs and Missed Calls?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            You&apos;re a master of your craft, not a full-time receptionist. Every moment spent juggling messages is a moment lost.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Lost Clients</h3>
              <p className="mt-2 text-gray-500">Appointments slip away due to slow or missed replies on social media.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Wasted Time</h3>
              <p className="mt-2 text-gray-500">Hours are spent each week on repetitive questions and scheduling.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 text-xl font-semibold text-gray-800">After-Hours Stress</h3>
              <p className="mt-2 text-gray-500">You can&apos;t switch off when booking requests come in at all hours.</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* 3. How It Works Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Ready in Minutes, Results in Hours</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-teal-500">01. Connect</h3>
              <p className="mt-2 text-gray-500">Link your social media accounts and website in just a few clicks.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-teal-500">02. Customize</h3>
              <p className="mt-2 text-gray-500">Tell the bot about your services, pricing, and business hours.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-2xl font-bold text-teal-500">03. Launch</h3>
              <p className="mt-2 text-gray-500">Activate your bot and let it start capturing leads and bookings automatically.</p>
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
          <h2 className="text-4xl font-bold">Ready to Fill Your Calendar?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Stop losing clients and start automating your bookings today. Learn more about Ariah Desk.</p>
          <Link href="/contact" className="mt-8 inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-colors">
            Request a Demo
          </Link>
        </div>
      </motion.section>
    </div>
  )
}