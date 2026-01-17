'use client';

import Image from 'next/image';

const featuredPicks = [
    {
        name: 'Margherita Deluxe',
        price: '$15',
        desc: 'Our signature pizza with premium buffalo mozzarella',
        image: '/images/pizza1.png',
    },
    {
        name: 'Pepperoni Blast',
        price: '$16',
        desc: 'Double pepperoni with extra cheese',
        image: '/images/pizza2.png',
    },
    {
        name: 'Garden Fresh',
        price: '$14',
        desc: 'Fresh vegetables from local farms',
        image: '/images/pizza3.png',
    },
];

export default function FeaturedPicks() {
    return (
        <section className="py-16 px-4 md:py-32 md:px-6 bg-pizza-cream">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-pizza-black mb-4 text-center">
                    FEATURED PICKS
                </h2>
                <p className="text-lg md:text-2xl font-body text-center mb-8 md:mb-16 text-pizza-red">
                    Chef's Recommendations ⭐
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPicks.map((pizza, index) => (
                        <div
                            key={index}
                            className="neo-border neo-shadow bg-pizza-white p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                        >
                            <div className="relative w-full h-64 mb-4 overflow-hidden">
                                <Image
                                    src={pizza.image}
                                    alt={pizza.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-3xl font-heading font-black text-pizza-black mb-2">
                                {pizza.name}
                            </h3>
                            <p className="text-lg font-body text-pizza-black/70 mb-4">
                                {pizza.desc}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-3xl font-black text-pizza-red">{pizza.price}</span>
                                <button className="neo-button bg-pizza-yellow text-pizza-black px-6 py-2 text-sm">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
