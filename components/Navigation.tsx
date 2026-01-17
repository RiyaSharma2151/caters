// 'use client';

// import Link from 'next/link';

// export default function Navigation() {
//     return (
//         <nav className="fixed top-6 left-0 right-0 z-50 bg-transparent pointer-events-none">
//             <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
//                 {/* Left Menu */}
//                 <div className="flex gap-4">
//                     <Link href="/" className="neo-button bg-pizza-orange px-6 py-2 rounded-lg text-pizza-black hover:translate-x-0 hover:translate-y-0 active:translate-x-1 active:translate-y-1">
//                         Home
//                     </Link>
//                     <Link href="#about" className="neo-button bg-pizza-white px-6 py-2 rounded-lg text-pizza-black hover:bg-gray-50">
//                         About us
//                     </Link>
//                 </div>

//                 {/* Center Logo */}
//                 <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-2 hover:scale-105 transition-transform duration-300">
//                     <div className="w-24 h-24 rounded-full bg-pizza-black border-4 border-pizza-yellow flex flex-col items-center justify-center -rotate-6 shadow-xl relative z-50">
//                         <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">Slice</span>
//                         <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">Town</span>
//                     </div>
//                 </Link>

//                 {/* Right Menu */}
//                 <div className="flex gap-4">
//                     <Link href="#menu" className="neo-button bg-pizza-white px-6 py-2 rounded-lg text-pizza-black hover:bg-gray-50">
//                         Menu
//                     </Link>
//                     <Link href="#location" className="neo-button bg-pizza-white px-6 py-2 rounded-lg text-pizza-black hover:bg-gray-50">
//                         Reservation
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
    // Track which tab is active based on hash
    const [active, setActive] = useState<string>('#');

    useEffect(() => {
        // On initial load, read the current hash from URL
        if (typeof window !== 'undefined') {
            setActive(window.location.hash || '#');
        }

        const handleScroll = () => {
            const sections = [
                { id: 'home', hash: '#' },
                { id: 'about', hash: '#about' },
                { id: 'menu', hash: '#menu' },
                { id: 'location', hash: '#location' },
            ];

            // Find the section that is currently most visible
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the section is occupying the middle of the screen
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActive(section.hash);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const baseLink =
        'neo-button px-6 py-2 rounded-lg text-pizza-black hover:bg-gray-50 transition-colors cursor-pointer';
    const activeClass = ' bg-pizza-orange';
    const inactiveClass = ' bg-pizza-white';

    const getClass = (id: string) =>
        baseLink + (active === id ? activeClass : inactiveClass);

    // Smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        setActive(hash);

        const targetId = hash === '#' ? 'home' : hash.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL hash without jumping
            window.history.pushState(null, '', hash);
        }
    };

    // Mobile menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 bg-transparent pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between pointer-events-auto">
                {/* Left Menu - Desktop */}
                <div className="hidden md:flex gap-4">
                    <Link
                        href="/"
                        onClick={(e) => handleNavClick(e, '#')}
                        className={getClass('#')}
                    >
                        Home
                    </Link>

                    <Link
                        href="#about"
                        onClick={(e) => handleNavClick(e, '#about')}
                        className={getClass('#about')}
                    >
                        About us
                    </Link>
                </div>

                {/* Center Logo */}
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, '#')}
                    className="absolute left-1/2 -translate-x-1/2 top-2 hover:scale-105 transition-transform duration-300 md:block hidden"
                >
                    <div className="w-24 h-24 rounded-full bg-pizza-black border-4 border-pizza-yellow flex flex-col items-center justify-center -rotate-6 shadow-xl relative z-50">
                        <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">
                            Apna
                        </span>
                        <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">
                            Food
                        </span>
                    </div>
                </Link>

                {/* Mobile Logo (Visible only on mobile) */}
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, '#')}
                    className="md:hidden block hover:scale-105 transition-transform duration-300"
                >
                    <div className="w-16 h-16 rounded-full bg-pizza-black border-2 border-pizza-yellow flex flex-col items-center justify-center -rotate-6 shadow-xl relative z-50">
                        <span className="font-heading font-black text-pizza-yellow text-sm leading-none transform -rotate-6">
                            Apna
                        </span>
                        <span className="font-heading font-black text-pizza-yellow text-sm leading-none transform -rotate-6">
                            Food
                        </span>
                    </div>
                </Link>

                {/* Right Menu - Desktop */}
                <div className="hidden md:flex gap-4">
                    <Link
                        href="#menu"
                        onClick={(e) => handleNavClick(e, '#menu')}
                        className={getClass('#menu')}
                    >
                        Menu
                    </Link>

                    <Link
                        href="#location"
                        onClick={(e) => handleNavClick(e, '#location')}
                        className={getClass('#location')}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Hamburger Button - Mobile */}
                <button
                    className="md:hidden pointer-events-auto neo-button bg-pizza-white w-12 h-12 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-pizza-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-pizza-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-pizza-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 pointer-events-auto">
                    <Link
                        href="/"
                        onClick={(e) => { handleNavClick(e, '#'); setIsMenuOpen(false); }}
                        className="text-4xl font-heading font-black text-pizza-white hover:text-pizza-yellow transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        onClick={(e) => { handleNavClick(e, '#about'); setIsMenuOpen(false); }}
                        className="text-4xl font-heading font-black text-pizza-white hover:text-pizza-yellow transition-colors"
                    >
                        About us
                    </Link>
                    <Link
                        href="#menu"
                        onClick={(e) => { handleNavClick(e, '#menu'); setIsMenuOpen(false); }}
                        className="text-4xl font-heading font-black text-pizza-white hover:text-pizza-yellow transition-colors"
                    >
                        Menu
                    </Link>
                    <Link
                        href="#location"
                        onClick={(e) => { handleNavClick(e, '#location'); setIsMenuOpen(false); }}
                        className="text-4xl font-heading font-black text-pizza-white hover:text-pizza-yellow transition-colors"
                    >
                        Contact Us
                    </Link>

                    {/* Close Button Inside Menu (Extra backup) */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 p-2 text-pizza-white hover:text-pizza-red transition-colors"
                    >
                        <span className="sr-only">Close Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
