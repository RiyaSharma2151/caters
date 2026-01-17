'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const storyRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Checkered Transition */}
            <div className="checkered-bg h-16 w-full"></div>

            <section
                ref={storyRef}
                className="py-32 px-6 bg-pizza-cream"
            >
                <div ref={contentRef} className="max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-black mb-8 text-center">
                        OUR STORY
                    </h2>

                    <div className="space-y-8">
                        <div className="neo-border neo-shadow bg-pizza-white p-8 md:p-12">
                            <p className="text-2xl md:text-3xl font-body font-bold text-pizza-black leading-relaxed">
                                Born in the heart of the city, Slice Town started with a simple dream:{' '}
                                <span className="text-pizza-red">to serve the most delicious pizza</span>{' '}
                                you've ever tasted.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-yellow p-8 md:p-12 rotate-1">
                            <p className="text-xl md:text-2xl font-body text-pizza-black leading-relaxed">
                                We use only the <strong>freshest ingredients</strong>, hand-tossed dough made daily,
                                and secret family recipes passed down through generations. Every pizza is crafted
                                with love and baked to perfection in our traditional stone oven.
                            </p>
                        </div>

                        <div className="neo-border neo-shadow bg-pizza-white p-8 md:p-12 -rotate-1">
                            <p className="text-xl md:text-2xl font-body text-pizza-black leading-relaxed">
                                Today, we're proud to serve our community with the same passion and dedication
                                that started it all. <strong>Welcome to the family!</strong> 🍕❤️
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
