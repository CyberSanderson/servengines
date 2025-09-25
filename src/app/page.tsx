// src/app/page.tsx
'use client'; 

import { motion } from 'framer-motion';
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
  // This is the full animation object
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <main>
      <Hero />
      <motion.div {...sectionAnimation}><Services /></motion.div>
      <motion.div {...sectionAnimation}><VisualFeature /></motion.div>
      <motion.div {...sectionAnimation}><HowItWorks /></motion.div>
      
      <Products />

      <motion.div {...sectionAnimation}><Pricing /></motion.div>
      <motion.div {...sectionAnimation}><Founder /></motion.div>
      <motion.div {...sectionAnimation}><Testimonials /></motion.div>
      <motion.div {...sectionAnimation}><CTA /></motion.div>
    </main>
  );
}