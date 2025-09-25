// src/app/terms-of-service/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Servengines',
  description: 'Read the terms and conditions for using the Servengines website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-lg">
        <h1>Terms of Service</h1>
        <p><em>Last Updated: September 25, 2025</em></p>

        <h2>1. Agreement to Terms</h2>
        <p>By using our website, servengines.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Site.</p>

        <h2>2. Intellectual Property Rights</h2>
        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
        
        <h2>3. User Representations</h2>
        <p>By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.</p>

        <h2>4. Prohibited Activities</h2>
        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
        
        <h2>5. Limitation of Liability</h2>
        <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.</p>
        
        <h2>6. Governing Law</h2>
        <p>These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of New York, United States.</p>
        
        <p><strong>Disclaimer:</strong> This is a template and not legal advice. You should consult a legal professional to ensure these terms are appropriate for your needs.</p>
      </div>
    </div>
  );
}