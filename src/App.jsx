import React from 'react'
import Navbar from './compoments/Navbar'
import Hero from './compoments/Hero'
import PopularDishes from './compoments/PopularDishes'
import KeyFeatures from './compoments/KeyFeatures'
import Partners from './compoments/Partners'
import Testimonials from './compoments/Testimonials'
import Contact from './compoments/Contact'
import Footer from './compoments/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDishes />
      <Partners />
      <KeyFeatures />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
