import { CheckFat } from '@phosphor-icons/react'
import React from 'react'
import { Alert, AlertTitle, AlertDescription } from './ui/alert'

export interface AlertModalProps {
  title?: string
  desc: string
}

export function AlertModal({ title = 'Successfully!', desc }: AlertModalProps) {
  return (
    <Alert className="fixed right-2 top-2 z-50 w-fit border-slate-875 bg-slate-855">
      <CheckFat weight="fill" className="h-4 w-4" color="#4ade80" />
      <AlertTitle className="text-green-400">{title}</AlertTitle>
      <AlertDescription className="text-white">{desc}</AlertDescription>
    </Alert>
  )
}
