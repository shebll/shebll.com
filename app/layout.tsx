import './globals.css'
import { Inter } from 'next/font/google'

import ActiveSectionContext from '@/context/active-section-context'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed | Full-Stack Developer',
  description: 'Ahmed Shebl junior Full-Stack Developer With Next.JS | TypeScript | MongoDB | Prisma | ',
  icons:{icon :'/shebllImage.jpeg'}
}

export default function RootLayout({children,}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 relative`}>
        <div className="bg-[#ffccce] absolute top[-6rem] -z-10
          right-[5rem]
          md:right-[10rem] h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem]
          ">        
        </div>
        <div className="bg-[#dbd7fb] absolute top[0rem] -z-10
          left-[-15rem] md:left-[-16rem] lg:left-[-10rem] xl:left-[-5rem] 2xl:left-[5rem]
          h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem] 
          ">        
        </div>
        <ActiveSectionContext>
          <Header/>
          {children}
        </ActiveSectionContext>
      </body>
    </html>
  )
}
