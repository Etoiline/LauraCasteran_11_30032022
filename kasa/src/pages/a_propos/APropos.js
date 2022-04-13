import React from 'react'
import Section from './Section'
import Collapse from '../../component/Collapse'
import '../../styles/desktop/APropos.css'
import '../../styles/mobile/APropos.mobi.css'

/*
* Page à propos. 
* Les textes des collapses sont stockés dans un fichier et sont passés en paramètre ensuite 
*/

function APropos () {
  const textes = require ('../../data/textes_a_propos.json')
  return (
    <div>
      <Section />
      <div className='aPropos'>
        {textes.map((texte, index) => (
              <Collapse key={index} elt={texte}/>
            ))}
      </div>
    </div> 
    )


}

export default APropos