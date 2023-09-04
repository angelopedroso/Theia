'use client'

import { ColumnDef } from '@tanstack/react-table'

import { ColumnSortingButton } from '@/components/ui/columnSortingButton'
import { formatDate } from '@/utils/formatValues'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Avatar, AvatarImage, Button } from '@/components/ui'
import Image from 'next/image'

export type BanLogTableProps = {
  id: string
  user_phone: string
  user_name: string
  chat_name: string
  date_time: string
  message?: string
  image?: string
  reason: 'malicious' | 'link'
}

export const columns: ColumnDef<BanLogTableProps>[] = [
  {
    accessorKey: 'user_name',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Username" />
    },
    cell: ({ row }) => (
      <div className="flex flex-col text-sm text-gray-200">
        <p>{row.getValue('user_name')}</p>
        <span className="text-xs text-gray-400">{row.original.user_phone}</span>
      </div>
    ),
  },
  {
    accessorKey: 'chat_name',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Chat" />
    },
    cell: ({ row }) => (
      <span className="text-sm text-gray-200">{row.getValue('chat_name')}</span>
    ),
  },
  {
    accessorKey: 'message',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
            Message?
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      const hasMessage = !!row.getValue('message')

      return (
        <>
          {hasMessage && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'ghost'}
                  className="w-60 overflow-hidden text-ellipsis whitespace-nowrap rounded-md border px-6 py-3"
                >
                  {row.getValue('message')}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <p className="text-base text-gray-200">
                  {row.getValue('message')}
                </p>
              </DialogContent>
            </Dialog>
          )}
        </>
      )
    },
  },
  {
    accessorKey: 'image',
    header: () => {
      return (
        <div>
          <h3 className="whitespace-nowrap text-sm font-medium leading-normal text-gray-100">
            Image?
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      const hasImage = !!row.getValue('image')
      const formattedImage = `data:image/png;base64,${row.original.image}`

      return (
        <>
          {hasImage && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'ghost'}
                  className="h-10 w-10 p-0 hover:bg-transparent focus-visible:ring-offset-0"
                >
                  <Avatar className="h-full w-full hover:bg-transparent">
                    <AvatarImage
                      src={formattedImage}
                      alt="Possibly malicious image"
                      className="transition-all duration-300 hover:blur-sm"
                    />
                  </Avatar>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="rounded-md pt-4">
                  <Image
                    src={formattedImage}
                    alt="Possibly malicious image"
                    width={500}
                    height={500}
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </>
      )
    },
  },
  {
    accessorKey: 'reason',
    header: ({ column }) => {
      return <ColumnSortingButton isGroup column={column} title="Chat" />
    },
    cell: ({ row }) => {
      const reason = row.original.reason

      return <span className="text-sm capitalize text-gray-200">{reason}</span>
    },
  },
  {
    accessorKey: 'date_time',
    header: () => {
      return (
        <div>
          <h3 className="text-sm font-medium leading-normal text-gray-100">
            Datetime
          </h3>
        </div>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="flex w-fit">
          <span className="text-sm text-gray-200">{`${formatDate(
            row.original.date_time,
          )}`}</span>
        </div>
      )
    },
  },
]
