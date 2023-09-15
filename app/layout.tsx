'use client'

import './globals.css'
import { ThemeProvider } from 'next-themes';

// redux
import { Provider } from 'react-redux';

export default function RootLayout({children, ...rest}: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head />
      <body className={`flex justify-center items-center w-screen h-screen`}>
        <ThemeProvider attribute='class'>
          <div className={` w-full h-full `}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}