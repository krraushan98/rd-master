'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator as CalcIcon, Info, Download, Smartphone, CalendarDays, Receipt, BadgeIndianRupee, TrendingUp } from 'lucide-react';

export default function RDCalculator() {
  const [activeTab, setActiveTab] = useState<'maturity' | 'finerebate'>('maturity');

  // --- MATURITY STATE ---
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(1000);
  const [years, setYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(6.7);
  const agentCommissionRate = 4.0;
  
  // Maturity Math
  const totalMonths = years * 12;
  const totalInvestment = monthlyDeposit * totalMonths;
  const quarterlyRate = interestRate / 400;
  let totalMaturity = 0;
  for (let i = 1; i <= totalMonths; i++) {
    const quartersRemaining = (totalMonths - i + 1) / 3;
    totalMaturity += monthlyDeposit * Math.pow(1 + quarterlyRate, quartersRemaining);
  }
  const estimatedInterest = totalMaturity - totalInvestment;
  const estimatedCommission = (totalInvestment * agentCommissionRate) / 100;

  // --- EXACT DOP FINE & REBATE STATE ---
  const [frAmount, setFrAmount] = useState<number>(1000);
  const [frType, setFrType] = useState<'fine' | 'rebate'>('fine');
  const [frInstallments, setFrInstallments] = useState<number>(1);
  const [frDueDate, setFrDueDate] = useState<string>('');
  
  const [frFineResult, setFrFineResult] = useState<number>(0);
  const [frRebateResult, setFrRebateResult] = useState<number>(0);
  const [totalDelayUnits, setTotalDelayUnits] = useState<number>(0);

  // Exact Post Office Fine & Rebate Logic
  useEffect(() => {
    const denomination = Math.floor(frAmount / 100);
    
    if (frType === 'fine') {
      if (frDueDate && frInstallments > 0) {
        
        const dueDate = new Date(frDueDate);
        
        // Brilliant Logic: Deriving First Half directly from the Due Date day
        const isFirstHalf = dueDate.getDate() <= 15;
        const monthlyFine = Math.round(frAmount * 0.01); // 1% of RD Amount
        
        let totalFine = 0;
        let cumulativeMonthsLate = 0;
        
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize current time for accurate date matching

        for (let i = 0; i < frInstallments; i++) {
          const currentInstMonth = new Date(dueDate.getFullYear(), dueDate.getMonth() + i, 1);

          // Determine fine start threshold based on opening date half
          let fineStartDate: Date;
          if (isFirstHalf) {
            fineStartDate = new Date(currentInstMonth.getFullYear(), currentInstMonth.getMonth(), 16);
          } else {
            fineStartDate = new Date(currentInstMonth.getFullYear(), currentInstMonth.getMonth() + 1, 1);
          }

          let monthsLate = 0;
          let threshold = new Date(fineStartDate);
          threshold.setHours(0, 0, 0, 0);

          while (now.getTime() >= threshold.getTime()) {
            monthsLate++;
            threshold = new Date(threshold.getFullYear(), threshold.getMonth() + 1, threshold.getDate());
          }

          cumulativeMonthsLate += monthsLate;
          totalFine += (monthsLate * monthlyFine);
        }

        setTotalDelayUnits(cumulativeMonthsLate);
        setFrFineResult(totalFine);

      } else {
        setFrFineResult(0);
        setTotalDelayUnits(0);
      }
      setFrRebateResult(0);
    } else {
      // Rebate Logic: ₹40 per ₹100 for 12 advance months. ₹10 per ₹100 for 6 advance months.
      const yearsAdvance = Math.floor(frInstallments / 12);
      const remainingMonths = frInstallments % 12;
      
      let rebate = yearsAdvance * 40 * denomination;
      if (remainingMonths >= 6) {
        rebate += 10 * denomination;
      }
      setFrRebateResult(rebate);
      setFrFineResult(0);
      setTotalDelayUnits(0);
    }
  }, [frAmount, frType, frInstallments, frDueDate]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <nav className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-slate-500 hover:text-blue-600 flex items-center gap-2 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to RD Master
          </Link>
          <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
            <CalcIcon className="w-5 h-5 text-blue-600" /> RD Tools
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            India Post RD Calculators
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Calculate maturity projections or compute exact DOP default fines and advance rebates.
          </p>
        </div>

        {/* --- TAB NAVIGATION --- */}
        <div className="flex bg-slate-200/50 p-1.5 rounded-2xl max-w-md mx-auto mb-10">
          <button 
            onClick={() => setActiveTab('maturity')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all flex justify-center items-center gap-2 ${activeTab === 'maturity' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <TrendingUp className="w-4 h-4" /> Maturity
          </button>
          <button 
            onClick={() => setActiveTab('finerebate')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all flex justify-center items-center gap-2 ${activeTab === 'finerebate' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Receipt className="w-4 h-4" /> Fine & Rebate
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* --- LEFT COLUMN: INPUTS --- */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
            
            {/* MATURITY INPUTS */}
            {activeTab === 'maturity' && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold mb-6 border-b pb-4 flex items-center gap-2"><CalcIcon className="w-5 h-5 text-blue-600"/> RD Details</h2>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Deposit (₹)</label>
                  <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Tenure (Years)</label>
                  <select value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium">
                    <option value={5}>5 Years (60 Months)</option>
                    <option value={10}>10 Years (120 Months)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
                  <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium" />
                </div>
              </div>
            )}

            {/* FINE & REBATE INPUTS */}
            {activeTab === 'finerebate' && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold mb-6 border-b pb-4 flex items-center gap-2"><Receipt className="w-5 h-5 text-blue-600"/> DOP Fine & Rebate Rules</h2>
                
                {/* Toggle Type */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-4">
                  <button onClick={() => setFrType('fine')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${frType === 'fine' ? 'bg-red-100 text-red-700 shadow-sm border border-red-200' : 'text-slate-500 hover:text-slate-700'}`}>Calculate Fine</button>
                  <button onClick={() => setFrType('rebate')} className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${frType === 'rebate' ? 'bg-emerald-100 text-emerald-700 shadow-sm border border-emerald-200' : 'text-slate-500 hover:text-slate-700'}`}>Calculate Rebate</button>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly RD Amount (₹)</label>
                  <input type="number" value={frAmount} onChange={(e) => setFrAmount(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium" />
                </div>

                {frType === 'fine' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Oldest Pending Due Date</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input type="date" value={frDueDate} onChange={(e) => setFrDueDate(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-slate-700 font-medium" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {frType === 'fine' ? 'Number of Installments Paying Today' : 'Number of Advance Installments'}
                  </label>
                  <input type="number" min="1" value={frInstallments} onChange={(e) => setFrInstallments(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium text-lg" />
                </div>
              </div>
            )}
          </div>

          {/* --- RIGHT COLUMN: RESULTS --- */}
          <div className="flex flex-col gap-6">
            
            {/* MATURITY RESULTS */}
            {activeTab === 'maturity' && (
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl text-white animate-in fade-in duration-300 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-6 text-blue-100 border-b border-white/10 pb-4">Calculation Results</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">Total Investment</p>
                      <p className="text-2xl font-bold">₹{totalInvestment.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">Estimated Interest Earned</p>
                      <p className="text-2xl font-bold text-emerald-400">+ ₹{Math.round(estimatedInterest).toLocaleString('en-IN')}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-blue-200 font-medium mb-1">Estimated Maturity Value</p>
                      <p className="text-4xl font-black text-white">₹{Math.round(totalMaturity).toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-white/10 rounded-2xl p-4 flex justify-between items-center border border-white/20">
                  <span className="text-sm text-blue-100 font-medium">MPKBY Commission ({agentCommissionRate}%)</span>
                  <span className="font-bold text-white text-lg">₹{Math.round(estimatedCommission).toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            {/* FINE & REBATE RESULTS */}
            {activeTab === 'finerebate' && (
              <div className={`rounded-3xl p-6 sm:p-8 shadow-xl text-white animate-in fade-in duration-300 h-full flex flex-col justify-center ${frType === 'fine' ? 'bg-gradient-to-br from-red-900 to-slate-900' : 'bg-gradient-to-br from-emerald-900 to-slate-900'}`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-inner ${frType === 'fine' ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                    <BadgeIndianRupee className="w-8 h-8" />
                  </div>
                  
                  <p className="text-sm font-medium mb-2 opacity-80 uppercase tracking-wider">
                    {frType === 'fine' ? 'Total Cumulative Fine Payable' : 'Total Eligible Rebate (Discount)'}
                  </p>
                  
                  <p className="text-5xl sm:text-6xl font-black tracking-tight mb-8">
                    ₹{frType === 'fine' ? frFineResult.toLocaleString('en-IN') : frRebateResult.toLocaleString('en-IN')}
                  </p>
                  
                  <div className="bg-black/20 rounded-2xl p-5 text-left border border-white/10">
                    <h4 className="font-bold text-sm mb-2 opacity-90 flex items-center gap-2">
                      <Info className="w-4 h-4" /> DOP Official Math Used:
                    </h4>
                    {frType === 'fine' ? (
                      <p className="text-sm opacity-75 leading-relaxed">
                        Based on the due date grace period, there are a total of <strong className="text-white">{totalDelayUnits}</strong> cumulative defaulted months across the {frInstallments} pending installments being paid today. Fine is 1% of RD amount per defaulted month.
                      </p>
                    ) : (
                      <p className="text-sm opacity-75 leading-relaxed">
                        Rebate is ₹40 per ₹100 denomination for exactly 12 months, and ₹10 per ₹100 denomination for exactly 6 months of advance deposit.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- MARKETING CALL TO ACTION --- */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <Smartphone className="absolute -left-10 -bottom-10 w-48 h-48 text-white/10 -rotate-12" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Are you a Post Office Agent?</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Stop manually calculating fines and typing ASLAAS numbers. Automate your schedules for 20,000+ accounts directly from your Android phone with the RD Master App.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition shadow-lg">
                Learn More
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.raushan.rdmaster" className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 border border-blue-500">
                <Download className="w-5 h-5" /> Download RD Master
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}