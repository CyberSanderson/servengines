'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
            Empowering Local Businesses Through Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
          >
            {`Servengines was founded on the belief that every local business deserves a powerful digital presence. We build the tools you need to compete, grow, and succeed in the modern marketplace.`}
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
                src="/sande-headshot.png"
                alt="Sande, Founder of Servengines"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
              />
            </motion.div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                {`My name is Sande, and I'm the founder of Servengines. I started this agency after seeing countless local business owners—masters of their craft—struggle to keep up with the fast-paced digital world. They had incredible services but were held back by outdated websites or no online presence at all.`}
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {`With a background in full-stack development, I knew I could bridge that gap. I wanted to build more than just websites; I wanted to build growth engines. That means creating professional, high-performance sites that convert visitors and integrating smart AI tools that automate tasks and capture leads 24/7.`}
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {`Our mission is to handle your digital heavy lifting, so you can get back to doing what you love.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="bg-gray-800 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">{`Let's Build Something Great Together`}</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            {`Ready to take your business to the next level? We're here to help. Get in touch for a free, no-obligation consultation.`}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
