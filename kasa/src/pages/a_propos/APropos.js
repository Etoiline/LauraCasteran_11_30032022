import React from 'react'
import Section from './Section'
import Collapse from '../../component/Collapse'


function APropos () {
  const textes = require ('../../data/textes_a_propos.json')
  return (
    <div>
      <Section />
      {textes.map((texte, index) => (
            <Collapse key={index} elt={texte}/>
          ))}
    </div> 
    )


}

export default APropos