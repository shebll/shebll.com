import "./globals.css";
import { Inter } from "next/font/google";

import ActiveSectionContext from "@/context/active-section-context";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemSwitch from "@/app/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed | Software Engineer Front-End",
  description:
    "Ahmed Shebl junior Software Engineer Front-End Developer With Next.JS | TypeScript | MongoDB | Prisma | Framer-Motion",
  //VisualViewport:"width=device-width, initial-scale=1",
  icons: { icon: "/personalImages/shebllImage.png" },
};

const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 relative dark:bg-[#090c13] dark:text-gray-50 overflow-x-hidden`}
      >
        <div
          className="spotlight opacity-0 bg-[#ffccce] absolute -z-10
          right-[5rem] top[-6rem]
          md:right-[10rem] h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem]
          dark:bg-[#946263]
          "
        ></div>
        <div
          className="spotlight opacity-0 bg-[#dbd7fb] absolute top[0rem] -z-10
          left-[-15rem] md:left-[-16rem] lg:left-[-10rem] xl:left-[-5rem] 2xl:left-[5rem]
          h-[32rem] w-[32rem] sm:w-[68rem]
          rounded-full blur-[9rem] 
          dark:bg-[#696394]
          "
        ></div>
        <ActiveSectionContext>
          <Toaster position="bottom-center" />
          <Header />
          {children}
          <Footer />
        </ActiveSectionContext>
        <ThemSwitch />
      </body>
    </html>
  );
}
