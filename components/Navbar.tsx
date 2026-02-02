'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
            <div className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-6xl' : 'max-w-7xl'
                }`}>
                {/* Unified Glass Pill Container - Changes on scroll */}
                <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${scrolled
                        ? 'bg-[#000000]/80 backdrop-blur-xl border border-white/5 shadow-2xl'
                        : 'bg-white/10 backdrop-blur-md border border-white/10'
                    }`}>
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="Finovation Logo" className="h-10 w-auto hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300" />
                        <Link href="/" className="font-bold text-xl tracking-tighter text-white hidden sm:block italic">
                            Finovation<span className="text-cyan-500">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="#home" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                            Home
                        </Link>
                        <Link href="#services" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                            Services
                        </Link>
                        <Link href="#about" className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                            About
                        </Link>
                        <Link href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 ml-2">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 bg-[#000000]/90 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="flex flex-col p-4 space-y-2">
                            <Link
                                href="#home"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-cyan-400 hover:bg-white/10 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300"
                            >
                                About
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20 text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
