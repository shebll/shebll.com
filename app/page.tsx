import About from '@/components/About'
import Divider from '@/components/Divider'
import Inter from '@/components/Inter'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex gap-[180px] flex-col px-6 justify-center items-center">
      <Inter/>
      <Divider/>
      <About/>
      <Divider/>
      <Skills/>
    </main>
  )
}
