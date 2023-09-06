import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahmed | Full-Stack Developer',
  description: 'Ahmed Shebl junior Full-Stack Developer With Next.JS | TypeScript | MongoDB | Prisma | ',
  icons:{icon :'/icon.png'}
}

export default function RootLayout({children,}:{ children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 relative`}>
      <Header/>
        <div className="bg-[#fbe2e3] absolute top[-6rem] -z-10
          right-[10rem] h-[32rem] w-[32rem] sm:w[68rem]
          rounded-full blur-[9rem]
          ">        
        </div>
        <div className="bg-[#dbd7fb] absolute top[0rem] -z-10
          left-[-15rem] md:left-[-16rem] lg:left-[-10rem] xl:left-[-5rem] 2xl:left-[15rem]
          h-[32rem] w-[50rem] sm:w[68rem]
          rounded-full blur-[9rem] 
          ">        
        </div>
          {children}
      </body>
    </html>
  )
}
