'use client'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {features} from '@/components/landing/constants';

export default function TopFeatures() {
    const controls = useAnimation();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1,
        delay: 300,

    });



    return (
        <motion.section
            id="features-section"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pb-16 px-4 bg-gradient-to-b from-background to-muted scroll-mt-20"
        >
            <div ref={ref} className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-600 dark:text-gray-300">Top <span className="text-blue-500">Features</span></h2>
                    <p className="md:text-xl  text-muted-foreground max-w-2xl mx-auto">
                        Powerful tools designed to accelerate your learning journey and help you achieve your goals.
                    </p>
                </div>

                <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        features.map((feature, index) => (
                            <div
                                className={`group bg-card ${feature.color} rounded-xl p-6 shadow-sm text-black transition-all duration-300 hover:shadow-xl hover:ring-4 ${feature.hoverBorderColor} hover:ring-opacity-50`}>
                                <div
                                    className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                                    <feature.icon
                                        className={`h-6 w-6 text-primary transition-all duration-300 ${feature.hoverIconColor}`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground mb-4">
                                    <span className="font-medium text-foreground">{feature.subtitle}: </span>
                                    {feature.description}
                                </p>
                            </div>
                        ))
                        }
                </div>
            </div>
        </motion.section>
    );
}
