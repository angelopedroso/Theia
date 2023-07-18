import type { Metadata } from 'next'
import Providers from './provider'

import { SideMenu } from '@/components/SideMenu'
import './globals.css'

// eslint-disable-next-line camelcase
import { Inter, DM_Sans, Open_Sans } from 'next/font/google'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SideMenu>{children}</SideMenu>
        </Providers>
      </body>
    </html>
  )
}
