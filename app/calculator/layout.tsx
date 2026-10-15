import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'India Post RD Calculator & Fine Calculator | RD Master',
  description: 'Free online tool for Post Office agents to calculate RD maturity, MPKBY commission, advance deposit rebates, and exact DOP default fines.',
  keywords: [
    'RD Calculator', 
    'Post Office RD fine calculator', 
    'India Post RD maturity', 
    'MPKBY commission calculator', 
    'DOP default fine', 
    'Post office rebate calculator',
    'RD default fee calculator'
  ],
  alternates: {
    canonical: 'https://rd-master.vercel.app/calculator',
  },
  openGraph: {
    title: 'India Post RD Calculator & Fine Calculator',
    description: 'Calculate maturity, exact default fines, and agent commission in seconds.',
    url: 'https://rd-master.vercel.app/calculator',
    siteName: 'RD Master',
    type: 'website',
  }
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}