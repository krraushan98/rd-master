import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'RD Master | The Ultimate DOP Agent Automation App',
  description: 'Automate schedule generation, calculate real-time fines, and manage over 20,000 Recurring Deposit accounts effortlessly. Built exclusively for India Post DOP agents.',
  keywords: 'DOP agent app, RD automation, India Post RD schedule, post office agent software, calculate RD fine,DOP agent software',
  openGraph: {
    title: 'RD Master | The Ultimate DOP Agent Automation App',
    description: 'Automate your RD schedules, calculate fines in real-time, and batch update ASLAAS numbers. Download the APK now.',
    url: 'https://rd-master-web.vercel.app',
    siteName: 'RD Master',
    images: [
      {
        url: 'https://rd-master.vercel.app/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  verification: {
    google: 'NiKvBRISCtLjet8QdjT-ZhjgRw1U68SxYZcfTrQaUdE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
