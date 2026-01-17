'use client';

export default function Footer() {
    return (
        <footer id="contact" className="bg-pizza-black text-pizza-white py-16 px-6 border-t-4 border-pizza-yellow">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-4xl font-heading font-black mb-4">
                            <span className="text-pizza-red">SLICE</span>
                            <span className="text-pizza-white"> TOWN</span>
                        </h3>
                        <p className="font-body text-pizza-white/80">
                            Serving the best pizza in town since 2020. Made with love, served with passion.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-2xl font-heading font-bold mb-4 text-pizza-yellow">Quick Links</h4>
                        <ul className="space-y-2 font-body">
                            <li><a href="#story" className="hover:text-pizza-yellow transition-colors">Our Story</a></li>
                            <li><a href="#menu" className="hover:text-pizza-yellow transition-colors">Menu</a></li>
                            <li><a href="#location" className="hover:text-pizza-yellow transition-colors">Locations</a></li>
                            <li><a href="#" className="hover:text-pizza-yellow transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h4 className="text-2xl font-heading font-bold mb-4 text-pizza-yellow">Stay Connected</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-12 h-12 neo-border bg-pizza-red flex items-center justify-center text-2xl hover:bg-pizza-yellow transition-colors">
                                📘
                            </a>
                            <a href="#" className="w-12 h-12 neo-border bg-pizza-red flex items-center justify-center text-2xl hover:bg-pizza-yellow transition-colors">
                                📷
                            </a>
                            <a href="#" className="w-12 h-12 neo-border bg-pizza-red flex items-center justify-center text-2xl hover:bg-pizza-yellow transition-colors">
                                🐦
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 border-4 border-pizza-white text-pizza-black font-body"
                            />
                            <button className="neo-button bg-pizza-yellow text-pizza-black px-6 py-2">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-pizza-white/20 pt-8 text-center font-body text-pizza-white/60">
                    <p>&copy; 2024 Slice Town. All rights reserved. Made with 🍕 and ❤️</p>
                </div>
            </div>
        </footer>
    );
}
