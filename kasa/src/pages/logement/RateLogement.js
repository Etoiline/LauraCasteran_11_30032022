import '../../styles/desktop/RateLogement.css'
import React from 'react'


function RateLogement(rate) {
  const range = [1,2,3,4,5]
  //console.log('star', rate.rate)

  return (
  <div>
    {range.map((rangeElt) => 
      rate.rate>=rangeElt ? (
        <i class="bi bi-star-fill"></i>) : <i class="bi bi-star"></i>
      )}
  </div>
  )
}

export default RateLogement
