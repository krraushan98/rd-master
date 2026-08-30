import React from 'react';
import Link from 'next/link';
import { ArrowLeft, UserMinus, Zap } from 'lucide-react';

export default function AccountDeletion() {
  return (
    <main className="[color-scheme:light] min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white pb-20">
      
      {/* Navigation */}
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
          <UserMinus className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Account Deletion
        </h1>
        <p className="text-slate-500 font-medium">
          Data Removal Instructions for RD Master DOP Automation
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 text-slate-900">
          
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">1.</span> How to Request Data Deletion
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you wish to delete your account and all associated data from <strong>RD Master DOP Automation</strong>, please follow the steps below. For security purposes, we must verify your identity through the Google account you used to sign in.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <ol className="list-decimal list-inside space-y-4 text-slate-700 leading-relaxed">
                  <li>
                    Open the email client associated with the Google Account you used to log into RD Master.
                  </li>
                  <li>
                    Compose a new email to: <strong className="text-slate-900">raushanpandit718@gmail.com</strong>
                  </li>
                  <li>
                    Set the subject line to: <strong className="text-slate-900">"Account Deletion Request"</strong>
                  </li>
                  <li>
                    In the body of the email, explicitly state that you want your account and all associated data permanently deleted.
                  </li>
                </ol>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">2.</span> What Data is Deleted?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Upon receiving your confirmed request, we will permanently delete the following within 7-14 business days:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 leading-relaxed pl-2">
                <li>Your Google Sign-In association and Firebase Authentication user profile.</li>
                <li>All personal identifiers (Name and Email Address) collected during sign-in.</li>
                <li>All DOP Agent Details</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-blue-600">3.</span> Data Retention Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not retain any of your personal or financial data after the deletion process is complete. Once deleted, this action cannot be undone, and you will immediately lose access to all your saved RD Master workflows and cloud-synced accounts.
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
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} RD Master. All rights reserved.</p>
      </footer>

    </main>
  );
}