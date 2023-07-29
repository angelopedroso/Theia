'use client'

import { CircleNotch } from '@phosphor-icons/react'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <CircleNotch className="h-16 w-16 animate-spin text-indigo-600" />
    </div>
  )
}
