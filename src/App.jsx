import React from 'react'
import Navbar from "./components/Nabbar/Navbar.jsx"
import HeroSection from './components/Hero/HeroSection.jsx'
import About from './components/About/About.jsx'
import Project from './components/Projects/Project.jsx'

import "./App.css"
export default function App() {
  return (
    <div className='bg-black overflow-hidden'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Project/>
     
    
    </div>
  )
}
