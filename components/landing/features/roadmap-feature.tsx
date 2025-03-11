"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle } from "lucide-react"

export default function RoadmapFeature() {
    const steps = [
        { id: 1, title: "Define Goals", completed: true },
        { id: 2, title: "Create Plan", completed: true },
        { id: 3, title: "Execute Tasks", completed: false, current: true },
        { id: 4, title: "Review Progress", completed: false },
        { id: 5, title: "Achieve Success", completed: false },
    ]

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Your Path to Success</h2>

            <div className="w-full max-w-3xl">
                <div className="relative">
                    {/* Progress line */}
                    <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200" />
                    <div className="absolute top-5 left-5 h-0.5 bg-primary" style={{ width: "40%" }} />

                    {/* Steps */}
                    <div className="flex justify-between relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center relative"
                            >
                                <div className="z-10 flex items-center justify-center">
                                    {step.completed ? (
                                        <CheckCircle className="w-10 h-10 text-primary fill-primary/20" />
                                    ) : step.current ? (
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                                        >
                                            <Circle className="w-10 h-10 text-primary stroke-[2.5px]" />
                                        </motion.div>
                                    ) : (
                                        <Circle className="w-10 h-10 text-gray-300" />
                                    )}
                                </div>
                                <div className="mt-3 text-center">
                                    <p
                                        className={`font-medium ${step.current ? "text-primary" : step.completed ? "text-gray-700" : "text-gray-400"}`}
                                    >
                                        {step.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center max-w-md">
                <h3 className="text-lg font-semibold mb-2">Currently Working On</h3>
                <p className="text-gray-600">
                    Execute your planned tasks systematically to make steady progress toward your goals.
                </p>
            </div>
        </div>
    )
}

