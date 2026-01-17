'use client';

import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-pizza-white border-b-4 border-pizza-black">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left Menu */}
                <div className="flex gap-8">
                    <Link href="#story" className="font-heading font-bold text-lg hover:text-pizza-red transition-colors">
                        Story
                    </Link>
                    <Link href="#menu" className="font-heading font-bold text-lg hover:text-pizza-red transition-colors">
                        Menu
                    </Link>
                </div>

                {/* Center Logo */}
                <Link href="#" className="absolute left-1/2 -translate-x-1/2">
                    <div className="text-4xl font-heading font-black tracking-tight">
                        <span className="text-pizza-red">SLICE</span>
                        <span className="text-pizza-black"> TOWN</span>
                    </div>
                </Link>

                {/* Right Menu */}
                <div className="flex gap-8">
                    <Link href="#location" className="font-heading font-bold text-lg hover:text-pizza-red transition-colors">
                        Location
                    </Link>
                    <Link href="#contact" className="font-heading font-bold text-lg hover:text-pizza-red transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
