'use client';

const testimonials = [
    { name: 'Sarah M.', text: 'Best pizza in town! The crust is perfection! 🍕', rating: 5, color: 'bg-pizza-yellow', rotation: -3 },
    { name: 'Mike R.', text: 'Amazing flavors and super fresh ingredients!', rating: 5, color: 'bg-pizza-green', rotation: 2 },
    { name: 'Emily K.', text: 'My family\'s favorite pizza place! ❤️', rating: 5, color: 'bg-pizza-orange', rotation: -2 },
    { name: 'David L.', text: 'The BBQ chicken pizza is incredible!', rating: 5, color: 'bg-pink-300', rotation: 3 },
    { name: 'Lisa P.', text: 'Great service and delicious food!', rating: 5, color: 'bg-purple-300', rotation: -4 },
    { name: 'Tom W.', text: 'Can\'t stop ordering from here! 🔥', rating: 5, color: 'bg-blue-300', rotation: 1 },
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 bg-pizza-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-black mb-4 text-center">
                    WALL OF FAME
                </h2>
                <p className="text-2xl font-body text-center mb-16 text-pizza-red">
                    What our customers say 💬
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${testimonial.color} neo-border neo-shadow-sm p-6 hover:scale-105 transition-transform duration-300`}
                            style={{ rotate: `${testimonial.rotation}deg` }}
                        >
                            <div className="flex mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-2xl">⭐</span>
                                ))}
                            </div>
                            <p className="text-lg font-body text-pizza-black mb-4 italic">
                                "{testimonial.text}"
                            </p>
                            <p className="text-sm font-bold text-pizza-black">
                                - {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
