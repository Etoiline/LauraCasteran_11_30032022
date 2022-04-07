import '../../styles/desktop/Thumb.css'
import '../../styles/mobile/Thumb.mobi.css'
import React from 'react'

function Thumb ({cover, name}) {
  return (
    <figure className='thumb'>
      <img src={cover} alt="name" />
      <figcaption>
        {name}
      </figcaption>
    </figure>
  )
}

export default Thumb