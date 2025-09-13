import { useState } from 'react'
import Accordian from './components/accordian'
import './app.css'
import ColorGenerator from './components/Color generator/Index'
import StarRating from './components/star-rating'
import ImageSlider from './components/image_slider'

function App() {

  return (
    <>
      <Accordian/>
      <ColorGenerator/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit="} limit={5} />
    </>
  )
}

export default App
