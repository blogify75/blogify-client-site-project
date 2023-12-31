import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './homeComponents/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'blogify',
  description: 'blog site and affiliate marketing platform.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
