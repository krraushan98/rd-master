import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white pb-20">
      
      {/* Simple Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
              RD Master
            </span>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-100/70 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 font-medium">
          Last Updated: August 2026
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">1.</span> Data Fiduciary Duty (DPDP Act Compliance)
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You act as the "Data Fiduciary" for any client data (names, account numbers, financial details) processed through this Application. It is your legal responsibility to ensure the lawful processing of this data under the Digital Personal Data Protection (DPDP) Act, 2023.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">2.</span> Local Data Processing & Storage
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The Application processes and stores sensitive personal data, including your India Post agency credentials and client data, strictly locally on your device. The Developer does not possess, transmit, or harvest your clients' data or your India Post agency credentials to external servers.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">3.</span> Security Practices (IT Rules, 2011)
              </h2>
              <p className="text-slate-600 leading-relaxed">
                It is your legal responsibility to maintain the physical and digital security of your device to prevent unauthorized access to this data under the Information Technology (Reasonable Security Practices) Rules, 2011. We strongly recommend enabling Biometric Authentication to protect your device.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">4.</span> Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions regarding this privacy policy, please contact our support team via the Contact Us section in the app menu.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-75">
          <Zap className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-bold tracking-tight text-slate-800">RD Master</span>
        </div>
        <p className="text-xs text-slate-400">© 2026 RD Master. All rights reserved.</p>
      </footer>

    </main>
  );
}