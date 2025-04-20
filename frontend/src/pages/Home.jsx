import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Steps/>
        <Description/>
        <Testimonial/>
        <GenerateBtn/>
    </div>
  )
}

export default Home