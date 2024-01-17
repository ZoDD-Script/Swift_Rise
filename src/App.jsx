import React from 'react'

import { NavBar, Header, Courses, Campus, Facilities, Testimonials, CTA, Footer, About, Clients } from './components'
import './App.css'

const App = () => {
  return (
    <header>
      <section className="header">
        <NavBar />
        <Header />
      </section>
      <About />
      <Courses />
      <Campus />
      <Facilities />
      <Testimonials />
      <CTA />
      <Clients />
      <Footer />
    </header>
  )
}

export default App