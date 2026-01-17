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

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 bg-transparent pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
                {/* Left Menu */}
                <div className="flex gap-4">
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
                    className="absolute left-1/2 -translate-x-1/2 top-2 hover:scale-105 transition-transform duration-300"
                >
                    <div className="w-24 h-24 rounded-full bg-pizza-black border-4 border-pizza-yellow flex flex-col items-center justify-center -rotate-6 shadow-xl relative z-50">
                        <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">
                            Slice
                        </span>
                        <span className="font-heading font-black text-pizza-yellow text-xl leading-none transform -rotate-6">
                            Town
                        </span>
                    </div>
                </Link>

                {/* Right Menu */}
                <div className="flex gap-4">
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
            </div>
        </nav>
    );
}
