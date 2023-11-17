import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black
       dark:bg-[#090908] dark:text-white h-full selection:bg-purple-400
       dark:selection:bg-purple-400`}
       > 
       <Navbar/>
        {children}
      </body>
    </html>
  )
}
