'use client'

import React, { useState } from 'react'
import { CardGroup } from './cardGroup'
import { Overlay } from '@/components/overlay'
import { CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface CardGroupsPageProps {
  data: GroupsProps
}

export function CardGroupsPage({ data }: CardGroupsPageProps) {
  const [open, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <CardGroup data={data} toggle={openModal} />
      {open && (
        <Overlay close={closeModal}>
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
            <CardGroup data={data} isModal={true}>
              <CardFooter className="justify-center">
                <Link
                  href={{
                    pathname: `groups/${data.group_info.name
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/ /g, '-')}`,
                    query: { id: data.id },
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
              <Button
                variant={'ghost'}
                onClick={closeModal}
                className="absolute right-0 top-0 hover:bg-slate-700"
              >
                <X className="h-6 w-6 text-indigo-600" />
              </Button>
            </CardGroup>
          </motion.div>
        </Overlay>
      )}
    </>
  )
}
