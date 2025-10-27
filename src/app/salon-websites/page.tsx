// src/app/salon-websites/page.tsx
'use client' 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// THIS COMPONENT DEFINITION WAS INCOMPLETE
const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
    </svg>
);

export default function SalonWebsitesPage() {
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
        },
    };
    const sectionViewport = { once: true, amount: 0.2 };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center text-white p-8 overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=2070&auto=format&fit=crop"
            alt="Elegant salon interior background"
            fill
            className="object-cover"
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
            Your Salon Deserves a Website as Stunning as Your Work.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Stop losing clients to an outdated site or frustrating DMs. We build beautiful, high-performance websites that attract dream clients and make booking effortless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact" className="mt-8 inline-block px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <motion.section
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={sectionViewport}
        className="py-16 sm:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Is Your Website Working Against You?</h2>
          <p className="mt-4 text-lg text-gray-600">
            In the beauty industry, first impressions are everything. An old, slow, or confusing website tells potential clients that your services might be outdated too.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <div className="p-6 bg-white rounded-lg border shadow-sm">
                <h3 className="font-semibold text-gray-900">❌ Lost Bookings</h3>
                <p className="mt-2 text-sm text-gray-600">Confusing navigation or a hidden &quot;Book Now&quot; button means lost revenue.</p>
             </div>
             <div className="p-6 bg-white rounded-lg border shadow-sm">
                <h3 className="font-semibold text-gray-900">❌ Poor Mobile Experience</h3>
                <p className="mt-2 text-sm text-gray-600">Over 60% of clients browse on their phone. If it&apos;s clunky, they&apos;ll leave.</p>
             </div>
             <div className="p-6 bg-white rounded-lg border shadow-sm">
                <h3 className="font-semibold text-gray-900">❌ Wasted Time in DMs</h3>
                <p className="mt-2 text-sm text-gray-600">Answering availability questions manually instead of focusing on clients.</p>
             </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Solution Section */}
      <motion.section
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={sectionViewport}
        className="py-16 sm:py-24 bg-white"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Servengines Solution: Websites That Work</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We don&apos;t just build websites; we build growth engines specifically for salons and spas. Our sites are designed to attract high-value clients and make your life easier.
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start"><CheckmarkIcon /><span>**Stunning Custom Design:** Reflects the quality and style of your brand.</span></li>
                    <li className="flex items-start"><CheckmarkIcon /><span>**Blazing-Fast Performance:** Keeps visitors engaged and improves Google ranking.</span></li>
                    <li className="flex items-start"><CheckmarkIcon /><span>**Mobile-First Experience:** Flawless booking and browsing on any device.</span></li>
                    <li className="flex items-start"><CheckmarkIcon /><span>**Reliable Booking & E-commerce:** Integrated systems you can trust.</span></li>
                </ul>
             </div>
             <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                 <Image
                    src="/lux-desktop.png" // Use your desktop screenshot
                    alt="Desktop view of a modern salon website"
                    fill
                    className="object-cover object-top"
                 />
             </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Portfolio Showcase (Lux Beauty Demo) */}
      <motion.section
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={sectionViewport}
        className="py-16 sm:py-24 bg-gray-50 text-center"
      >
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">See It In Action</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our Lux Beauty demo site – a perfect example of the elegant design and seamless functionality we bring to salon websites.
            </p>
            <div className="mt-10 max-w-xl mx-auto">
                <div className="bg-white rounded-lg border shadow-lg overflow-hidden group">
                  <div className="relative h-64 md:h-80">
                    {/* Responsive Images */}
                    <div className="md:hidden">
                      <Image src="/lux-mobile.png" alt="Mobile screenshot Lux Beauty" fill className="object-cover object-top"/>
                    </div>
                    <div className="hidden md:block">
                      <Image src="/lux-desktop.png" alt="Desktop screenshot Lux Beauty" fill className="object-cover object-top"/>
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-gray-900">Lux Beauty Salon Demo</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Showcasing integrated booking, e-commerce, and our optional Ariah Desk AI assistant.
                    </p>
                    <a href="https://lux-beauty-mu.vercel.app/" target="_blank" rel="noopener noreferrer"
                       className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800">
                      View Live Demo &rarr;
                    </a>
                  </div>
                </div>
            </div>
         </div>
      </motion.section>

      {/* 5. The "Ariah Desk" Upsell Section */}
      <motion.section
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={sectionViewport}
        className="py-16 sm:py-24 bg-indigo-700 text-white"
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Want 24/7 Automated Bookings?</h2>
            <p className="mt-4 text-lg text-indigo-100">
                Take your efficiency to the next level with **Ariah Desk**, our specialized AI chatbot for salons. It integrates seamlessly with your new website to handle booking inquiries, answer FAQs, and capture leads while you sleep.
            </p>
            <Link href="/ariah-desk" className="mt-6 inline-block px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-700 transition-colors">
                Learn More About Ariah Desk
            </Link>
        </div>
      </motion.section>

      {/* 6. Final CTA */}
      <motion.section
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={sectionViewport}
        className="py-20 bg-gray-800 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for a Website That Elevates Your Brand?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let&apos;s build a stunning, high-performance website that attracts your dream clients and simplifies your business. Get your free, no-obligation quote today.
          </p>
          <Link 
            href="/contact" 
            className="mt-8 inline-block px-10 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </motion.section>

    </div>
  );
}