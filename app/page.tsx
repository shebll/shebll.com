import About from '@/components/About'
import Contact from '@/components/Contact'
import Divider from '@/components/Divider'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Inter from '@/components/Inter'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex gap-[180px] flex-col px-6 justify-center items-center">
      <Inter/>
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Resume/>
      <Divider/>
      <Contact/>
    </main>
  )
}
