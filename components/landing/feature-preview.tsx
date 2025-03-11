"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Map, GitBranch, PieChart, BrainCircuit } from "lucide-react"


// Feature components
import RoadmapFeature from "./features/roadmap-feature"
import MindMapFeature from "./features/mind-map-feature"
import ProgressTrackerFeature from "./features/progress-tracker-feature"
import { clsx } from 'clsx';
import AiFeature from '@/components/landing/features/ai-feature';

type Feature = "roadmap" | "mindmap" | "progress" | "ai"

export default function FeaturePreview() {
    const [activeFeature, setActiveFeature] = useState<Feature>("ai")

    return (
        <section id="preview" className="container mx-auto px-4 py-12 scroll-mt-20">
            {/* TODO: Make other Title and description */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-600 dark:text-gray-200">Preview <span className="text-purple-500">Features</span></h2>
                <p className="md:text-xl  text-muted-foreground max-w-2xl mx-auto">
                    Explore the powerful tools designed to accelerate your learning journey and help you achieve your
                    goals.
                </p>
            </div>
            {/* Display Area */}
            <div className="mt-24 grid lg:grid-cols-4 gap-4">

                {/* Feature Cards */}
                {/* TODO: Small icons with title to mobile phones */}
                <div className="max-sm:order-2 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-6 ">
                    <FeatureCard
                        title="AI Integration"
                        description="Generate personalized roadmaps and mind maps with AI-driven guidance."
                        icon={<BrainCircuit className="h-6 w-6" />}
                        isActive={activeFeature === 'ai'}
                        onClick={() => setActiveFeature('ai')}
                        i={0}
                    />
                    <FeatureCard
                        title="Roadmap"
                        description="Plan your journey with interactive milestones"
                        icon={<Map className="h-6 w-6" />}
                        isActive={activeFeature === 'roadmap'}
                        onClick={() => setActiveFeature('roadmap')}
                        i={1}
                    />
                    <FeatureCard
                        title="Mind Map"
                        description="Visualize your ideas with connected branches"
                        icon={<GitBranch className="h-6 w-6" />}
                        isActive={activeFeature === 'mindmap'}
                        onClick={() => setActiveFeature('mindmap')}
                        i={2}
                    />
                    <FeatureCard
                        title="Progress Tracker"
                        description="Monitor your achievements with visual metrics"
                        icon={<PieChart className="h-6 w-6" />}
                        isActive={activeFeature === 'progress'}
                        onClick={() => setActiveFeature('progress')}
                        i={3}
                    />
                </div>

                <div
                    className=" lg:col-span-3  relative w-full h-full bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                        >
                            {activeFeature === 'ai' && <AiFeature />}
                            {activeFeature === 'roadmap' && <RoadmapFeature />}
                            {activeFeature === 'mindmap' && <MindMapFeature />}
                            {activeFeature === 'progress' && <ProgressTrackerFeature />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    i: number;
}

const colors = ["bg-pink-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"]

function FeatureCard({i, title, description, icon, isActive, onClick }: FeatureCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={clsx(
                'cursor-pointer rounded-xl p-6 max-lg:p-3 shadow-md transition-all duration-200',
                isActive ? colors[i] + ' text-primary-foreground shadow-lg dark:text-zinc-900' : 'bg-card dark:bg-zinc-900 text-card-foreground hover:shadow-lg'
            )}
        >
            <div className="grid grid-cols-4 items-center text-center gap-4">
                <div
                    className={clsx('p-3 rounded-full', isActive ? 'bg-primary-foreground/20' : 'bg-primary/10')}>
                    {icon}
                </div>
                <div className="col-span-3">
                    <h3 className="text-lg max-md:text-xs font-semibold">{title}</h3>
                    <p className="text-sm opacity-90 max-lg:hidden">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

