import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, DollarSign, Infinity, Map, Target } from 'lucide-react';
import { clsx } from 'clsx';
import { stats } from '@/components/landing/constants';
import { useInView } from 'react-intersection-observer';

interface CarouselProps {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Carousel({activeIndex, setActiveIndex} : CarouselProps){
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 300
    });

    const nextSlide = useCallback(() => {
        setActiveIndex((current) => (current === stats.length - 1 ? 0 : current + 1));
    }, [stats.length]);

    const prevSlide = useCallback(() => {
        setActiveIndex((current) => (current === 0 ? stats.length - 1 : current - 1));
    }, [stats.length]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current && touchEndX.current) {
            const diff = touchStartX.current - touchEndX.current;
            const threshold = 50;

            if (diff > threshold) {
                nextSlide();
            } else if (diff < -threshold) {
                prevSlide();
            }
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const getPrevIndex = (current: number) => (current === 0 ? stats.length - 1 : current - 1);
    const getNextIndex = (current: number) => (current === stats.length - 1 ? 0 : current + 1);

    useEffect(() => {
       if(inView){
           if (!isPaused) {
               autoScrollInterval.current = setInterval(() => {
                   nextSlide();
               }, 5000);
           }

           return () => {
               if (autoScrollInterval.current) {
                   clearInterval(autoScrollInterval.current);
               }
           };
       }
    }, [isPaused, nextSlide]);


    return (
        <div
            className="relative w-full max-w-5xl mx-auto max-lg:mt-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-roledescription="carousel"
            aria-label="Key statistics carousel"
            ref={ref}
        >
            <div className="flex items-center justify-center w-full h-[300px] md:h-[400px] relative">
                {stats.map((stat, index) => {
                    const isPrev = index === getPrevIndex(activeIndex);
                    const isActive = index === activeIndex;
                    const isNext = index === getNextIndex(activeIndex);
                    const isVisible = isPrev || isActive || isNext;

                    let zIndex = 0;
                    if (isActive) zIndex = 30;
                    else if (isPrev || isNext) zIndex = 20;

                    let position = '';
                    let transform = '';
                    let opacity = 'opacity-0';

                    if (isActive) {
                        position = 'absolute left-1/2 top-1/2';
                        transform = '-translate-x-1/2 -translate-y-1/2 scale-100';
                        opacity = 'opacity-100';
                    } else if (isPrev) {
                        position = 'absolute left-1/2 top-1/2 max-380:hidden';
                        transform = '-translate-x-[85%] max-sm:-translate-x-[70%] -translate-y-1/2 scale-[0.85]';
                        opacity = 'opacity-50';
                    } else if (isNext) {
                        position = 'absolute left-1/2 top-1/2 max-380:hidden';
                        transform = '-translate-x-[15%] max-sm:-translate-x-[30%] -translate-y-1/2 scale-[0.85]';
                        opacity = 'opacity-50';
                    }

                    return (
                        <div
                            key={stat.id}
                            className={clsx(
                                position,
                                transform,
                                opacity,
                                'w-[280px] md:w-[400px] h-[200px] md:h-[280px] transition-all duration-500 ease-in-out',
                                'rounded-3xl shadow-xl',
                                stat.color,
                                isVisible ? 'block' : 'hidden'
                            )}
                            style={{ zIndex }}
                        >
                            <div className="p-6 md:p-8 text-white h-full">
                                <div
                                    className="flex flex-col items-center justify-center h-full gap-4 text-center">
                                    <div className="bg-white/20 p-3 rounded-full">{stat.icon}</div>
                                    <div
                                        className={clsx('transition-opacity duration-300', !isActive && 'opacity-0')}>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">{stat.title}</h3>
                                        <p className="text-sm md:text-base opacity-90">{stat.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>


            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 max-mobile:bottom-0 max-mobile:top-auto -translate-y-1/2 bg-white/90 hover:bg-white text-purple-950 p-2 rounded-full transition-colors duration-300 z-30"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 max-mobile:bottom-0 max-mobile:top-auto -translate-y-1/2 bg-white/90 hover:bg-white text-purple-950 p-2 rounded-full transition-colors duration-300 z-30"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    )
}