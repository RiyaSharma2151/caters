'use client';

import Link from 'next/link';

const locations = [
    {
        name: 'Downtown',
        address: '123 Main Street',
        city: 'New York, NY 10001',
        phone: '(555) 123-4567',
        hours: 'Mon-Sun: 11AM - 11PM',
    },
    {
        name: 'Beachside',
        address: '456 Ocean Avenue',
        city: 'Miami, FL 33139',
        phone: '(555) 987-6543',
        hours: 'Mon-Sun: 12PM - 12AM',
    },
];

export default function Location() {
    return (
        <section id="location" className="py-32 px-6 bg-pizza-red">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-white mb-4 text-center">
                    VISIT US
                </h2>
                <p className="text-2xl font-body text-center mb-16 text-pizza-yellow">
                    Two locations to serve you! 📍
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="neo-border neo-shadow bg-pizza-white p-8"
                        >
                            <h3 className="text-4xl font-heading font-black text-pizza-black mb-4">
                                {location.name}
                            </h3>
                            <div className="space-y-2 text-lg font-body text-pizza-black">
                                <p>{location.address}</p>
                                <p>{location.city}</p>
                                <p className="font-bold text-pizza-red">{location.phone}</p>
                                <p className="text-sm">{location.hours}</p>
                            </div>
                            <button className="neo-button bg-pizza-yellow text-pizza-black px-8 py-3 mt-6 w-full">
                                Get Directions
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="neo-border neo-shadow bg-pizza-yellow p-12 text-center">
                    <h3 className="text-5xl md:text-7xl font-heading font-black text-pizza-black mb-4">
                        HUNGRY YET?
                    </h3>
                    <p className="text-2xl font-body text-pizza-black mb-8">
                        Book us for your next event and enjoy authentic Indian flavors!
                    </p>
                    <Link href="/book" className="neo-button bg-pizza-red text-white px-16 py-5 text-2xl inline-block">
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
