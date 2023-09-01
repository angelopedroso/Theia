'use client'

import React, { useContext } from 'react'
import { CardGroupsPage } from './cardGroupsPage'
import { motion } from 'framer-motion'
import { useCarousel } from '@/hooks/useCarousel'
import { modalContext } from '@/contexts/modalContext'
import { CardGroupModal } from './cardGroupModal'

export interface CardGroupListCarouselProps {
  data: GroupsProps[]
}

export function CardGroupListCarousel({ data }: CardGroupListCarouselProps) {
  const { carouselRef, carouselWidth } = useCarousel()
  const { toggle, name } = useContext(modalContext)

  if (toggle) {
    return data
      .filter((group) => group.name === name)
      .map((group) => {
        return <CardGroupModal key={group.id} group={group} />
      })
  }

  return (
    <motion.section
      ref={carouselRef}
      className="cursor-grab overflow-hidden py-8 pl-4 md:p-8"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="flex w-full items-center gap-8"
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
        initial={{ x: 30 }}
        animate={{ x: 0 }}
      >
        {data.map((group) => {
          return <CardGroupsPage key={group.id} data={group} />
        })}
      </motion.div>
    </motion.section>
  )
}
