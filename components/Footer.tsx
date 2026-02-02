import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.png" alt="Finovation Logo" className="w-10 h-10" />
                            <h3 className="text-2xl font-bold text-white">Finovation<span className="text-cyan-500">.</span></h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering Fintech businesses with cutting-edge software solutions and digital transformation services.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Home</Link></li>
                            <li><Link href="#services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Services</Link></li>
                            <li><Link href="#about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <div className="space-y-3 text-sm text-gray-400">
                            <p className="flex items-start">
                                <span className="font-semibold text-white w-20">Address:</span>
                                <span>5th Floor 167 - 169 Great Portland Street, London, England, W1W 5PF</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-white w-20">Phone:</span>
                                <a href="tel:+447745363056" className="hover:text-cyan-400 transition-colors">+44 7745363056</a>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-white w-20">Email:</span>
                                <a href="mailto:info@finovationtech.com" className="hover:text-cyan-400 transition-colors">info@finovationtech.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Finovation Technologies. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-300">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
