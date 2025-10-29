'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// ✅ Reusable Checkmark Icon
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function SalonWebsitesPage() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const sectionViewport = { once: true, amount: 0.2 };

  return (
    <div className="bg-white text-gray-800">
      {/* 1. HERO / HOOK SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center text-white p-8 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1974&auto=format&fit=crop"
            alt="Hair stylist working on a woman's long hair in a modern salon"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Your Instagram is Stunning.
            <br />
            Is Your Website Losing You Clients?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Stop losing high-paying clients to an outdated, slow, or broken website. 
            Your brand&apos;s first impression deserves to be as professional as your craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="mt-8 inline-block px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Book a Free 15-Min Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE EMOTION (PAIN POINTS) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            In 2025, a Bad Website is a Client Repellent.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            You&apos;re an expert at your craft, but your website is making you look like an amateur.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 text-xl">You&apos;re Losing Trust</h3>
              <p className="mt-2 text-gray-600">
                A slow, clunky, or broken site makes clients question the quality of your services.
                It creates doubt, and doubt stops bookings.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 text-xl">You&apos;re Wasting Time</h3>
              <p className="mt-2 text-gray-600">
                Your DMs are a nightmare of &quot;What are your hours?&quot; and &quot;How much?&quot; 
                You&apos;re a stylist, not a 24/7 receptionist.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 text-xl">You&apos;re Leaking Money</h3>
              <p className="mt-2 text-gray-600">
                Every client who gets confused by your booking process or frustrated by your mobile
                site is a client that just booked with your competitor.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE SOLUTION (WITH gold.png IMAGE) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="py-16 sm:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE — TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Your Website Should Be Your Best Employee.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We don&apos;t just build websites. We build professional digital storefronts that
                reflect your quality and work for you 24/7.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start text-gray-700">
                  <CheckmarkIcon />
                  <span>
                    <strong>Attract Dream Clients</strong> with a stunning, premium design that reflects your work.
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckmarkIcon />
                  <span>
                    <strong>Make Booking Effortless</strong> by guiding visitors to a reliable, easy-to-use booking system.
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckmarkIcon />
                  <span>
                    <strong>Sell Products Online</strong> with a seamless, trustworthy e-commerce store that actually works.
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE — LOCAL IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
            >
              <Image
                src="/gold.png"
                alt="Salon website mockup showing design, booking, and online store features"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. CTA */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="py-20 bg-gray-800 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stop Losing Clients. Start Building Your Brand.
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A 15-minute chat is all it takes to get a clear plan for your business.
            No pressure. No tech-talk. Just solutions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Book My Free 15-Minute Consultation
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
