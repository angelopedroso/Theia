'use client'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { Card } from './components/Card'
import { Pulse, SignOut, UserList, UsersThree } from '@phosphor-icons/react'
import { DataTotalSummaryProps } from '@/@types/totalSummary'
import { useCarousel } from '@/hooks/useCarousel'
import { redirect } from 'next/navigation'

interface SummaryProps {
  data: DataTotalSummaryProps
}

export function Summary({ data }: SummaryProps) {
  const { carouselRef, carouselWidth } = useCarousel()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('login') !== 'true') {
        redirect('/login')
      }
    }
  }, [])

  return (
    <motion.section
      ref={carouselRef}
      className="-mt-24 cursor-grab overflow-hidden pr-0 sm:px-8"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="flex gap-8 md:justify-between lg:justify-around"
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
        initial={{ x: 30 }}
        animate={{ x: 0 }}
      >
        <Card Icon={UsersThree} title="Groups" data={data.totalGroups} />
        <Card
          Icon={UserList}
          iconColor="text-green-500"
          title="Participants"
          data={data.totalParticipants}
        />
        <Card
          Icon={SignOut}
          iconColor="text-red-500"
          title="Banneds"
          data={data.totalBlacklist}
        />
        <Card
          Icon={Pulse}
          iconColor="text-sky-500"
          title="Commands"
          desc="Commands executed"
          data={data.totalLogs}
        />
      </motion.div>
    </motion.section>
  )
}
