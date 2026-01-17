'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuItems = {
    veg: [
        { name: 'Margherita', price: '$12', desc: 'Classic tomato, mozzarella & basil' },
        { name: 'Veggie Supreme', price: '$14', desc: 'Peppers, mushrooms, olives & onions' },
        { name: 'Four Cheese', price: '$15', desc: 'Mozzarella, parmesan, gorgonzola & ricotta' },
    ],
    nonVeg: [
        { name: 'Pepperoni Classic', price: '$14', desc: 'Loaded with pepperoni & cheese' },
        { name: 'BBQ Chicken', price: '$16', desc: 'Grilled chicken, BBQ sauce & red onions' },
        { name: 'Meat Lovers', price: '$18', desc: 'Pepperoni, sausage, bacon & ham' },
    ],
    desserts: [
        { name: 'Nutella Pizza', price: '$10', desc: 'Sweet pizza with Nutella & strawberries' },
        { name: 'Tiramisu', price: '$8', desc: 'Classic Italian dessert' },
    ],
    drinks: [
        { name: 'Craft Soda', price: '$4', desc: 'Various flavors' },
        { name: 'Fresh Lemonade', price: '$5', desc: 'Homemade & refreshing' },
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
                        OUR MENU
                    </h2>
                    <p className="text-2xl font-body text-center mb-16 text-pizza-yellow">
                        Handcrafted with love 🍕
                    </p>

                    <div ref={menuRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Veg Pizzas */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-green p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-black">
                                🌱 VEG PIZZAS
                            </h3>
                            <div className="space-y-4">
                                {menuItems.veg.map((item, index) => (
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

                        {/* Non-Veg Pizzas */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-red p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-white">
                                🍖 NON-VEG PIZZAS
                            </h3>
                            <div className="space-y-4">
                                {menuItems.nonVeg.map((item, index) => (
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

                        {/* Desserts */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-yellow p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-black">
                                🍰 DESSERTS
                            </h3>
                            <div className="space-y-4">
                                {menuItems.desserts.map((item, index) => (
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

                        {/* Drinks */}
                        <div className="menu-card neo-border neo-shadow bg-pizza-orange p-8">
                            <h3 className="text-4xl font-heading font-black mb-6 text-pizza-white">
                                🥤 DRINKS
                            </h3>
                            <div className="space-y-4">
                                {menuItems.drinks.map((item, index) => (
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
