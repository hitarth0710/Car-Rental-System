import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
          <p className="mb-6 text-muted-foreground">Last updated: June 1, 2023</p>
          
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the DriveEase website and mobile application (the "Service") operated by DriveEase, Inc. ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <Separator className="my-6" />
            
            <h2 className="text-xl font-bold">1. Rental Agreement</h2>
            <p>
              When you book a vehicle through our Service, you are entering into a rental agreement with DriveEase. The rental agreement is subject to the terms and conditions specified at the time of booking, including but not limited to rental duration, pricing, insurance coverage, and vehicle specifications.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">2. Eligibility Requirements</h2>
            <p>
              To be eligible to rent a vehicle through our Service, you must:
            </p>
            <ul className="list-disc pl-6">
              <li>Be at least 21 years of age (25 for certain premium vehicle categories).</li>
              <li>Possess a valid driver's license that has been held for at least one year.</li>
              <li>Have a valid credit card in your name for security deposit purposes.</li>
              <li>Meet our insurance requirements.</li>
            </ul>
            <p>
              Additional fees may apply for drivers under 25 years of age.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">3. Booking and Cancellation</h2>
            <p>
              Reservations made through our Service are subject to vehicle availability. We reserve the right to provide an equivalent or upgraded vehicle if your selected vehicle becomes unavailable.
            </p>
            <p>
              Cancellation policies:
            </p>
            <ul className="list-disc pl-6">
              <li>Cancellations made more than 48 hours before pickup: Full refund</li>
              <li>Cancellations made 24-48 hours before pickup: 50% refund</li>
              <li>Cancellations made less than 24 hours before pickup: No refund</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">4. Vehicle Use</h2>
            <p>
              You agree to use the rented vehicle only for lawful purposes and in accordance with all applicable traffic laws and regulations. The vehicle may only be driven by the individual(s) named in the rental agreement.
            </p>
            <p>
              Prohibited uses include but are not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>Driving under the influence of alcohol, drugs, or any substance that impairs your ability to drive.</li>
              <li>Using the vehicle for commercial purposes without prior authorization.</li>
              <li>Transporting illegal substances or contraband.</li>
              <li>Participating in racing or speed tests.</li>
              <li>Driving outside the agreed-upon geographical boundaries specified in your rental agreement.</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">5. Fees and Charges</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6">
              <li>The agreed-upon rental rate plus applicable taxes and fees.</li>
              <li>Fuel costs (vehicles must be returned with the same fuel level as at pickup).</li>
              <li>Tolls, parking tickets, and traffic violations incurred during your rental period.</li>
              <li>Additional charges for late returns (hourly rate based on your daily rate).</li>
              <li>Cleaning fees for vehicles returned in excessively dirty condition.</li>
              <li>Damage repair costs not covered by insurance.</li>
            </ul>
            
            <h2 className="mt-6 text-xl font-bold">6. Insurance and Liability</h2>
            <p>
              Basic insurance coverage is included in all rentals. This includes:
            </p>
            <ul className="list-disc pl-6">
              <li>Collision Damage Waiver (CDW) with deductible</li>
              <li>Third-party liability insurance as required by law</li>
            </ul>
            <p>
              Optional supplementary insurance is available for purchase at the time of booking. You are responsible for any damage not covered by the selected insurance option.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">7. Account Security</h2>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">8. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of DriveEase and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">9. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">10. Limitation of Liability</h2>
            <p>
              In no event shall DriveEase, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">11. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2 className="mt-6 text-xl font-bold">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@driveease.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;