import type { Metadata } from 'next'
import Providers from './provider'

import { SideMenu } from '@/components/SideMenu'
import './globals.css'

// eslint-disable-next-line camelcase
import { Inter, DM_Sans, Open_Sans } from 'next/font/google'
import { FilterTableProvider } from '@/contexts/filterContext'
import { configDotenv } from 'dotenv'
import { getDBData } from '@/api/getDBData'
import { Toaster } from '@/components/ui/toaster'

configDotenv()

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--menu-font',
})
export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--menu-font-sub',
})

export const metadata: Metadata = {
  title: {
    default: 'Theia',
    template: '%s | Theia',
  },
  description: 'Theia dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = await getDBData({
    uri: 'bot',
    revalidateTimeInSeconds: 0,
  })

  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 scrollbar-corner-slate-800 scrollbar-thumb-rounded hover:scrollbar-thumb-slate-500`}
      >
        <Providers>
          <FilterTableProvider>
            <SideMenu botData={data}>{children}</SideMenu>
            <Toaster />
          </FilterTableProvider>
        </Providers>
      </body>
    </html>
  )
}
