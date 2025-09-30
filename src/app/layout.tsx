// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import the Script component
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}