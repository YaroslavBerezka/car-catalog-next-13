import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReactQueryProvider from './ReactQueryProvider'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: '/icon.webp',
  title: 'Car Catalog',
  description: 'Catalog car, that includes price, pages, img',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <ReactQueryProvider>
      <html lang="en">
          <body className={inter.className}>
          <div>{children}</div>
        </body>
      </html>
    </ReactQueryProvider>   
      
  )
}
