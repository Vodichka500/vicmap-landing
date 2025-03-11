'use client';

import type React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

type BenefitModalProps = {
    benefit: {
        title: string
        description: string
        icon: React.ElementType
        iconColor: string
        iconBgColor: string
        detailedDescription?: string
        features?: string[]
    }
    isOpen: boolean
    onClose: () => void
}

export function BenefitModal({ benefit, isOpen, onClose }: BenefitModalProps) {
    const Icon = benefit.icon;

    return (
        <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
            <DialogContent className={clsx("sm:max-w-[500px] md:max-w-[600px] p-0 overflow-hidden bg-white rounded-2xl dark:bg-gray-300")}>
                <DialogHeader className="p-6 pb-0">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 flex items-center justify-center rounded-xl ${benefit.iconBgColor}`}>
                                <Icon className={`h-6 w-6 ${benefit.iconColor}`} />
                            </div>
                            <DialogTitle className="text-2xl font-bold">{benefit.title}</DialogTitle>
                        </div>

                    </div>
                </DialogHeader>

                <div className="p-6 ">
                    <DialogDescription className="text-base mb-6">
                        {benefit.detailedDescription || benefit.description}
                    </DialogDescription>

                    {benefit.features && benefit.features.length > 0 && (
                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Key Features</h4>
                            <ul className="space-y-2">
                                {benefit.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-2"
                                    >
                                        <div className={`mt-1 h-2 w-2 rounded-full ${benefit.iconBgColor}`} />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mt-8 flex justify-end">
                        <Button
                            className={`rounded-xl ${benefit.iconBgColor} text-gray-600 hover:text-white hover:opacity-90 transition-opacity`}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

