import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="Finovation Logo" className="h-10 w-auto hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300" />
                        <Link href="/" className="font-bold text-2xl tracking-tighter text-white hidden sm:block">
                            Finovation<span className="text-cyan-500">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#home" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Home
                            </Link>
                            <Link href="#services" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                Services
                            </Link>
                            <Link href="#about" className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                                About
                            </Link>
                            <Link href="#contact" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
