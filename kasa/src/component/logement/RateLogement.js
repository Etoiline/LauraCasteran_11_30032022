import '../../styles/desktop/RateLogement.css'
import React from 'react'


function RateLogement(rate) {
  const range = [1,2,3,4,5]
  //console.log('star', rate.rate)

  return (
  <div className='rate'>
    {range.map((rangeElt, index) => 
      rate.rate>=rangeElt ? (
        <i key={index}  className="fa-solid fa-star"></i>) : <i key={index}  className="fa-regular fa-star"></i>
      )}
  </div>
  )
}

export default RateLogement
