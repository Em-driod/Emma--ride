import React from 'react'
import Herosection from '../Component/Herosection'
import Carsales from '../Component/Carsales'
import Carrent from '../Component/Carrent'
import Newss from '../Component/Newss'
import Chatbot from '../Component/Chatbot'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Carsales />
      <Chatbot />
      <Carrent />
      <Newss />
       
    </div>
  )
}

export default Homepage ;