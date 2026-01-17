'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { src: '/images/pizza1.png', alt: 'Margherita Pizza', rotation: -5 },
    { src: '/images/pizza2.png', alt: 'Pepperoni Pizza', rotation: 3 },
    { src: '/images/pizza3.png', alt: 'Veggie Pizza', rotation: -3 },
    { src: '/images/pizza4.png', alt: 'BBQ Chicken Pizza', rotation: 5 },
];

export default function Gallery() {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const polaroids = galleryRef.current?.querySelectorAll('.polaroid-item');

            gsap.from(polaroids || [], {
                y: 100,
                opacity: 0,
                rotation: 20,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 px-6 bg-pizza-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-black mb-16 text-center">
                    PIZZA GALLERY
                </h2>

                <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="polaroid-item polaroid cursor-pointer"
                            style={{ rotate: `${image.rotation}deg` }}
                        >
                            <div className="relative w-64 h-64">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 text-center font-body font-bold text-pizza-black">
                                {image.alt}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
