import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-6 text-muted-foreground">Last updated: June 1, 2023</p>
          
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              DriveEase, Inc. ("DriveEase", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application (collectively, the "Service").
            </p>
            
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold">1. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our Service, including:
            </p>
            
            <h3 className="mt-4 text-lg font-semibold">1.1 Personal Information</h3>
            <p>
              Personal information is data that can be used to identify you individually. This may include:
            </p>
            <ul className="list-disc pl-6">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Driver's license information</li>
              <li>Date of birth</li>
              <li>Profile picture (if provided)</li>
            </ul>
            
            <h3 className="mt-4 text-lg font-semibold">1.2 Usage Information</h3>
            <p>
              We automatically collect certain information about your device and how you interact with our Service, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Access times and dates</li>
              <li>Pages viewed and features used</li>
              <li>Clickstream data</li>
              <li>Geolocation data (with your permission)</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">2. How We Collect Information</h2>
            <p>
              We collect information through:
            </p>
            <ul className="list-disc pl-6">
              <li>Direct interactions (when you create an account, make a booking, contact customer support)</li>
              <li>Automated technologies (cookies, web beacons, tracking technologies)</li>
              <li>Third-party sources (payment processors, identity verification services)</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process and manage your vehicle rentals</li>
              <li>Verify your identity and eligibility to rent vehicles</li>
              <li>Process payments and prevent fraudulent transactions</li>
              <li>Communicate with you about your account, bookings, and our Service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">4. Disclosure of Your Information</h2>
            <p>
              We may disclose your personal information to:
            </p>
            <ul className="list-disc pl-6">
              <li>Service providers (payment processors, cloud service providers, customer support tools)</li>
              <li>Business partners (insurance providers, vehicle manufacturers)</li>
              <li>Legal authorities (when required by law or to protect our rights)</li>
              <li>Affiliated companies within our corporate group</li>
              <li>Potential buyers in the event of a merger, acquisition, or sale of assets</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">5. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Right to access and receive a copy of your personal information</li>
              <li>Right to correct inaccurate or incomplete information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@driveease.com.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining the retention period, we consider:
            </p>
            <ul className="list-disc pl-6">
              <li>The amount, nature, and sensitivity of the personal information</li>
              <li>The potential risk of harm from unauthorized use or disclosure</li>
              <li>The purposes for which we process the information</li>
              <li>Legal, regulatory, and contractual requirements</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@driveease.com.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have different data protection laws than your country of residence. We ensure appropriate safeguards are in place to protect your information when transferred internationally.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">10. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">11. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              DriveEase, Inc.<br />
              123 Innovation Drive<br />
              San Francisco, CA 94103<br />
              Email: privacy@driveease.com<br />
              Phone: 1-800-DRIVEEASE
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;