import { motion } from 'framer-motion'
import { IconProps } from '@phosphor-icons/react'

import React, { useRef } from 'react'
import { formatNumberToThousandSeparator } from '@/utils/formatValues'

export interface CardProps {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  iconColor?: string
  title: string
  data: string | number
  desc?: string
}

export function Card({
  iconColor = 'text-indigo-600',
  Icon,
  title = '',
  data = 0,
  desc = '',
}: CardProps) {
  const paragraphRef = useRef<HTMLParagraphElement>({} as HTMLParagraphElement)

  const paragraphHeight = paragraphRef.current?.offsetHeight

  return (
    <motion.div className="flex max-h-32 min-h-card min-w-card max-w-2sm flex-col gap-3 rounded-md bg-slate-850 p-6 shadow-md">
      <header className="flex items-start justify-between self-stretch">
        <h2 className="text-base font-medium text-gray-100">{title}</h2>
        <div className="p-1">
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </header>
      <main
        className={`flex ${
          paragraphHeight > 16 ? 'items-center' : 'items-baseline'
        } gap-2`}
      >
        <strong className="font-menu text-4xl font-bold text-white">
          {formatNumberToThousandSeparator(Number(data))}
        </strong>
        <p
          ref={paragraphRef}
          className="break-words font-menu text-xs text-gray-400"
        >
          {desc}
        </p>
      </main>
    </motion.div>
  )
}
