'use client'

import { AnimatePresence, type Variants, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface GradualSpacingProps {
	text: string
	duration?: number
	delayMultiple?: number
	framerProps?: Variants
	className?: string
}

export default function GradualSpacing({
	text,
	duration = 0.5,
	delayMultiple = 0.04,
	framerProps = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 }
	},
	className
}: GradualSpacingProps) {
	return (
		<div className="flex justify-center space-x-1">
			<AnimatePresence>
				{text.split('').map((char, index) => (
					<motion.h1
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={framerProps}
						transition={{ duration, delay: index * delayMultiple }}
						className={cn('drop-shadow-sm ', className)}
					>
						{char === ' ' ? <span>&nbsp;</span> : char}
					</motion.h1>
				))}
			</AnimatePresence>
		</div>
	)
}
