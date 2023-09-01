'use client'

import React, { useState } from 'react'
import { Header } from '@/components/ui'
import { ChangeAvatar } from './changeAvatar'
import { GroupSettingsForm } from './groupSettingsForm'

export interface EditGroupSettingsProps {
  data: GroupsProps
}

export function EditGroupSettings({ data }: EditGroupSettingsProps) {
  const [imageForm, setImageForm] = useState<string>('')

  function hangleImageForm(url: string) {
    setImageForm(url)
  }

  return (
    <div className="h-full w-full space-y-10 rounded-lg bg-slate-850 p-6 shadow-md lg:w-4/5">
      <div>
        <div className="mb-6 space-y-6">
          <Header title="General Settings" className="mb-0" />
          <div className="-mx-6 h-px bg-slate-750" />
        </div>
        <ChangeAvatar
          imageUrl={data.image_url}
          isAdmin={false}
          imageUrlFormReturn={hangleImageForm}
        />
      </div>
      <div>
        <div className="mb-6 space-y-4">
          <Header
            title="Group informations"
            subtitle="Update some group information."
            className="mb-0 text-slate-400"
          />
          <div className="-mx-6 h-px bg-slate-750" />
        </div>
        <GroupSettingsForm data={data} imageData={imageForm} />
      </div>
    </div>
  )
}
