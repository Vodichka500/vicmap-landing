"use client"

import { motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import { clsx } from 'clsx';
import { useInView } from "react-intersection-observer";
import {benefits} from '@/components/landing/constants';
import { BenefitModal } from '@/components/landing/benefit-card';
import { useEffect, useState } from 'react';




export default function BenefitsSection() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1,
        delay: 300
    });


   return (
       <section id="benefits" className="container mx-auto py-10">
           <div className="max-sm:mt-12 mt-24  text-center mb-12">
               <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-gray-600 dark:text-gray-300">Your <span
                   className="text-green-500">Benefits</span></h2>
               <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto">
                   Powerful tools designed to accelerate your learning journey and help you achieve your goals.
               </p>
           </div>
           <div ref={ref} className="mt-24  grid md:grid-cols-2 lg:grid-cols-4 gap-4">
               {
                   benefits.map((benefit, index) => (
                       <BenefitCard key={index} benefit={benefit} index={index} inView={inView} />
                   ))
               }
           </div>
       </section>
   )
}

type BenefitCardProps = {
    benefit: {
        title: string
        description: string
        icon: React.ElementType
        iconColor: string
        iconBgColor: string
        darkTextColor: string
        hover: string
        detailedDescription?: string
        features?: string[]
    }
    index: number
    inView: boolean
}

export function BenefitCard({ benefit, index, inView }: BenefitCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col justify-between min-h-[400px] p-6 text-black bg-transparent `}
            >
                <div className="flex flex-col items-center">
                    <div className={`p-5 flex items-center justify-center mb-5 rounded-2xl ${benefit.iconBgColor}`}>
                        <benefit.icon className={`h-10 w-10 ${benefit.iconColor}`} />
                    </div>
                    <h3 className={clsx("text-xl font-semibold mb-3", benefit.darkTextColor)}>{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4 dark:text-white text-center">{benefit.description}</p>
                </div>
                <Button
                    variant="outline"
                    className={clsx(`rounded-2xl max-w-[200px] mx-auto transition-all duration-300 dark:bg-white`, benefit.hover)}
                    onClick={() => setIsModalOpen(true)}
                >
                    Learn more
                </Button>
            </motion.div>

            <BenefitModal benefit={benefit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
