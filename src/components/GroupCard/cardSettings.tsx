import React from 'react'

export interface CardSettingsProps {
  name: string
  status: boolean
}

export function CardSettings(props: CardSettingsProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-2 w-2 rounded-full ${
          props.status ? 'bg-green-500' : 'bg-indigo-600'
        }`}
      />
      <p className="font-menu text-sm font-medium text-slate-500">
        {props.name}
      </p>
    </div>
  )
}
