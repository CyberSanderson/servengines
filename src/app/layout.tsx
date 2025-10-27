// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Make sure this import is here
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// THIS LINE WAS MISSING
const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Servengines | Websites & AI Chatbots for Local Businesses",
  description: "We build high-performance websites and AI-powered chatbots to help your local business thrive online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Ensure inter.className is used here */}
      <body className={inter.className}> 
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* ... Analytics and Pixel Scripts ... */}
        {/* NoScript fallback for Meta Pixel */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1107369801564115&ev=PageView&noscript=1"
            alt="" 
          />
        </noscript>
      </body>
    </html>
  );
}