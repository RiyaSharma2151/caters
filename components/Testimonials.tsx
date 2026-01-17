import { motion } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    { name: 'Sarah M.', text: 'Best pizza in town! The crust is perfection! 🍕', rating: 5, color: 'bg-pizza-yellow', rotation: -3, x: -20, y: 10 },
    { name: 'Mike R.', text: 'Amazing flavors and super fresh ingredients!', rating: 5, color: 'bg-pizza-green', rotation: 2, x: 50, y: -30 },
    { name: 'Emily K.', text: 'My family\'s favorite pizza place! ❤️', rating: 5, color: 'bg-pizza-orange', rotation: -2, x: -40, y: 40 },
    { name: 'David L.', text: 'The BBQ chicken pizza is incredible!', rating: 5, color: 'bg-pink-300', rotation: 3, x: 30, y: 0 },
    { name: 'Lisa P.', text: 'Great service and delicious food!', rating: 5, color: 'bg-purple-300', rotation: -4, x: -10, y: -50 },
    { name: 'Tom W.', text: 'Can\'t stop ordering from here! 🔥', rating: 5, color: 'bg-blue-300', rotation: 1, x: 40, y: 60 },
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-32 px-6 bg-pizza-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-heading font-black text-pizza-black mb-4 text-center">
                    WALL OF FAME
                </h2>
                <p className="text-2xl font-body text-center mb-16 text-pizza-red">
                    Drag the notes around! 📌
                </p>

                <div
                    ref={containerRef}
                    className="relative min-h-[600px] w-full flex flex-wrap justify-center content-center gap-8 p-12 bg-pizza-cream/50 rounded-3xl border-4 border-dashed border-pizza-black/20"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            drag
                            dragConstraints={containerRef}
                            whileHover={{ scale: 1.1, zIndex: 100, rotate: 0 }}
                            whileDrag={{ scale: 1.1, zIndex: 100, rotate: 0 }}
                            initial={{ rotate: testimonial.rotation, x: testimonial.x, y: testimonial.y }}
                            className={`${testimonial.color} w-64 h-64 p-6 shadow-xl cursor-grab active:cursor-grabbing flex flex-col justify-between transform transition-shadow hover:shadow-2xl`}
                            style={{
                                boxShadow: '5px 5px 15px rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* Tape visual */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm pointer-events-none"></div>

                            <div className="flex mb-2 justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-xl">⭐</span>
                                ))}
                            </div>

                            <p className="text-2xl font-handwriting text-pizza-black text-center leading-snug transform -rotate-1">
                                "{testimonial.text}"
                            </p>

                            <p className="text-xl font-handwriting font-bold text-pizza-black text-right mt-2">
                                - {testimonial.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
