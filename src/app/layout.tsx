// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. The Title: This is what shows up in the Google Tab
  // We shifted from "Local Business" to "Service Professionals"
  title: "Websites & AI Automation for Service Professionals | Servengines",
  
  // 2. The Description: This is the gray text under the link on Google.
  // We explicitly name the niches (Real Estate, Tax, Coaches) to catch those searches.
  description: "Automate client intake and build authority. We create high-converting websites and AI chatbots for Real Estate Agents, Tax Professionals, and Coaches.",
  
  // 3. Keywords: These help Google understand your relevance.
  keywords: [
    "Web design for tax professionals",
    "Real estate AI chatbot",
    "Website builder for consultants",
    "Automated client onboarding",
    "AI receptionist for small business",
    "Servengines",
    "Document prep website design"
  ],

  // 4. Open Graph: This controls how your link looks when shared on Facebook/LinkedIn
  openGraph: {
    title: "Stop Chasing Leads. Let AI Book Them.",
    description: "Custom websites and AI receptionists that qualify leads and book appointments for professional service providers.",
    url: "https://www.servengines.com",
    siteName: "Servengines",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg', // Make sure you have an image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Servengines Dashboard Preview',
      },
    ],
  },

  // 5. Robots: Ensures Google is allowed to index your site
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Google Analytics Scripts */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KXHBTLLD09" 
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KXHBTLLD09');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1107369801564115');
            fbq('track', 'PageView');
          `}
        </Script>
        
        {/* NoScript fallback for Meta Pixel */}
        <noscript>
          {/* We're disabling the Next.js image warnings for this specific line */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
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