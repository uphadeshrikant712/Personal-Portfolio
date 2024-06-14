import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import MouseFollower from './components/MouseFollower'
import Skills from './components/Skills'
import "animate.css";
import LocomotiveScroll from "locomotive-scroll";
import Resume from './components/Resume'



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && 'dark'}>
      <MouseFollower />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white text-black dark:bg-black dark:text-white">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App