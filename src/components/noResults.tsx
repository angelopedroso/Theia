'use client'

import { filterTableContext } from '@/contexts/filterContext'
import { SmileyXEyes } from '@phosphor-icons/react'
import React, { useContext } from 'react'

export function NoResults() {
  const { search } = useContext(filterTableContext)

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <SmileyXEyes size={250} weight="fill" className="text-slate-600" />
      <span className="text-lg font-medium text-gray-300">
        No results for {search}. Try searching another word.{' '}
      </span>
    </div>
  )
}
