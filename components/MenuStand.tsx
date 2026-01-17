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
        // Pause auto-advance when lightbox is open
        if (isLightboxOpen) return;

        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, [isLightboxOpen]);

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
        <section className="py-20 px-4 md:py-32 bg-pizza-green overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none checkered-bg"></div>

            {/* Decorative Floating Elements */}
            <div className="absolute top-20 left-10 md:left-20 w-16 h-16 bg-pizza-yellow rounded-full neo-border animate-float opacity-80 z-0"></div>
            <div className="absolute bottom-20 right-10 md:right-32 w-20 h-20 bg-pizza-red rotate-12 neo-border animate-float opacity-80 z-0" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-4 md:left-32 w-12 h-12 bg-pizza-orange rotate-45 neo-border animate-rotate opacity-80 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto flex flex-col items-center w-full z-10 relative"
            >
                {/* Badge */}
                <div className="absolute -top-12 md:-top-16 right-4 md:right-1/4 rotate-12 z-20">
                    <div className="bg-pizza-yellow text-pizza-black font-handwriting font-bold text-2xl md:text-3xl px-6 py-3 neo-border neo-shadow-sm rotate-6 hover:rotate-12 transition-transform cursor-default">
                        Fresh & Hot!
                    </div>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-pizza-white mb-4 text-center drop-shadow-lg relative">
                    <span className="relative z-10">TODAY'S SPECIALS</span>
                    <span className="absolute left-1 top-1 text-transparent [-webkit-text-stroke:2px_var(--pizza-black)] -z-10">TODAY'S SPECIALS</span>
                </h2>

                <p className="font-body text-xl md:text-2xl text-pizza-cream mb-12 text-center max-w-2xl font-bold bg-pizza-black/20 p-4 rounded-xl border-2 border-pizza-black/10 backdrop-blur-sm">
                    Straight from the oven to your heart. Crunchy, cheesy, and impossible to resist.
                </p>

                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] flex items-center justify-center">

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-30px] md:left-[-80px] top-1/2 -translate-y-1/2 z-30 p-4 bg-pizza-white neo-button rounded-full text-pizza-black hover:bg-pizza-cream hover:scale-110"
                        aria-label="Previous special"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-[-30px] md:right-[-80px] top-1/2 -translate-y-1/2 z-30 p-4 bg-pizza-white neo-button rounded-full text-pizza-black hover:bg-pizza-cream hover:scale-110"
                        aria-label="Next special"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>

                    {/* Slider Container - Polaroid Style */}
                    <div className="relative w-full h-full cursor-pointer group perspective-1000 p-4 bg-white neo-border neo-shadow-lg rotate-2 hover:rotate-0 transition-all duration-300" onClick={openLightbox}>
                        <div className="relative w-full h-full border-2 border-gray-100 bg-gray-50 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="absolute inset-0 w-full h-full p-2"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={STAND_IMAGES[currentIndex]}
                                            alt={`Special Menu ${currentIndex + 1}`}
                                            fill
                                            className="object-contain drop-shadow-md"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Click hint overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-pizza-yellow text-pizza-black font-bold px-6 py-2 rounded-full neo-border transform scale-90 group-hover:scale-100 transition-transform">
                                    View Menu
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
                        {STAND_IMAGES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-pizza-black ${idx === currentIndex
                                    ? 'bg-pizza-yellow scale-125'
                                    : 'bg-pizza-white hover:bg-pizza-cream'
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
