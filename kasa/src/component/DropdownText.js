
import "../styles/desktop/DropdownText.css"
import "../styles/mobile/DropdownText.mobi.css"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function DropdownText (){
  const textes = require ('../data/textes_a_propos.json')
  return (
    <div className="dropdown">
      {textes.map((texte) => 
        <DropdownButton id="dropdown-item-button" className="dropdown-about" title={texte[0]}>
          <Dropdown.ItemText>{texte[1]}</Dropdown.ItemText>
        </DropdownButton>
    )}

    </div>
  )

}

export default DropdownText