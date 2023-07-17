'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Card } from './components/Card'
import { SignOut, UserList, UsersThree } from 'phosphor-react'

export function Summary() {
  const carouselRef = useRef<HTMLElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0)

  useEffect(() => {
    if (!carouselRef.current) return

    setCarouselWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth,
    )
  }, [])

  return (
    <motion.section
      ref={carouselRef}
      className="-mt-16 cursor-grab overflow-hidden px-8"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="flex gap-8 md:justify-between lg:justify-around"
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
        initial={{ x: 30 }}
        animate={{ x: 0 }}
      >
        <Card Icon={UsersThree} title="Group" data={12} />
        <Card Icon={UserList} title="Participants" data={12} />
        <Card Icon={SignOut} title="Banneds" data={12} />
      </motion.div>
    </motion.section>
  )
}
