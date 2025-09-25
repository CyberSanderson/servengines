// src/app/page.tsx
'use client'; 

import { motion, Variants } from 'framer-motion';
// ... (all your component imports)
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VisualFeature from '@/components/VisualFeature';
import HowItWorks from '@/components/HowItWorks';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
import Founder from '@/components/Founder';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';


export default function Home() {
  // 1. Define the animation variants WITHOUT viewport
  const sectionVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  };

  // 2. Define the viewport settings separately
  const sectionViewport = {
    once: true, 
    amount: 0.2 
  };

  return (
    <main>
      <Hero />
      
      {/* 3. Apply both variants and viewport as separate props */}
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <Services />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <VisualFeature />
      </motion.div>

      {/* ... Repeat for all other motion.div wrappers ... */}
      
      <Products />

      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <Pricing />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <Founder />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <Testimonials />
      </motion.div>

      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={sectionViewport}
      >
        <CTA />
      </motion.div>
    </main>
  );
}