import React from "react"
import '../styles/desktop/Slider.css'

function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-left"></i>}
    </button>
  )
}

export default BtnSlider