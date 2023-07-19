'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Card } from './components/Card'
import { Pulse, SignOut, UserList, UsersThree } from '@phosphor-icons/react'

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
      className="-mt-16 cursor-grab overflow-hidden"
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
        <Card
          Icon={UserList}
          iconColor="text-green-500"
          title="Participants"
          data={12423}
        />
        <Card
          Icon={SignOut}
          iconColor="text-red-500"
          title="Banneds"
          data={12}
        />
        <Card
          Icon={Pulse}
          iconColor="text-sky-500"
          title="Commands"
          desc="Commands executed"
          data={123243}
        />
      </motion.div>
    </motion.section>
  )
}
