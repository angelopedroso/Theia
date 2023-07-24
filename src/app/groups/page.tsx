import { Header } from '@/components/ui/header'
import React from 'react'

export interface pageProps {}

export default function Groups(props: pageProps) {
  return (
    <div className="flex h-full flex-col space-y-14 p-8">
      <Header title="Groups" subtitle="List of all active groups" />
    </div>
  )
}
