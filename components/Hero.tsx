'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const pizzaRef = useRef<HTMLDivElement>(null);
    const basilRef = useRef<HTMLDivElement>(null);
    const oliveRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for pizza
            gsap.to(pizzaRef.current, {
                y: 150,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Floating basil
            gsap.to(basilRef.current, {
                y: 200,
                rotation: 180,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });

            // Floating olives
            gsap.to(oliveRef.current, {
                y: 180,
                rotation: -120,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2,
                },
            });

            // Background text parallax
            gsap.to(textRef.current, {
                y: 100,
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pizza-yellow pt-24"
        >
            {/* Background Text */}
            <div
                ref={textRef}
                className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
            >
                <h1 className="text-[20vw] font-heading font-black text-pizza-black whitespace-nowrap">
                    PIZZA PIZZA PIZZA
                </h1>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="text-7xl md:text-9xl font-heading font-black mb-6 leading-none">
                    <span className="block text-pizza-black">WELCOME TO</span>
                    <span className="block text-pizza-red mt-2">SLICE TOWN</span>
                </h1>
                <p className="text-2xl md:text-3xl font-body font-bold text-pizza-black max-w-2xl mx-auto mb-8">
                    Where every slice tells a story 🍕
                </p>
                <button className="neo-button bg-pizza-red text-white px-12 py-4 text-xl">
                    Order Now
                </button>
            </div>

            {/* Pizza Image */}
            <div
                ref={pizzaRef}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
            >
                <Image
                    src="/images/hero-pizza.png"
                    alt="Delicious pizza slice"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Floating Basil */}
            <div
                ref={basilRef}
                className="absolute top-32 right-20 w-32 h-32 pointer-events-none animate-float"
            >
                <Image
                    src="/images/basil.png"
                    alt="Fresh basil"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Floating Olives */}
            <div
                ref={oliveRef}
                className="absolute top-48 left-20 w-24 h-24 pointer-events-none animate-float"
                style={{ animationDelay: '0.5s' }}
            >
                <Image
                    src="/images/olives.png"
                    alt="Black olives"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-sm font-bold text-pizza-black">SCROLL</span>
                <div className="w-6 h-10 border-4 border-pizza-black rounded-full flex items-start justify-center p-1">
                    <div className="w-1.5 h-3 bg-pizza-black rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
