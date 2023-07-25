import { motion } from 'framer-motion'
import React from 'react'

export interface CardSettingsProps {
  name: string
  status: boolean
}

export function CardSettings(props: CardSettingsProps) {
  return (
    <motion.div
      className="flex items-center gap-2"
      variants={{
        open: { opacity: 1, transition: { staggerChildren: 0.2 } },
        closed: { opacity: 0 },
      }}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${
          props.status ? 'bg-green-500' : 'bg-indigo-600'
        }`}
      />
      <p className="font-menu text-sm font-medium text-slate-500">
        {props.name}
      </p>
    </motion.div>
  )
}
