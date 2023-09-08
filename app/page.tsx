import About from '@/components/About'
import Divider from '@/components/Divider'
import Inter from '@/components/Inter'
import Projects from '@/components/Projects'
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
    </main>
  )
}
