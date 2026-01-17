'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';


const STAND_IMAGES = [
    '/images/stand1.png',
    '/images/stand2.png',
    '/images/stand3.png',
    '/images/stand4.png'
];

// Mapping stand images to menu images. 
// Since we only have menu1, menu2, menu3, we'll cycle or map explicitly.
const MENU_IMAGES = [
    '/images/menu1.png',
    '/images/menu2.png',
    '/images/menu3.png',
    '/images/menu1.png' // Mapping stand4 back to menu1 as fallback/cycle
];

export default function MenuStand() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % STAND_IMAGES.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + STAND_IMAGES.length) % STAND_IMAGES.length);
    };

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    // Auto-advance functionality (optional, but good for sliders)
    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLightboxOpen]);

    const currentMenuImage = MENU_IMAGES[currentIndex];

    return (
        <section className="py-16 px-4 md:py-32 bg-pizza-green overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
            {/* Background Text/Decor could go here */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto flex flex-col items-center w-full z-10"
            >
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-pizza-white mb-8 md:mb-16 text-center drop-shadow-lg">
                    TODAY'S SPECIALS
                </h2>

                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] flex items-center justify-center">

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all text-white border border-white/20 hover:scale-110"
                        aria-label="Previous special"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all text-white border border-white/20 hover:scale-110"
                        aria-label="Next special"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>

                    {/* Slider Container */}
                    <div className="relative w-full h-full cursor-pointer group perspective-1000" onClick={openLightbox}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div className="relative w-full h-full drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                                    <Image
                                        src={STAND_IMAGES[currentIndex]}
                                        alt={`Special Menu ${currentIndex + 1}`}
                                        fill
                                        className="object-contain"
                                        priority
                                    />

                                    {/* Click hint */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm pointer-events-none">
                                        Click to view menu
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                        {STAND_IMAGES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-pizza-yellow scale-125'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full max-w-4xl max-h-[85vh] h-full flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={currentMenuImage}
                                    alt="Full Menu"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Download Button */}
                            <a
                                href={currentMenuImage}
                                download={`menu-special-${currentIndex + 1}.png`}
                                className="mt-6 flex items-center gap-2 px-6 py-3 bg-pizza-yellow text-pizza-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg text-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                Download Menu
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
