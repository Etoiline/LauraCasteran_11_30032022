import Thumb from './Thumb'
import '../../styles/desktop/Gallery.css'
import React from 'react'

function Gallery (props) {
  // const logements = require('../../data/logements.json')
  return (
    <div className='gallery'>
      {props.logements.map((logement)=> (
          <Thumb key={logement.id}
          cover = {logement.cover}
          name = {logement.title}
          />
      ))}
    </div> 
    )


}

export default Gallery