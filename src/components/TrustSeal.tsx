// src/components/TrustSeal.tsx
import React from 'react';

const TrustSeal = () => {
  return (
    <section className="py-16 bg-indigo-900 text-white border-t border-indigo-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Zero Risk. High Reward.</h2>
        <p className="text-indigo-200 mb-10 max-w-2xl mx-auto">
          We don&apos;t just deliver a file and disappear. We partner with you to ensure your system actually works.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
            <h3 className="text-xl font-bold mb-2">30-Day Result Promise</h3>
            <p className="text-indigo-200 text-sm">If your site doesn&apos;t see a boost in engagement in 30 days, we optimize it for free until it does.</p>
          </div>
          <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
            <h3 className="text-xl font-bold mb-2">Milestone Approval</h3>
            <p className="text-indigo-200 text-sm">You approve the wireframe and the design before a single line of code is written.</p>
          </div>
          <div className="p-6 border border-indigo-700 rounded-xl bg-indigo-800/50">
            <h3 className="text-xl font-bold mb-2">Harvard/IBM Certified</h3>
            <p className="text-indigo-200 text-sm">Your systems are built using enterprise-grade standards, not &quot;gig-worker&quot; templates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSeal;