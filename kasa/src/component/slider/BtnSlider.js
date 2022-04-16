import React from "react"
import '../../styles/desktop/Slider.css'

function BtnSlider({ direction, moveSlide }) {
  //console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <i className="fa-solid fa-chevron-right"></i> : <i className="fa-solid fa-chevron-left"></i>}
    </button>
  )
}

export default BtnSlider