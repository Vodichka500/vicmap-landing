"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ProgressTrackerFeature() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(75)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    // Calculate circle properties
    const radius = 120
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-8 text-center"
            >
                Your Progress Tracker
            </motion.h2>

            <div className="relative">
                {/* Progress circle */}
                <svg width="300" height="300" viewBox="0 0 300 300">
                    {/* Background circle */}
                    <circle cx="150" cy="150" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="12" />

                    {/* Progress circle */}
                    <motion.circle
                        cx="150"
                        cy="150"
                        r={radius}
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        transform="rotate(-90 150 150)"
                    />

                    {/* Percentage text */}
                    <text
                        x="150"
                        y="150"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-4xl font-bold"
                        fill="var(--primary)"
                    >
                        <tspan x="150" dy="-10">
                            {progress}%
                        </tspan>
                        <tspan x="150" dy="30" fontSize="16">
                            Completed
                        </tspan>
                    </text>
                </svg>

                {/* Stats */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="flex justify-center gap-8 mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-2xl font-bold text-primary">15</p>
                            <p className="text-sm text-gray-500">Tasks Done</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-2xl font-bold text-primary">5</p>
                            <p className="text-sm text-gray-500">Tasks Left</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

