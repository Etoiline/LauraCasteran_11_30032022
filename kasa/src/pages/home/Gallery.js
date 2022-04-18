import Thumb from './Thumb'
import '../../styles/desktop/Gallery.css'
import '../../styles/mobile/Gallery.mobi.css'
import React from 'react'


function Gallery (props) {
  console.log(props.logements)
  return (
    <div className='gallery'>
      {props.logements.map((logement)=> (

          <Thumb key={logement.id}
          id = {logement.id}
          cover = {logement.cover}
          name = {logement.title}
          />
      ))}
    </div> 
    )


}

export default Gallery