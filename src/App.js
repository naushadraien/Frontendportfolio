import React from 'react'
import {Navbar} from './components'
import {About, Footer, Header, Skills, Testimonial, Work} from './containers'


const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App