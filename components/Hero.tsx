'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const pizzaRef = useRef<HTMLDivElement>(null);
    const oliveRef = useRef<HTMLDivElement>(null);
    const textRef1 = useRef<HTMLDivElement>(null); // First marquee line
    const textRef2 = useRef<HTMLDivElement>(null); // Second marquee line
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

            // Background text marquee effect - First line moves right
            gsap.to(textRef1.current, {
                x: 500, // Move right
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8,
                },
            });

            // Background text marquee effect - Second line moves left
            gsap.to(textRef2.current, {
                x: -500, // Move left
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.8,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Mouse movement tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-radial from-[#ffd60a] via-[#ffb703] to-[#fb8500] pt-24"
            style={{
                background: 'radial-gradient(circle at center, #ffd60a 0%, #ffb703 50%, #fb8500 100%)'
            }}
        >
            {/* Background Text - Dual Marquee */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none overflow-hidden gap-8">
                {/* First line - moves right */}
                <div
                    ref={textRef1}
                    className="w-full flex items-center justify-center"
                >
                    <h1 className="text-[15vw] font-heading font-black text-pizza-black whitespace-nowrap">
                        APNA FOOD • APNA FOOD • APNA FOOD • APNA FOOD •
                    </h1>
                </div>

                {/* Second line - moves left */}
                <div
                    ref={textRef2}
                    className="w-full flex items-center justify-center"
                >
                    <h1 className="text-[15vw] font-heading font-black text-pizza-black whitespace-nowrap">
                        APNA FOOD • APNA FOOD • APNA FOOD • APNA FOOD •
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            {/* <div className="relative z-10 text-center px-6">
                <h1 className="text-7xl md:text-9xl font-heading font-black mb-6 leading-none">
                    <span className="block text-pizza-black">WELCOME TO</span>
                    <span className="block text-pizza-red mt-2">SLICE TOWN</span>
                </h1>
                <p className="text-2xl md:text-3xl font-body font-bold text-pizza-black max-w-2xl mx-auto mb-8">
                    Where every slice tells a story 🍕
                </p> */}
            {/* Order Now Button - Bottom Right */}
            <Link href="/book" className="neo-button bg-pizza-red text-white px-12 py-4 text-xl fixed bottom-8 right-8 z-50 hover:scale-105 transition-transform">
                Book Now
            </Link>
            {/* </div> */}

            {/* Bhature Image */}
            <div
                ref={pizzaRef}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
                style={{
                    transform: `translate(calc(-50% + ${mousePosition.x * 40}px), ${mousePosition.y * 40}px)`,
                    transition: 'transform 0.2s ease-out',
                }}
            >
                <Image
                    src="/images/bhature.png"
                    alt="Delicious pizza slice"
                    fill
                    className="object-contain"
                    priority
                />
            </div>



            {/* Floating G */}
            <div
                ref={oliveRef}
                className="absolute top-48 left-20 w-24 h-24 pointer-events-none animate-float"
                style={{
                    animationDelay: '0.5s',
                    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                    transition: 'transform 0.4s ease-out',
                }}
            >
                <Image
                    src="/images/g.png"
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
