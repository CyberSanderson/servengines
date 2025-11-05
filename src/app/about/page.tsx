// src/app/about/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// ✅ Removed unused CheckmarkIcon (wasn’t referenced anywhere)

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-gray-800"
          >
            We Build the Trust Your Expertise Deserves.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
          >
            You&apos;re an expert in your field. We&apos;re experts in building the digital tools that prove it to the world, build credibility, and get you clients.
          </motion.p>
        </div>
      </section>

      {/* 2. Founder Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <Image
                src="/CEO.png"
                alt="Sanderson, Founder of Servengines"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl font-bold text-gray-800">The Story Behind Servengines</h2>
              <p className="mt-4 text-lg text-gray-600">
                My name is Sanderson, and I&apos;m the founder of Servengines. I started this agency after seeing countless brilliant consultants, coaches, and service professionals struggle with outdated, &quot;brochure&quot; websites that did nothing to build trust.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                They were experts, but their online presence made them look like amateurs.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                As a Harvard-certified full-stack developer, I knew I could fix this. I founded Servengines not just to build websites, but to build credibility engines. We craft digital platforms that reflect the true quality of your expertise and automate your client acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer three levels of partnership to turn your expertise into a scalable digital business.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-xl font-semibold text-gray-800">Credibility Websites</h3>
              <p className="mt-2 text-gray-500">Professional, fast, and secure websites that build instant trust and guide visitors to book a consultation.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-xl font-semibold text-gray-800">AI Automation Systems</h3>
              <p className="mt-2 text-gray-500">We integrate AI chatbots and automated workflows to handle your FAQs, qualify leads, and schedule clients 24/7.</p>
            </div>
            <div className="p-8 bg-white rounded-lg border">
              <h3 className="text-xl font-semibold text-gray-800">Custom App Development</h3>
              <p className="mt-2 text-gray-500">We turn your unique process or expertise into a full-stack, scalable software application (like our AI Habit Coach).</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. Final CTA */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Ready to Build Your Digital HQ?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            It starts with a simple conversation. Let&apos;s find out what&apos;s holding your current website back.
          </p>
          <Link
            href="/audit"
            className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Get Your Free Credibility Audit
          </Link>
        </div>
      </section>
    </div>
  )
}
