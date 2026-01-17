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

            // Mobile vs Desktop Animation management
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Desktop: Large movements
                gsap.fromTo(samosaRef.current,
                    { x: -500, opacity: 0, scale: 0.8 },
                    {
                        x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out',
                        scrollTrigger: { trigger: storyRef.current, start: 'top 70%', toggleActions: 'play reverse play reverse' }
                    }
                );

                gsap.fromTo(gElementRef.current,
                    { x: 500, y: 200, opacity: 0, scale: 0.8 },
                    {
                        x: 0, y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out',
                        scrollTrigger: { trigger: storyRef.current, start: 'top 70%', toggleActions: 'play reverse play reverse' }
                    }
                );
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile: Smaller movements (slide from edges)
                gsap.fromTo(samosaRef.current,
                    { x: -100, opacity: 0, scale: 0.8 },
                    {
                        x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
                        scrollTrigger: { trigger: storyRef.current, start: 'top 80%', toggleActions: 'play reverse play reverse' }
                    }
                );

                gsap.fromTo(gElementRef.current,
                    { x: 100, y: 50, opacity: 0, scale: 0.8 },
                    {
                        x: 0, y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
                        scrollTrigger: { trigger: storyRef.current, start: 'top 80%', toggleActions: 'play reverse play reverse' }
                    }
                );
            });
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
                className="relative py-16 px-4 md:py-32 md:px-6 bg-pizza-cream overflow-hidden"
            >
                {/* Flying Samosa */}
                <div
                    ref={samosaRef}
                    className="absolute top-12 left-4 w-20 h-20 md:top-24 md:left-16 md:w-40 md:h-40 pointer-events-none z-10"
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
                    className="absolute bottom-12 right-4 w-20 h-20 md:bottom-24 md:right-16 md:w-40 md:h-40 pointer-events-none z-10"
                >
                    <Image
                        src="/images/g.png"
                        alt="G element flying in"
                        fill
                        className="object-contain"
                    />
                </div>

                <div ref={contentRef} className="max-w-4xl mx-auto relative z-20">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-pizza-black mb-8 text-center">
                        OUR STORY
                    </h2>

                    <div className="space-y-6 md:space-y-8">
                        <div className="neo-border neo-shadow bg-pizza-white p-6 md:p-12">
                            <p className="text-lg md:text-2xl lg:text-3xl font-body font-bold text-pizza-black leading-relaxed">
                                Bringing the authentic taste of India to your plate, Apna Food started with a simple belief:{' '}
                                <span className="text-pizza-red">food is the language of love</span>.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-yellow p-6 md:p-12 rotate-1">
                            <p className="text-base md:text-xl lg:text-2xl font-body text-pizza-black leading-relaxed">
                                We use only the <strong>finest spices</strong>, fresh locally sourced ingredients,
                                and traditional recipes passed down through generations. Every dish is cooked
                                with passion and served with the warmth of Indian hospitality.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-white p-6 md:p-12 -rotate-1">
                            <p className="text-base md:text-xl lg:text-2xl font-body text-pizza-black leading-relaxed">
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
