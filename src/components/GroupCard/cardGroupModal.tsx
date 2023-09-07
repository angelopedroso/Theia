'use client'

import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { Overlay } from '../overlay'
import { CardFooter, Button } from '../ui'
import { CardGroup } from './cardGroup'
import { modalContext } from '@/contexts/modalContext'
import Link from 'next/link'

export interface CardGroupModalProps {
  group: GroupsProps
}

export function CardGroupModal({ group }: CardGroupModalProps) {
  const { toggleModal } = useContext(modalContext)

  return (
    <Overlay toggle={() => toggleModal('')}>
      <motion.div
        className="h-auto w-auto"
        onClick={(e) => e.stopPropagation()}
        variants={{
          open: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
          closed: {
            opacity: 0,
          },
        }}
      >
        <CardGroup data={group} isModal={true}>
          <CardFooter className="justify-center">
            <Link
              href={{
                pathname: `groups/${group.name
                  .toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/ /g, '-')}`,
                query: { groupId: group.id, name: group.name },
              }}
            >
              <Button
                variant={'outline'}
                className="w-32 border border-indigo-700 bg-indigo-600 text-white hover:border-indigo-600 hover:bg-indigo-500 hover:text-white"
              >
                Edit
              </Button>
            </Link>
          </CardFooter>
        </CardGroup>
      </motion.div>
    </Overlay>
  )
}
