'use client'; // Required for React state in Next.js App Router

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Download, ShieldCheck, Zap, FileText, Smartphone, Lock, 
  CheckCircle2, Mail, Phone, MessageCircle, Calculator, 
  RefreshCw, FileSpreadsheet, TrendingUp, PlayCircle, BookOpen, Globe 
} from 'lucide-react';

export default function Home() {
  // 1. Define Language State
  const [lang, setLang] = useState('en');

  // 2. Translation Dictionary
  const t = {
    en: {
      nav: { features: "Features", tutorials: "Tutorials", support: "Support", getApp: "Get App", langToggle: "हिंदी" },
      hero: {
        badge: "Designed Exclusively for India Post (DOP) Agents",
        title1: "Automate Your RD Work.",
        title2: "Save Hours Every Day.",
        desc: "Eliminate manual portal errors. Generate massive schedules for 20,000+ amount, compute exact default fines in real time, and batch update ASLAAS records directly from your mobile phone.",
        download: "Download APK (v1.0.0)",
        demo: "Watch Demo",
        req: "Safe & Verified APK • Android 8.0 or Higher"
      },
      gallery: {
        title: "Engineered for Speed & Simplicity",
        desc: "Take a preview look inside the RD Master workspace.",
        img1: "Intuitive Agent Dashboard",
        img2: "20,000+ Schedule Generator",
        img3: "One-Click Account Sync"
      },
      featuresTitle: "Everything You Need to Run Your Agency",
      featuresDesc: "Built from the ground up to eliminate tedious portal tasks and maximize your daily productivity.",
      featuresList: [
        { title: "Automated Account Sync", desc: "Securely connect and fetch your entire RD account portfolio directly from the DOP portal in seconds." },
        { title: "Massive Schedule Generation", desc: "Process and generate error-free schedules for over 20,000 accounts seamlessly without freezing." },
        { title: "Real-Time Fine Calculation", desc: "Automatically calculate exact default penalties for missed months to ensure 100% schedule accuracy." },
        { title: "Smart Account Grouping", desc: "Organize accounts by collection routes, families, or payment dates for fast, one-tap batch processing." },
        { title: "Batch ASLAAS Update", desc: "Update ASLAAS numbers across multiple RD accounts simultaneously with a single automated click." },
        { title: "Smart RD Calculator", desc: "Quickly calculate maturity values, total deposit interest, and customized investment projections for clients." },
        { title: "Advanced PDF Export", desc: "Filter accounts by status, date, or balance and export organized, professional PDF reports to your device." },
        { title: "Real-Time Analytics", desc: "Track your monthly agent earnings, active portfolios, and collection metrics in real time." }
      ],
      tutorial: {
        title: "Learn How to Use RD Master",
        desc: "Watch our step-by-step video walk-through or download the PDF guide.",
        vidTitle: "Complete Application Walkthrough",
        vidDesc: "Learn how to configure bot credentials, extract accounts, generate large batch schedules, and export reports.",
        pdfTitle: "Official PDF Guide",
        pdfDesc: "Prefer reading? Download our illustrated manual covering portal permissions, fine tables, and security lock setup.",
        pdfBtn: "Download PDF Guide",
        reqTitle: "Quick Requirements",
        req1: "Valid DOP Agent Portal Credentials",
        req2: "Active Internet Connection for Bot Sync",
        req3: "Android OS 8.0 or Higher"
      },
      security: {
        badge: "End-to-End Local Protection",
        title: "Bank-Grade On-Device Security",
        desc: "Your clients' financial data is highly confidential. RD Master utilizes multi-layered cryptographic obfuscation, device-bound integrity checks, and biometrics to safeguard your workflow.",
        li1: "Biometric (Fingerprint/Face) Lock",
        li2: "4-Digit Hardware App PIN",
        li3: "Advanced Native Code Obfuscation",
        li4: "Anti-Tamper freeRASP Engine"
      },
      install: {
        title: "How to Install RD Master",
        desc: "Follow these 4 simple steps to set up the APK on your Android device.",
        steps: [
          "Tap the 'Download APK' button to download the latest release.",
          "Open the downloaded APK file from your notification bar or 'Downloads' folder.",
          "When prompted by Android, tap 'Settings' and enable 'Allow from unknown source'.",
          "Tap 'Install', open RD Master, and log in to start automating."
        ]
      },
      support: {
        title: "Dedicated Agent Support",
        desc: "Need assistance with onboarding, subscription renewal, or schedule generation?",
        phone: "Phone Support",
        chat: "Live Chat",
        chatDesc: "WhatsApp Assistance",
        email: "Email Inquiries"
      },
      footer: "Disclaimer: RD Master is an independent automation tool developed strictly to assist authorized DOP agents. It is not officially affiliated with, endorsed by, or sponsored by India Post, the Department of Posts, or the Government of India."
    },
    hi: {
      nav: { features: "सुविधाएँ", tutorials: "ट्यूटोरियल", support: "सहायता", getApp: "ऐप डाउनलोड करें", langToggle: "English" },
      hero: {
        badge: "विशेष रूप से इंडिया पोस्ट (DOP) एजेंटों के लिए डिज़ाइन किया गया",
        title1: "अपना RD कार्य स्वचालित करें।",
        title2: "हर दिन घंटों बचाएं।",
        desc: "पोर्टल की मैन्युअल गलतियों को खत्म करें। 20,000+ पैसे के लिए एक साथ शेड्यूल जनरेट करें, वास्तविक समय में डिफ़ॉल्ट जुर्माना (fine) की गणना करें, और सीधे अपने मोबाइल फोन से ASLAAS रिकॉर्ड अपडेट करें।",
        download: "APK डाउनलोड करें (v1.0.0)",
        demo: "डेमो देखें",
        req: "सुरक्षित और सत्यापित APK • Android 8.0 या उच्चतर"
      },
      gallery: {
        title: "गति और सरलता के लिए डिज़ाइन किया गया",
        desc: "RD Master कार्यस्थान (workspace) की एक झलक देखें।",
        img1: "आसान एजेंट डैशबोर्ड",
        img2: "20,000+ शेड्यूल जनरेटर",
        img3: "वन-क्लिक ASLAAS सिंक"
      },
      featuresTitle: "आपकी एजेंसी को बढ़ाने के लिए हर जरूरी सुविधा",
      featuresDesc: "पोर्टल के उबाऊ कार्यों को खत्म करने और आपकी दैनिक उत्पादकता को अधिकतम करने के लिए बनाया गया है।",
      featuresList: [
        { title: "स्वचालित खाता सिंक (Auto Sync)", desc: "अपने पूरे RD खाते के पोर्टफोलियो को सीधे DOP पोर्टल से सेकंडों में सुरक्षित रूप से कनेक्ट करें और प्राप्त करें।" },
        { title: "विशाल शेड्यूल जनरेशन", desc: "बिना ऐप हैंग हुए 20,000 से अधिक खातों के लिए निर्बाध रूप से त्रुटि-मुक्त शेड्यूल जनरेट करें।" },
        { title: "रीयल-टाइम जुर्माना (Fine) गणना", desc: "100% शेड्यूल सटीकता सुनिश्चित करने के लिए छूटे हुए महीनों के डिफ़ॉल्ट दंड की स्वचालित रूप से गणना करें।" },
        { title: "स्मार्ट खाता ग्रुपिंग", desc: "कलेक्शन रूट, परिवारों या भुगतान तिथियों के आधार पर खातों को व्यवस्थित करें और एक टैप में शेड्यूल बनाएं।" },
        { title: "बैच ASLAAS अपडेट", desc: "एक स्वचालित क्लिक के साथ एक साथ कई RD खातों में ASLAAS नंबर अपडेट करें।" },
        { title: "स्मार्ट RD कैलकुलेटर", desc: "ग्राहकों के लिए परिपक्वता (maturity) राशि, कुल जमा ब्याज और निवेश अनुमानों की तुरंत गणना करें।" },
        { title: "उन्नत PDF निर्यात (Export)", desc: "स्थिति, तिथि या शेष राशि के अनुसार खातों को फ़िल्टर करें और व्यवस्थित PDF रिपोर्ट अपने डिवाइस में सेव करें।" },
        { title: "रीयल-टाइम एनालिटिक्स", desc: "अपनी मासिक एजेंट कमाई, सक्रिय पोर्टफोलियो और कलेक्शन मेट्रिक्स को रीयल-टाइम में ट्रैक करें।" }
      ],
      tutorial: {
        title: "RD Master का उपयोग करना सीखें",
        desc: "हमारा स्टेप-बाय-स्टेप वीडियो ट्यूटोरियल देखें या PDF गाइड डाउनलोड करें।",
        vidTitle: "संपूर्ण एप्लिकेशन वॉकथ्रू",
        vidDesc: "जानें कि बॉट को कैसे सेट करें, खाते कैसे निकालें, बड़े बैच शेड्यूल कैसे जनरेट करें और रिपोर्ट कैसे एक्सपोर्ट करें।",
        pdfTitle: "आधिकारिक PDF गाइड",
        pdfDesc: "पढ़ना पसंद करते हैं? पोर्टल अनुमतियों, जुर्माना टेबल और सुरक्षा लॉक सेटअप को कवर करने वाला हमारा सचित्र मैनुअल डाउनलोड करें।",
        pdfBtn: "PDF गाइड डाउनलोड करें",
        reqTitle: "त्वरित आवश्यकताएँ",
        req1: "वैध DOP एजेंट पोर्टल लॉगिन विवरण",
        req2: "बॉट सिंक के लिए सक्रिय इंटरनेट कनेक्शन",
        req3: "Android OS 8.0 या उच्चतर"
      },
      security: {
        badge: "एंड-टू-एंड लोकल सुरक्षा",
        title: "बैंक-ग्रेड ऑन-डिवाइस सुरक्षा",
        desc: "आपके ग्राहकों का वित्तीय डेटा अत्यधिक गोपनीय है। RD Master आपके वर्कफ़्लो को सुरक्षित रखने के लिए मल्टी-लेयर्ड क्रिप्टोग्राफ़िक ओबफस्केशन और बायोमेट्रिक्स का उपयोग करता है।",
        li1: "बायोमेट्रिक (फिंगरप्रिंट/फेस) लॉक",
        li2: "4-अंकीय हार्डवेयर ऐप पिन",
        li3: "उन्नत नेटिव कोड ओबफस्केशन",
        li4: "एंटी-टैम्पर freeRASP इंजन"
      },
      install: {
        title: "RD Master कैसे स्थापित (Install) करें",
        desc: "अपने Android डिवाइस पर APK सेट करने के लिए इन 4 सरल चरणों का पालन करें।",
        steps: [
          "नवीनतम वर्ज़न डाउनलोड करने के लिए ऊपर 'APK डाउनलोड करें' बटन पर टैप करें।",
          "अपने नोटिफिकेशन बार या 'Downloads' फ़ोल्डर से डाउनलोड की गई APK फ़ाइल खोलें।",
          "Android द्वारा पूछे जाने पर, 'Settings' पर टैप करें और 'Allow from unkonwn source' चालू करें।",
          "'Install' पर टैप करें, RD Master खोलें, और अपना काम स्वचालित करना शुरू करें।"
        ]
      },
      support: {
        title: "समर्पित एजेंट सहायता",
        desc: "क्या आपको लॉगिन, सदस्यता नवीनीकरण, या शेड्यूल जनरेशन में सहायता की आवश्यकता है?",
        phone: "फ़ोन सहायता",
        chat: "लाइव चैट",
        chatDesc: "WhatsApp सहायता",
        email: "ईमेल पूछताछ"
      },
      footer: "अस्वीकरण: RD Master एक स्वतंत्र ऑटोमेशन टूल है जिसे विशेष रूप से अधिकृत DOP एजेंटों की सहायता के लिए विकसित किया गया है। यह आधिकारिक तौर पर इंडिया पोस्ट, डाक विभाग या भारत सरकार से संबद्ध, समर्थित या प्रायोजित नहीं है।"
    }
  };

  const currentLang = t[lang as keyof typeof t];

  // Map icons to the translated features list
  const featureIcons = [
    <Zap key="1" className="w-7 h-7 text-blue-600" />,
    <Smartphone key="2" className="w-7 h-7 text-blue-600" />,
    <FileText key="3" className="w-7 h-7 text-blue-600" />,
    <ShieldCheck key="4" className="w-7 h-7 text-blue-600" />,
    <RefreshCw key="5" className="w-7 h-7 text-blue-600" />,
    <Calculator key="6" className="w-7 h-7 text-blue-600" />,
    <FileSpreadsheet key="7" className="w-7 h-7 text-blue-600" />,
    <TrendingUp key="8" className="w-7 h-7 text-blue-600" />
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20">
              <Image 
                src="/app-icon.png" 
                alt="RD Master Logo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
              RD Master
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-blue-600 transition">{currentLang.nav.features}</a>
            <a href="#how-to-use" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-blue-600 transition">{currentLang.nav.tutorials}</a>
            <a href="#support" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-blue-600 transition">{currentLang.nav.support}</a>
            
            {/* --- NEW: Language Toggle Button --- */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition bg-slate-100 px-3 py-2 rounded-lg text-sm font-bold"
            >
              <Globe className="w-4 h-4" />
              {currentLang.nav.langToggle}
            </button>

            <a 
              href="#download" 
              className="hidden sm:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition text-sm"
            >
              {currentLang.nav.getApp}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 text-center bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/70 border border-blue-200/60 text-blue-800 text-xs sm:text-sm font-bold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            {currentLang.hero.badge}
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            {currentLang.hero.title1} <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              {currentLang.hero.title2}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            {currentLang.hero.desc}
          </p>
          
          <div id="download" className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="/rd-master-v1.apk" 
              download
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-9 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Download className="w-6 h-6" />
              {currentLang.hero.download}
            </a>
            <a 
              href="#how-to-use"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-7 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition"
            >
              <PlayCircle className="w-5 h-5 text-blue-600" />
              {currentLang.hero.demo}
            </a>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">{currentLang.hero.req}</p>
        </div>
      </section>

      {/* App Screenshots Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{currentLang.gallery.title}</h2>
          <p className="text-slate-600 mt-2">{currentLang.gallery.desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100">
            <div className="aspect-[9/16] bg-gradient-to-b from-blue-100/50 to-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-200">
              <Image src="/screenshots/dashboard.png" alt="RD Master Dashboard" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-center mt-4 text-slate-800">{currentLang.gallery.img1}</h3>
          </div>

          <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100">
            <div className="aspect-[9/16] bg-gradient-to-b from-blue-100/50 to-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-200">
              <Image src="/screenshots/schedule.png" alt="Schedule Generation" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-center mt-4 text-slate-800">{currentLang.gallery.img2}</h3>
          </div>

          <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100">
            <div className="aspect-[9/16] bg-gradient-to-b from-blue-100/50 to-slate-100 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-200">
              <Image src="/screenshots/aslaas.png" alt="ASLAAS Update Tool" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-center mt-4 text-slate-800">{currentLang.gallery.img3}</h3>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{currentLang.featuresTitle}</h2>
            <p className="text-lg text-slate-600 mt-4">{currentLang.featuresDesc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentLang.featuresList.map((feat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-100/70 flex items-center justify-center mb-5">
                    {featureIcons[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use / Tutorials Section */}
      <section id="how-to-use" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{currentLang.tutorial.title}</h2>
          <p className="text-lg text-slate-600 mt-3">{currentLang.tutorial.desc}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID_HERE" 
                title="RD Master Complete Video Tutorial" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-slate-900">{currentLang.tutorial.vidTitle}</h3>
              <p className="text-sm text-slate-600 mt-1">{currentLang.tutorial.vidDesc}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{currentLang.tutorial.pdfTitle}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">{currentLang.tutorial.pdfDesc}</p>
              </div>
              <a 
                href="/docs/RD_Master_User_Manual.pdf" 
                download
                className="w-full bg-white text-blue-900 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition shadow-md"
              >
                <Download className="w-5 h-5" />
                {currentLang.tutorial.pdfBtn}
              </a>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-blue-600 w-5 h-5" />
                {currentLang.tutorial.reqTitle}
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• {currentLang.tutorial.req1}</li>
                <li>• {currentLang.tutorial.req2}</li>
                <li>• {currentLang.tutorial.req3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Military-Grade Security Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 rounded-[2.5rem] p-10 sm:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-6 border border-blue-400/20">
              <Lock className="w-3.5 h-3.5" /> {currentLang.security.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">{currentLang.security.title}</h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              {currentLang.security.desc}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">{currentLang.security.li1}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">{currentLang.security.li2}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">{currentLang.security.li3}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-sky-400 w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">{currentLang.security.li4}</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-3xl shadow-inner">
              <Lock className="w-20 h-20 sm:w-28 sm:h-28 text-sky-400 opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="bg-slate-100/70 py-24 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{currentLang.install.title}</h2>
            <p className="text-slate-600 mt-2">{currentLang.install.desc}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
            <div className="space-y-8">
              {currentLang.install.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center font-black flex-shrink-0 text-base shadow-md shadow-blue-500/20">
                    {idx + 1}
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 pt-1 font-medium leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support & Contact Section */}
      <section id="support" className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">{currentLang.support.title}</h2>
          <p className="text-lg text-slate-600 mb-12">{currentLang.support.desc}</p>
          
          <div className="grid sm:grid-cols-3 gap-5">
            <a href="tel:+919876543210" className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition">
              <Phone className="w-7 h-7 text-blue-600 mb-3" />
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">{currentLang.support.phone}</span>
              <span className="font-bold text-slate-800 text-sm">+91 9876543210</span>
            </a>

            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-green-50/60 border border-green-200/70 hover:border-green-300 hover:bg-green-50 transition">
              <MessageCircle className="w-7 h-7 text-green-600 mb-3" />
              <span className="text-xs uppercase tracking-wider text-green-700 font-bold mb-1">{currentLang.support.chat}</span>
              <span className="font-bold text-green-900 text-sm">{currentLang.support.chatDesc}</span>
            </a>

            <a href="mailto:support@example.com" className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40 transition">
              <Mail className="w-7 h-7 text-blue-600 mb-3" />
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">{currentLang.support.email}</span>
              <span className="font-bold text-slate-800 text-sm">support@example.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-14 px-4 border-t border-slate-900 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 opacity-75">
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-bold tracking-tight text-white">RD Master</span>
          </div>
          <p className="text-sm mb-4">© 2026 RD Master. All rights reserved.</p>
          <p className="text-xs max-w-2xl leading-relaxed text-slate-300">
            {currentLang.footer}
          </p>
        </div>
      </footer>

    </main>
  );
}