"use client"

import React from "react"
import { motion } from "framer-motion"

interface PageTemplateProps {
    children: React.ReactNode
    className?: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, className = "" }) => {
    return (
        <motion.div
            className={`min-h-screen ${className}`}
            initial={{
                opacity: 0,
                y: 60,
                scale: 0.95
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            exit={{
                opacity: 0,
                y: -30,
                scale: 1.02
            }}
            transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                bounce: 0.3,
                duration: 0.6
            }}
        >
            {children}
        </motion.div>
    )
}

export default PageTemplate