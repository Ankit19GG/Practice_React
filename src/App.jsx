import { useState } from 'react'
import Accordian from './components/accordian'
import './app.css'
import ColorGenerator from './components/Color generator/Index'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
      <Accordian/>
      <ColorGenerator/>
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
