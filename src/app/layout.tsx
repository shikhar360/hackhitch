import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar/page'



export const metadata: Metadata = {
  title: 'HackHitch',
  description: 'Made with 💜 by Shikhar , Kamal',
  icons: [{ rel: 'icon', url: '/img/a.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={""}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
