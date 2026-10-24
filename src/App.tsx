import './App.css'
import { Suspense, useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import type { Technology } from './Types/technology'

const Techfetch = async (): Promise<Technology[]> => {
  const response = await fetch('/technologies.json')
  const data = await response.json()
  return data;
}

function App() {
const [technologiesPromise] = useState<Promise<Technology[]>>(Techfetch()); 


  return (
    <>
      <Navbar />
      <Hero />
      <Suspense>
        fallback={<div>Loading...</div>}
      </Suspense>
    </>
  )
}

export default App
