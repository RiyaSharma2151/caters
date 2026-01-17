'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const storyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const samosaRef = useRef<HTMLDivElement>(null);
    const gElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current?.children || [], {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: storyRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                },
            });

            // Samosa flies in from left side (no rotation)
            gsap.fromTo(samosaRef.current,
                {
                    x: -500,      // Start from far left, off-screen
                    y: 0,         // Keep vertical position
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    x: 0,         // Fly to final position
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: 'top 70%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );

            // G element flies in from right bottom (no rotation)
            gsap.fromTo(gElementRef.current,
                {
                    x: 500,       // Start from far right, off-screen
                    y: 200,       // Start from bottom
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    x: 0,         // Fly to final position
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: storyRef.current,
                        start: 'top 70%',
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Checkered Transition */}
            <div className="checkered-bg h-16 w-full"></div>

            <section
                id="about"
                ref={storyRef}
                className="relative py-32 px-6 bg-pizza-cream overflow-hidden"
            >
                {/* Flying Samosa */}
                <div
                    ref={samosaRef}
                    className="absolute top-24 left-8 md:left-16 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-10"
                >
                    <Image
                        src="/images/samosa3.png"
                        alt="Samosa flying in"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Flying G Element */}
                <div
                    ref={gElementRef}
                    className="absolute bottom-24 right-8 md:right-16 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-10"
                >
                    <Image
                        src="/images/g.png"
                        alt="G element flying in"
                        fill
                        className="object-contain"
                    />
                </div>

                <div ref={contentRef} className="max-w-4xl mx-auto relative z-20">
                    <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-black mb-8 text-center">
                        OUR STORY
                    </h2>

                    <div className="space-y-8">
                        <div className="neo-border neo-shadow bg-pizza-white p-8 md:p-12">
                            <p className="text-2xl md:text-3xl font-body font-bold text-pizza-black leading-relaxed">
                                Bringing the authentic taste of India to your plate, Apna Food started with a simple belief:{' '}
                                <span className="text-pizza-red">food is the language of love</span>.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-yellow p-8 md:p-12 rotate-1">
                            <p className="text-xl md:text-2xl font-body text-pizza-black leading-relaxed">
                                We use only the <strong>finest spices</strong>, fresh locally sourced ingredients,
                                and traditional recipes passed down through generations. Every dish is cooked
                                with passion and served with the warmth of Indian hospitality.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-white p-8 md:p-12 -rotate-1">
                            <p className="text-xl md:text-2xl font-body text-pizza-black leading-relaxed">
                                From intimate gatherings to grand weddings, we turn every event into a
                                flavorful celebration. <strong>Welcome to the Apna Food family!</strong> 🍲❤️
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
