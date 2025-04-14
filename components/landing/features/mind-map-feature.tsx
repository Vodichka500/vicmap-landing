"use client"

import { motion } from "framer-motion"
import Image from 'next/image';

export default function MindMapFeature() {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-4 text-center absolute top-6"
            >
                Mind Map Your Ideas
            </motion.h2>

            <div className="relative w-[70%] h-full min-h-[400px] rounded-xl mx-auto overflow-hidden"> {/* min-h можно настроить */}
                <Image
                    src="/mind-map.jpg"
                    alt="Preview of apps dashboard"
                    fill
                    className="object-contain " // или object-contain, если хочешь без обрезки
                    priority
                />

            </div>
        </div>
    )
}

