//import Background from "../assets/Background.png"
import "../styles/desktop/DropdownText.css"
import "../styles/mobile/DropdownText.mobi.css"
import React from 'react'
import Dropdown from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/Button'

function DropdownText (){
  return (
    <div className="dropdown">
      <Dropdown>
        <Dropdown.Toggle></Dropdown.Toggle>
        <h1>TEST DROPDOWN</h1>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
</DropdownButton>
</Dropdown>

    </div>
  )

}

export default DropdownText