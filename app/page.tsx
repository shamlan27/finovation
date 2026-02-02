'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center z-[100]">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Finovation Logo" className="w-24 h-24 relative z-10 animate-pulse-glow" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-widest mb-4">FINOVATION</h2>
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-950 font-sans text-gray-100 selection:bg-cyan-500/20">

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[128px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="relative z-10">

        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <div className="relative w-full">
          <div className="absolute inset-0 z-0 overflow-hidden h-[120%] lg:h-[130%] -top-20">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 transform scale-105">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/40 to-gray-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)] opacity-80"></div>
          </div>

          <section id="home" className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Stay in Perfect Sync
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl drop-shadow-2xl">
              Empower your Fintech business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-none">Finovation Technologies</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light drop-shadow-lg">
              Streamline Operations and Boost Growth with Our Cutting-Edge Software Solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contact" className="px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-lg transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1">
                Get Started
              </a>
              <a href="#services" className="px-8 py-4 rounded-full border border-gray-700 hover:border-cyan-500/50 bg-gray-900/40 hover:bg-gray-800/60 text-white font-semibold text-lg backdrop-blur-md transition-all hover:-translate-y-1">
                Explore Services
              </a>
            </div>
          </section>
        </div>




        {/* SERVICES SECTION */}
        <section id="services" className="pt-40 pb-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Delivering the Best Services Just for You</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Tailored solutions to drive your digital transformation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Software Developments",
                  desc: "Creating innovative, scalable, and customized software solutions to meet your unique business needs and drive digital transformation.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  )
                },
                {
                  title: "Website Developments",
                  desc: "Designing and developing responsive, user-friendly websites tailored to enhance your online presence and engage your audience effectively.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )
                },
                {
                  title: "Application Services",
                  desc: "Delivering robust, efficient, and tailored application solutions to streamline your operations and enhance user experiences across platforms.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  )
                },
                {
                  title: "Managed IT Services",
                  desc: "Providing reliable and proactive IT support to optimize your infrastructure, enhance security, and ensure seamless business operations.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  )
                },
                {
                  title: "Digital Transformations",
                  desc: "Empowering businesses to embrace innovation through cutting-edge technology, streamlining processes, and driving growth in the digital age.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  )
                },
                {
                  title: "UI/UX Design",
                  desc: "Designing intuitive and engaging user interfaces that provide seamless and enjoyable user experiences.",
                  icon: (
                    <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  )
                }
              ].map((service, index) => (
                <div key={index} className="group p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/10 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-cyan-900/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXTRA SERVICES SECTION */}
        <section className="py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Extra Services We Offer</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Enhancing Your Experience with Tailored Solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Logo and Graphic Design",
                  desc: "Create stunning logos and visuals that capture your brand's identity and leave a lasting impression to your valuable business.",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  title: "Social Media Marketing",
                  desc: "Boost your online presence with targeted strategies to engage audiences, build brand awareness, and drive growth across all major platforms.",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Hosting and Server Support",
                  desc: "We provide reliable hosting solutions and comprehensive server support to ensure your applications run smoothly.",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((item, i) => (
                <div key={i} className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-b from-gray-700 to-transparent hover:from-cyan-500/50 transition-all duration-500">
                  <div className="h-full bg-gray-950 rounded-[23px] p-8 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 relative z-10">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADING INFRASTRUCTURE SECTION */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">Infrastructure</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Building Reliable Trading Infrastructure: <span className="text-blue-500">Setup, Configuration, and Ongoing Maintenance</span>
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Seamless installation, configuration, and optimization of your trading platform.
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Finovation Technologies is your trusted partner for complete trading platform setup and support. Our experienced team specializes in delivering end-to-end solutions for brokers, prop firms, and fintech businesses, ensuring seamless installation, configuration, and optimization of your trading infrastructure.
                </p>

                <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-2xl mb-8">
                  <p className="text-gray-300 italic">
                    "Whether you are launching on MetaTrader 5 (MT5), cTrader, or another industry-leading platform, we provide tailored technical support to match your business model."
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {/* Broker Logos as circles */}
                    <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-gray-900 flex items-center justify-center overflow-hidden p-1.5" title="LTI">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/lti.avif" alt="LTI" className="w-full h-full object-contain opacity-80" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-gray-900 flex items-center justify-center overflow-hidden p-1.5" title="Arvella">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/arvella.webp" alt="Arvella" className="w-full h-full object-contain opacity-80" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-white font-bold">100+</span> Active Users
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                {/* Visual Representation of Trading Setup with Image */}
                <div className="relative rounded-3xl overflow-hidden border border-gray-700 bg-gray-900/80 aspect-square flex flex-col items-center justify-center shadow-2xl group">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                  {/* Feature Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/trading-setup.png"
                      alt="Trading Infrastructure Setup"
                      className="w-full h-full object-contain drop-shadow-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="z-10 text-center p-6 backdrop-blur-md bg-gray-900/70 rounded-3xl border border-white/5 shadow-2xl absolute bottom-8 mx-8">
                    <h3 className="text-xl font-bold text-white mb-1">MT5 & cTrader</h3>
                    <p className="text-gray-400 text-sm">Complete Setup & Optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Highlights</h2>
              <p className="text-gray-400">Why choose Finovation Technologies?</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "SaaS Model & Self-Hosted Systems",
                "Detailed Reports",
                "Fully Branded Deployment",
                "Supports Digital Assets",
                "Innovative Designs",
                "Multilingualism",
                "24/7 Live Technical Supports",
                "Multiple Data Backup Plans",
                "Completely Mobile Optimized",
                "Secure & Reliable"
              ].map((highlight, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500/30 hover:bg-gray-800 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                    <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/about-tech.png"
                        alt="about finovation technologies"
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Finovation Technologies</h2>
                <h3 className="text-xl text-cyan-400 mb-6">Innovative Designs for Dynamic Trading Environments</h3>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    At Finovation Technologies, we specialize in crafting cutting-edge financial technology solutions designed to empower businesses and individuals. Our mission is to deliver innovative tools that help you manage, grow, and optimize your financial resources in today’s fast-paced, digital-first world.
                  </p>
                  <p>
                    With a deep understanding of the financial landscape, we provide robust, reliable, and user-friendly software that enables our clients to navigate challenges and seize opportunities. Whether you’re a business seeking growth or an individual striving for financial freedom, Finovation is your trusted partner for success in the modern financial ecosystem.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center transition-colors">
                    Learn more about us
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT PREVIEW */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Join the many fintech businesses that trust Finovation Technologies for their infrastructure and software needs.
            </p>
            <ContactSection />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

function ContactSection() {
  const [viewState, setViewState] = useState<'initial' | 'opening' | 'form' | 'submitting' | 'success'>('initial');

  const handleOpenForm = () => {
    setViewState('opening');
    setTimeout(() => {
      setViewState('form');
    }, 800); // Sync with animation duration
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setViewState('submitting');
    // Simulate API call
    setTimeout(() => {
      setViewState('success');
    }, 1500);
  };

  if (viewState === 'success') {
    return (
      <div className="p-12 rounded-3xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setViewState('initial')}
          className="px-8 py-3 rounded-xl border border-gray-600 hover:border-white text-gray-300 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="transition-all duration-500 ease-in-out relative min-h-[400px] flex items-center justify-center">

      {/* Opening Animation Overlay */}
      {viewState === 'opening' && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Opening..." className="w-32 h-32 animate-logo-reveal" />
        </div>
      )}

      {viewState === 'initial' && (
        <div className="w-full p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-2xl shadow-cyan-900/10 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-8">Fill up the form or reach out directly.</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +44 7745363056
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@finovationtech.com
            </div>
          </div>

          <button
            onClick={handleOpenForm}
            className="px-10 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-1"
          >
            Send us a Message
          </button>
        </div>
      )}

      {(viewState === 'form' || viewState === 'submitting') && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-2xl shadow-cyan-900/10 p-8 md:p-12 animate-in fade-in zoom-in duration-500 relative">
          <button
            onClick={() => setViewState('initial')}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors lg:hidden"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Contact Info */}
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Us</h3>
              <p className="text-gray-300 leading-relaxed">
                We'd love to hear from you. Fill out the details and we'll be in touch.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-cyan-900/20 leading-none text-cyan-500 flex items-center justify-center mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-medium">Phone</span>
                  <span className="text-lg font-semibold text-white">+44 7745363056</span>
                </div>
              </div>

              <div className="flex items-center text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-cyan-900/20 text-cyan-500 flex items-center justify-center mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 font-medium">Email</span>
                  <span className="text-lg font-semibold text-white">info@finovationtech.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-950/50 p-8 rounded-2xl border border-gray-800">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  required
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  type="submit"
                  disabled={viewState === 'submitting'}
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-cyan-900/20 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {viewState === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => setViewState('initial')}
                  className="px-6 py-4 rounded-xl border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
