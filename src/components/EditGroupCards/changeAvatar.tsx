import React, { ChangeEvent, useRef, useState } from 'react'
import { DefaultGroupIcon } from '../groupIcon'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
  Label,
} from '@/components/ui'

export interface ChangeAvatarProps {
  isAdmin: boolean
  imageUrl?: string
  imageUrlFormReturn: (url: string) => void
}

export function ChangeAvatar({
  isAdmin = false,
  imageUrl = '',
  imageUrlFormReturn,
}: ChangeAvatarProps) {
  const [avatar, setAvatar] = useState<string>('')
  const inputImageRef = useRef<HTMLInputElement>(null)

  function handleAvatarChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const file = URL.createObjectURL(e.target.files.item(0) as Blob)

      if (file) {
        setAvatar(file)

        const reader = new FileReader()

        reader.readAsDataURL(e.target.files.item(0) as Blob)

        reader.onloadend = () => {
          const wordCut = 'base64,'
          const formattedBase64 = String(reader.result).indexOf(wordCut)
          imageUrlFormReturn(
            String(reader.result).substring(formattedBase64 + wordCut.length),
          )
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-start space-y-1 xs:items-center md:flex-row md:space-y-0">
      <div className="w-auto md:w-52">
        <Label className="text-base leading-6 text-slate-300">Avatar</Label>
      </div>

      <div className="flex flex-1 items-center gap-5">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar || imageUrl} />
          <AvatarFallback className="bg-gray-500">
            <DefaultGroupIcon />
          </AvatarFallback>
        </Avatar>
        <Input
          type="file"
          accept="image/png"
          className="hidden"
          ref={inputImageRef}
          onChangeCapture={handleAvatarChange}
        />
        {isAdmin && (
          <Button
            variant={'outline'}
            onClick={() => inputImageRef.current?.click()}
            className="border-slate-700 bg-transparent text-sm font-medium text-indigo-600 shadow-md hover:bg-indigo-600 hover:text-white"
          >
            Change
          </Button>
        )}
      </div>
    </div>
  )
}
