import { clsx } from 'clsx';
import InfinityComponent from '@/components/landing/animatedInfinity/infinity';
import React, { useEffect, useState } from 'react';
import type { LegacyRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatsProps {
    activeIndex: number;
}

export default function Stats({activeIndex} : StatsProps) {
    const { ref, inView, entry } = useInView({
        threshold: 0.5,
        delay: 300
    });


    const [count, setCount] = useState(0);
    useEffect(() => {
        if (inView) {
            let startTime: number | null = null;
            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const newCount = Math.min((progress / 4000) * 10000, 10000); // 4s duration to reach 10000
                setCount(newCount);
                if (progress < 4000) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        } else {
            setCount(0); // Reset count when not in view
        }
    }, [inView]);

    return (
        <div className="flex justify-center items-center relative w-full max-w-5xl mx-auto">
            <div
                ref={ref}
                className={clsx('transition-all duration-500 overflow-hidden opacity-0 max-mobile:min-h-[220px] flex justify-center items-center', activeIndex === 0 ? 'opacity-100' : 'absolute')}>
                <span className="block text-8xl max-mobile:text-6xl font-bold text-blue-500">{Math.floor(count)}+</span>
            </div>

            <div
                className={clsx('transition-opacity duration-500 overflow-hidden opacity-0', activeIndex === 1 ? 'opacity-100' : 'absolute')}>
                <div className="flex flex-col items-center justify-center overflow-hidden">
                    <div className="">
                        <img src="/diagram.svg" alt="Diagram" />
                    </div>

                    <div className="mt-8 mx-auto flex gap-4">
                        <div className="flex gap-2 items-center">
                            <div className="w-5 h-5 bg-pink-500 rounded-md" />
                            Success Rate
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-md" />
                            Other
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={clsx('transition-all duration-500 overflow-hidden opacity-0 max-mobile:min-h-[220px] flex justify-center items-center', activeIndex === 2 ? 'opacity-100' : `absolute`)}>
                <InfinityComponent />
            </div>
            <div
                className={clsx('flex transition-all duration-500 overflow-hidden opacity-0 flex justify-center items-center', activeIndex === 3 ? 'opacity-100' : `absolute`)}>
                <div className="">
                    <img src="/diagram2.svg" alt="Diagram" />
                </div>
            </div>
            <div
                className={clsx('flex transition-all duration-500 overflow-hidden opacity-0 max-mobile:min-h-[220px] flex justify-center items-center', activeIndex === 4 ? 'opacity-100' : `absolute`)}>
                <div className="relative">
                    <div className="font-bold text-green-500 text-8xl max-mobile:text-6xl">
                        {'>'} 1000$
                    </div>
                </div>
            </div>
        </div>

    )
}