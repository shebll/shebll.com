import './globals.css'
import { Inter } from 'next/font/google'

import ActiveSectionContext from '@/context/active-section-context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemSwitch from '@/components/ThemeSwitch'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed | Software Engineer Front-End',
  description: 'Ahmed Shebl junior Software Engineer Front-End Developer With Next.JS | TypeScript | MongoDB | Prisma | Framer-Motion',
  icons:{icon :'/personalImages/shebllImage.png'}
}

export default function RootLayout({children,}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 relative dark:bg-gray-900 dark:text-gray-50`}>
        <div className="bg-[#ffccce] absolute -z-10
          right-[5rem] top[-6rem]
          md:right-[10rem] h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem]
          dark:bg-[#946263]
          ">        
        </div>
        <div className="bg-[#dbd7fb] absolute top[0rem] -z-10
          left-[-15rem] md:left-[-16rem] lg:left-[-10rem] xl:left-[-5rem] 2xl:left-[5rem]
          h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem] 
          dark:bg-[#696394]
          ">        
        </div>
        <ActiveSectionContext>
          <Toaster position='bottom-center'/>
          <Header/>
          {children}
          <Footer/>
        </ActiveSectionContext>
        <ThemSwitch/>
      </body>
    </html>
  )
}
