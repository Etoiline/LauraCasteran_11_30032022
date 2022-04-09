import Star from '../../assets/Start.png'
//import starFull from '../../assets/startFull.png'
import Footer from '../../assets/Footer.png'
import React from 'react'


function RateLogement(rate) {
  const range = [1,2,3,4,5]
  //console.log('star',{star})

  return (
  <div>
    {range.map((rangeElt) => 
      rate>=rangeElt ? (
        <img src={Footer} />) : <img src={Footer} />
      )}
  </div>
  )
}

export default RateLogement
