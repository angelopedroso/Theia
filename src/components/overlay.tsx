import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export interface OverlayProps {
  children: ReactNode
  toggle: () => void
}

export function Overlay({ toggle, children }: OverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      onClick={toggle}
      variants={{
        open: { backgroundColor: 'rgba(0,0,0,0.9)' },
        closed: { backgroundColor: 'rgba(0,0,0,0)' },
      }}
      initial="closed"
      exit={'closed'}
      animate={'open'}
    >
      {children}
    </motion.div>
  )
}
