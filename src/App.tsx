import './App.css'
import { Suspense, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import type { Technology } from './Types/technology'
import TechnologyCards from './components/TechnologyCards'
import YourStack from './components/YourStack'
import Footer from './components/Footer'

const Techfetch = async (): Promise<Technology[]> => {
  const response = await fetch('/technologies.json')
  const data = await response.json()
  return data;
}

function App() {
  const [technologiesPromise] = useState<Promise<Technology[]>>(Techfetch());
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);


  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <TechnologyCards technologiesPromise={technologiesPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
          <YourStack selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
