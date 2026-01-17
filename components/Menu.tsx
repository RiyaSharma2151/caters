'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuItems = {
    curries: [
        { name: 'Butter Chicken', price: '$16', desc: 'Creamy tomato curry with tender chicken' },
        { name: 'Paneer Tikka Masala', price: '$14', desc: 'Grilled cottage cheese in spiced gravy' },
        { name: 'Dal Makhani', price: '$12', desc: 'Slow-cooked black lentils with butter & cream' },
    ],
    breads: [
        { name: 'Garlic Naan', price: '$4', desc: 'Soft bread topped with garlic & cilantro' },
        { name: 'Butter Roti', price: '$3', desc: 'Whole wheat flatbread brushed with butter' },
        { name: 'Stuffed Paratha', price: '$6', desc: 'Potato or paneer stuffed grilled bread' },
    ],
    rice: [
        { name: 'Chicken Biryani', price: '$15', desc: 'Aromatic basmati rice with spiced chicken' },
        { name: 'Jeera Rice', price: '$8', desc: 'Cumin flavored basmati rice' },
    ],
    streetFood: [
        { name: 'Samosa Chat', price: '$8', desc: 'Crushed samosas with chutneys & yogurt' },
        { name: 'Pani Puri', price: '$6', desc: 'Crispy hollow shells with spiced water' },
    ],
};

export default function Menu() {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = menuRef.current?.querySelectorAll('.menu-card');

            gsap.from(cards || [], {
                y: 80,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: menuRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="checkered-bg h-16 w-full"></div>

            <section id="menu" className="py-32 px-6 bg-pizza-black text-pizza-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-heading font-black mb-4 text-center">
                        CATERING MENU
                    </h2>
                    <p className="text-2xl font-body text-center mb-16 text-pizza-yellow">
                        Authentic Indian Flavors 🍛
                    </p>

                    <div ref={menuRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Curries */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-green p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-black">
                                🍲 CURRIES
                            </h3>
                            <div className="space-y-4">
                                {menuItems.curries.map((item, index) => (
                                    <div key={index} className="border-b-2 border-pizza-black pb-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-xl font-bold text-pizza-black">{item.name}</h4>
                                            <span className="text-xl font-black text-pizza-black">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-pizza-black/80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Breads */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-red p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-white">
                                🥖 BREADS
                            </h3>
                            <div className="space-y-4">
                                {menuItems.breads.map((item, index) => (
                                    <div key={index} className="border-b-2 border-pizza-white pb-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-xl font-bold text-pizza-white">{item.name}</h4>
                                            <span className="text-xl font-black text-pizza-white">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-pizza-white/80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rice */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-yellow p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-black">
                                🍚 RICE & BIRYANI
                            </h3>
                            <div className="space-y-4">
                                {menuItems.rice.map((item, index) => (
                                    <div key={index} className="border-b-2 border-pizza-black pb-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-xl font-bold text-pizza-black">{item.name}</h4>
                                            <span className="text-xl font-black text-pizza-black">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-pizza-black/80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Street Food */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-orange p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-white">
                                🥟 STREET FOOD
                            </h3>
                            <div className="space-y-4">
                                {menuItems.streetFood.map((item, index) => (
                                    <div key={index} className="border-b-2 border-pizza-white pb-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-xl font-bold text-pizza-white">{item.name}</h4>
                                            <span className="text-xl font-black text-pizza-white">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-pizza-white/80">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
