import React from 'react'
import TopNavbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'

const Layout = () => {
  return (
    <div className='h-100'>
        <TopNavbar/>
        <Home/>
        <About/>
        <Skills/>
    </div>
  )
}

export default Layout