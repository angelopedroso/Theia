import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export interface OverlayProps {
  children: ReactNode
  close: () => void
}

export function Overlay({ close, children }: OverlayProps) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/60"
      onClick={close}
      variants={{
        open: { backgroundColor: 'rgba(0,0,0,0.6)' },
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
