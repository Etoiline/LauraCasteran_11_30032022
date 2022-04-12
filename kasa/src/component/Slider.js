import React, {useState} from 'react'
import BtnSlider from './BtnSlider'
import '../styles/desktop/Slider.css'
import '../styles/mobile/Slider.mobi.css'

function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if(slideIndex !== props.images.length){
        setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === props.images.length){
        setSlideIndex(1)
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(props.images.length)
    }
}

return (
  <div className="container-slider">
      {props.images.map((image, index) => {
          return (
              <div
              key={index}
              className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
              >
                  <img 
                  src={image} 
                  />
              </div>
          )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

    </div>
  )
}

export default Slider