'use client'

import { ErrorIcon } from '@/components/ErrorIcon404'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col items-center gap-9">
        <ErrorIcon />
        <div className="-mt-12 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-200">
            Oops! the page not found.
          </h1>
          <p className="text-sm text-gray-100">
            Or simply leverage the expertise of our consultation team.
          </p>
        </div>
        <Link
          href="/"
          className="w-fit rounded-lg bg-indigo-600 px-5 py-3 text-gray-200 transition-colors hover:bg-indigo-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
