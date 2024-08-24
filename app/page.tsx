import Intro from '@/components/2. Intro'
import About from '@/components/3. About'
import Project from '@/components/4. Projects'
import Experience from '@/components/5. Experience'
import Seperator from '@/components/Seperator'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Seperator /> 
      <About />
      <Seperator /> 
      <Project />
      <Seperator /> 
      <Experience />
    </main>
  )}
