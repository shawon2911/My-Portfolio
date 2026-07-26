import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import SnakeCursor from '@/Components/ui/SnakeCursor';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hosenuzzaman - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnakeCursor />
        {children}
      </body>
    </html>
  )
}