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
  keywords: 'DOP agent app, RD automation, India Post RD schedule, post office agent software, calculate RD fine',
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
