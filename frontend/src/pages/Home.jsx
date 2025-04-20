import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Steps/>
        <Description/>
        <Testimonial/>
    </div>
  )
}

export default Home