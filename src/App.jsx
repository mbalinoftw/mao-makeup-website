import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Services from './components/Services'

export default function App() {

  // rosa #E5C5C6 #D1AAAB #D3898A negro #363636 #615C60

  return (
    <div className='bg-[#E5C5C6]/30'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
    </div>
  )
}
