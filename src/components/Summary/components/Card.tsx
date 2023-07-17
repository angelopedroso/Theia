import { motion } from 'framer-motion'
import { IconProps } from 'phosphor-react'

import React from 'react'

export interface CardProps {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  iconColor?: string
  title: string
  data: string | number
}

export function Card({ iconColor = 'text-indigo-600', ...props }: CardProps) {
  return (
    <motion.div className="flex min-h-[8rem] min-w-[15rem] flex-col gap-3 rounded-md bg-slate-850 p-6 shadow-md">
      <header className="flex items-start justify-between self-stretch">
        <h3 className="font-main text-base font-medium text-gray-100">
          {props.title}
        </h3>
        <div className="p-1">
          <props.Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </header>
      <main>
        <strong className="font-menu text-4xl font-bold text-white">
          {props.data}
        </strong>
      </main>
    </motion.div>
  )
}
