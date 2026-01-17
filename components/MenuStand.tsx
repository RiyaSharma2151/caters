'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MenuStand() {
    const standRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(standRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: standRef.current,
                    start: 'top 70%',
                },
            });
        }, standRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16 px-4 md:py-32 bg-pizza-green overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-pizza-white mb-8 md:mb-16 text-center">
                    TODAY'S SPECIALS
                </h2>

                <div ref={standRef} className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3] flex items-center justify-center">
                    {/* Stand Image - Acts as container background */}
                    <div className="absolute inset-0 z-10 w-full h-full">
                        <Image
                            src="/images/menu.png"
                            alt="Wooden Menu Stand"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Scrollable Content Area */}
                    {/* Adjusted positioning based on user feedback: moved up and made taller */}
                    <div className="absolute z-20 w-[68%] h-[95%] top-[-2%] left-[21%] overflow-y-auto no-scrollbar scroll-smooth">
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full aspect-[4/5] shadow-sm">
                                <Image
                                    src="/images/menu1.png"
                                    alt="Menu Card 1"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-full aspect-[4/5] shadow-sm">
                                <Image
                                    src="/images/menu2.png"
                                    alt="Menu Card 2"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-full aspect-[4/5] shadow-sm">
                                <Image
                                    src="/images/menu3.png"
                                    alt="Menu Card 3"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Gradient for bottom fading if needed, or decor */}
            {/* Custom scrollbar hiding styles */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
