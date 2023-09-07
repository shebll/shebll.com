import About from '@/components/About'
import Inter from '@/components/Inter'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex gap-[180px] flex-col px-6">
      <Inter/>
      <About/>
      <Skills/>
    </main>
  )
}
