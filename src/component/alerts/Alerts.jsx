import React, { useState, useEffect } from 'react';
import Chat from '../../assets/chat.jpg';
import MainBefore from '../../assets/MainBefore.jpg';

function Alerts() {



    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { src: Chat, alt: "Chat Image", bgColor: "bg-white" },
        { src: "/docs/images/carousel/carousel-2.svg", alt: "Carousel 2", bgColor: "bg-white" },
        { src: MainBefore, alt: "Carousel 3", bgColor: "bg-white" },
        { src: "/docs/images/carousel/carousel-4.svg", alt: "Carousel 4", bgColor: "bg-white" },
        { src: "/docs/images/carousel/carousel-5.svg", alt: "Carousel 5", bgColor: "bg-white" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className={`relative w-full h-fit flex items-center justify-center transition-colors duration-1000 ${slides[activeIndex].bgColor}`}>
            <div id="animation-carousel" className="relative w-full max-w-2xl">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-xl shadow-yellow-100/100 ring-2 ring-gray-800">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={slide.src}
                                className="block w-full h-full object-cover"
                                alt={slide.alt}
                            />
                        </div>
                    ))}
                </div>
                {/* Slider controls */}
                <button
                    onClick={prevSlide}
                    type="button"
                    className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 bg-white/30 dark:bg-gray-800/30 rounded-full group hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 transform -translate-y-1/2"
                >
                    <svg className="w-4 h-4 text-white dark:text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>

                <button
                    onClick={nextSlide}
                    type="button"
                    className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 bg-white/30 dark:bg-gray-800/30 rounded-full group hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 transform -translate-y-1/2"
                >
                    <svg className="w-4 h-4 text-white dark:text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div className="flex gap-4 mt-6">
                <button className="ring-2 ring-amber-600 ring-inset px-4 py-2 rounded-lg bg-white text-blue-500 font-semibold shadow-md hover:bg-green-500 hover:text-white transition">
                    Subscribe
                </button>
                <button className="ring-2 ring-blue-500/50 ring-inset px-4 py-2 rounded-lg bg-white text-blue-500 font-semibold shadow-md hover:bg-blue-500 hover:text-white transition">
                    Subscribe
                </button>
            </div>
        </div>

    )
}

export default Alerts;