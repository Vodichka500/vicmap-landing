'use client';

import type React from 'react';
import { useState} from 'react';
import { clsx } from 'clsx';
import Carousel from '@/components/landing/carousel/Carousel';
import {stats} from '@/components/landing/constants';
import Stats from '@/components/landing/carousel/Stats';


export default function DepthCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };


    // @ts-ignore
    return (
        <div className="h-[650px] sm:h-[750px] lg:h-auto">
            <div className="mt-28 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-600 dark:text-gray-200" >VicMap in <span className="text-pink-500">Numbers</span></h2>
                <p className="md:text-xl  text-muted-foreground max-w-2xl mx-auto">
                    Explore the powerful tools designed to accelerate your learning journey and help you achieve your
                    goals.
                </p>
            </div>
            <div className="relative max-mobile:py-10 px-8 container mx-auto grid lg:grid-cols-2 md:p-12 ">

                <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

               <Stats activeIndex={activeIndex}/>

                {/* Navigation Dots */}
                <div className="absolute max-lg:top-10 bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                    {stats.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={clsx(
                                'w-2 h-2 rounded-full transition-all duration-300',
                                activeIndex === index ? 'bg-zinc-900 dark:bg-white w-4 ' : 'bg-zinc-900/50 dark:bg-white/50'
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={activeIndex === index ? 'true' : 'false'}
                        />
                    ))}
                </div>
            </div>
        </div>);
}

