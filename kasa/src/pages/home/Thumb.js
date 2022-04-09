import '../../styles/desktop/Thumb.css'
import '../../styles/mobile/Thumb.mobi.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Thumb ({id,cover, name}) {
  const urlLogement = '/logement/'+id
  //console.log('key', id, urlLogement)
  return (
    <Link to={urlLogement} >
      <figure className='thumb'>
        <img src={cover} alt="name" />
        <figcaption>
          {name}
        </figcaption>
      </figure>
    </Link>
  )
}

export default Thumb