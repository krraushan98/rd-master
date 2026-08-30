import React from 'react';

export default function AccountDeletion() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.6', color: '#333', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ borderBottom: '2px solid #0052FF', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#0F172A', fontSize: '32px', margin: '0 0 10px 0' }}>Account Deletion Instructions</h1>
        <p style={{ color: '#64748B', fontSize: '18px', margin: '0' }}>For RD Master DOP Automation</p>
      </header>

      <main>
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1E293B', fontSize: '24px' }}>How to Request Data Deletion</h2>
          <p>
            If you wish to delete your account and all associated data from <strong>RD Master DOP Automation</strong>, 
            please follow the steps below. For security purposes, we must verify your identity through the Google account 
            you used to sign in.
          </p>
          <div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: '15px' }}>
            <ol style={{ margin: 0, paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                Open the email client associated with the Google Account you used to log into RD Master.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Compose a new email to: <strong>raushanpandit718@gmail.com</strong> 
              </li>
              <li style={{ marginBottom: '10px' }}>
                Set the subject line to: <strong>"Account Deletion Request"</strong>
              </li>
              <li>
                In the body of the email, state that you want your account and all associated data permanently deleted.
              </li>
            </ol>
          </div>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1E293B', fontSize: '24px' }}>What Data is Deleted?</h2>
          <p>Upon receiving your confirmed request, we will permanently delete the following within 7-14 business days:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Your Google Sign-In association and Firebase Authentication user profile.</li>
            <li>All personal identifiers (Name and Email Address) collected during sign-in.</li>
            <li>All saved schedules, ASLAAS data, and fine calculations stored in our cloud database.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#1E293B', fontSize: '24px' }}>Data Retention</h2>
          <p>
            We do not retain any of your personal or financial data after the deletion process is complete. 
            Once deleted, this action cannot be undone, and you will lose access to all your saved RD Master workflows.
          </p>
        </section>
      </main>

      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', textAlign: 'center', color: '#64748B', fontSize: '14px' }}>
        <p>&copy; {new Date().getFullYear()} RD Master DOP Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}