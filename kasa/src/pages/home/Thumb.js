import '../../styles/desktop/Thumb.css'
import '../../styles/mobile/Thumb.mobi.css'
import React from 'react'
import { Link } from 'react-router-dom'

/* Thumb correspond à la miniature de chaque logement affiché sur la page d'accueil */

function Thumb ({id,cover, name}) {
  const urlLogement = '/logement/'+id
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