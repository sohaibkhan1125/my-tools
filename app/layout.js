import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Latest Tools',
  description: 'Latest Online Tools for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
