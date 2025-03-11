"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MindMapFeature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas dimensions
        const resizeCanvas = () => {
            const parent = canvas.parentElement
            if (!parent) return

            canvas.width = parent.clientWidth
            canvas.height = parent.clientHeight

            drawMindMap(ctx, canvas.width, canvas.height)
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        return () => {
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    const drawMindMap = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // Clear canvas
        ctx.clearRect(0, 0, width, height)

        // Center point
        const centerX = width / 2
        const centerY = height / 2

        // Colors
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#0070f3"
        const secondaryColor = "#64748b"
        const tertiaryColor = "#94a3b8"

        // Draw central node
        ctx.beginPath()
        ctx.arc(centerX, centerY, 40, 0, Math.PI * 2)
        ctx.fillStyle = primaryColor
        ctx.fill()

        // Draw text in central node
        ctx.font = "bold 14px sans-serif"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("GOAL", centerX, centerY)

        // Draw branches and nodes
        const branches = [
            { angle: -Math.PI / 6, length: 120, text: "Planning", color: secondaryColor },
            { angle: Math.PI / 6, length: 120, text: "Execution", color: secondaryColor },
            { angle: Math.PI / 2 + Math.PI / 6, length: 120, text: "Review", color: secondaryColor },
            { angle: Math.PI + Math.PI / 6, length: 120, text: "Learning", color: secondaryColor },
            { angle: -Math.PI / 2 - Math.PI / 6, length: 120, text: "Growth", color: secondaryColor },
        ]

        branches.forEach((branch) => {
            const endX = centerX + Math.cos(branch.angle) * branch.length
            const endY = centerY + Math.sin(branch.angle) * branch.length

            // Draw branch line
            ctx.beginPath()
            ctx.moveTo(centerX, centerY)
            ctx.lineTo(endX, endY)
            ctx.strokeStyle = branch.color
            ctx.lineWidth = 3
            ctx.stroke()

            // Draw node
            ctx.beginPath()
            ctx.arc(endX, endY, 25, 0, Math.PI * 2)
            ctx.fillStyle = branch.color
            ctx.fill()

            // Draw text in node
            ctx.font = "12px sans-serif"
            ctx.fillStyle = "white"
            ctx.fillText(branch.text, endX, endY)

            // Draw sub-branches
            const subBranches = 2
            const subBranchLength = 70

            for (let i = 0; i < subBranches; i++) {
                const subAngle = branch.angle + (i === 0 ? -0.3 : 0.3)
                const subEndX = endX + Math.cos(subAngle) * subBranchLength
                const subEndY = endY + Math.sin(subAngle) * subBranchLength

                // Draw sub-branch line
                ctx.beginPath()
                ctx.moveTo(endX, endY)
                ctx.lineTo(subEndX, subEndY)
                ctx.strokeStyle = tertiaryColor
                ctx.lineWidth = 2
                ctx.stroke()

                // Draw sub-node
                ctx.beginPath()
                ctx.arc(subEndX, subEndY, 15, 0, Math.PI * 2)
                ctx.fillStyle = tertiaryColor
                ctx.fill()
            }
        })
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-4 text-center absolute top-6"
            >
                Mind Map Your Ideas
            </motion.h2>

            <div className="w-full h-full">
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>
        </div>
    )
}

