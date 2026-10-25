import './App.css'
import { Suspense, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import type { Technology } from './Types/technology'
import TechnologyCards from './components/TechnologyCards'

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
        <TechnologyCards technologiesPromise={technologiesPromise} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
      </Suspense>
    </>
  )
}

export default App
