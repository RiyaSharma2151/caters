'use client';

import Link from 'next/link';

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-pizza-cream py-12 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link href="/" className="neo-button bg-pizza-white px-6 py-2 rounded-lg text-pizza-black hover:bg-gray-50 flex items-center gap-2">
                        ← Back Home
                    </Link>
                    <div className="text-2xl font-heading font-black">
                        <span className="text-pizza-red">SLICE</span>
                        <span className="text-pizza-black"> TOWN</span>
                    </div>
                </div>

                <div className="neo-border neo-shadow bg-pizza-white p-8 md:p-12">
                    <h1 className="text-5xl md:text-6xl font-heading font-black text-center mb-2 text-pizza-black">
                        BOOK CATERING
                    </h1>
                    <p className="text-xl font-body text-center mb-12 text-pizza-orange font-bold">
                        Let us make your event delicious! 🍕
                    </p>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-heading font-bold text-xl block">Event Date</label>
                                <input
                                    type="date"
                                    className="w-full neo-border p-4 bg-pizza-yellow/20 font-body text-lg focus:bg-pizza-yellow/40 outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-heading font-bold text-xl block">Event Time</label>
                                <input
                                    type="time"
                                    className="w-full neo-border p-4 bg-pizza-yellow/20 font-body text-lg focus:bg-pizza-yellow/40 outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="font-heading font-bold text-xl block">Event Location</label>
                            <input
                                type="text"
                                placeholder="123 Party Street, Fun City"
                                className="w-full neo-border p-4 bg-pizza-white font-body text-lg focus:border-pizza-red outline-none transition-colors"
                            />
                        </div>

                        {/* Guests & Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-heading font-bold text-xl block">No. of Guests</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 50"
                                    min="10"
                                    className="w-full neo-border p-4 bg-pizza-white font-body text-lg focus:border-pizza-red outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-heading font-bold text-xl block">Event Type</label>
                                <select className="w-full neo-border p-4 bg-pizza-white font-body text-lg focus:border-pizza-red outline-none transition-colors appearance-none cursor-pointer">
                                    <option>Birthday Party</option>
                                    <option>Corporate Event</option>
                                    <option>Wedding</option>
                                    <option>Casual Gathering</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Menu Preferences */}
                        <div className="space-y-4">
                            <label className="font-heading font-bold text-xl block">Menu Preferences</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <label className="neo-border p-4 bg-pizza-green/20 flex items-center gap-3 cursor-pointer hover:bg-pizza-green/40 transition-colors">
                                    <input type="checkbox" className="w-6 h-6 border-4 border-pizza-black" />
                                    <span className="font-bold">Vegetarian</span>
                                </label>
                                <label className="neo-border p-4 bg-pizza-red/20 flex items-center gap-3 cursor-pointer hover:bg-pizza-red/40 transition-colors">
                                    <input type="checkbox" className="w-6 h-6 border-4 border-pizza-black" />
                                    <span className="font-bold">Non-Veg</span>
                                </label>
                                <label className="neo-border p-4 bg-pizza-yellow/20 flex items-center gap-3 cursor-pointer hover:bg-pizza-yellow/40 transition-colors">
                                    <input type="checkbox" className="w-6 h-6 border-4 border-pizza-black" />
                                    <span className="font-bold">Desserts</span>
                                </label>
                            </div>
                        </div>

                        {/* Additional Details */}
                        <div className="space-y-2">
                            <label className="font-heading font-bold text-xl block">Additional Details</label>
                            <textarea
                                rows={4}
                                placeholder="Any special requests, allergies, or specific menu items..."
                                className="w-full neo-border p-4 bg-pizza-white font-body text-lg focus:border-pizza-red outline-none transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full neo-button bg-pizza-red text-white py-5 text-2xl mt-8 hover:scale-[1.02] active:scale-[0.98]">
                            CONFIRM BOOKING
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
