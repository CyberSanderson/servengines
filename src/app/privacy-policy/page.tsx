// src/app/privacy-policy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Servengines',
  description: 'Learn how Servengines collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 prose lg:prose-lg">
        <h1>Privacy Policy</h1>
        <p><em>Last Updated: September 25, 2025</em></p>
        
        <p>Servengines (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website servengines.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

        {/* ... rest of the content is fine ... */}

        <h2>Collection of Your Information</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, email address, and message content, that you voluntarily give to us when you fill out our contact form.</p>

        <h2>Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Email you regarding our services.</li>
          <li>Improve the efficiency and operation of the Site.</li>
        </ul>

        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: contact@servengines.com</p>
        
        <p><strong>Disclaimer:</strong> This is a template and not legal advice. You should consult a legal professional to ensure this policy is appropriate for your needs.</p>
      </div>
    </div>
  );
}