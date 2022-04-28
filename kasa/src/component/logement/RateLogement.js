import '../../styles/desktop/RateLogement.css'
import React from 'react'

/* Composant qui va s'occuper de la note sous forme d'étoiles.
Il y a par défaut 5 étoiles d'affichées et seules "rate" étoiles seront pleines */

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
