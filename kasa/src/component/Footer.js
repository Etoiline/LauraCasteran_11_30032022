import "../styles/desktop/Footer.css"
import "../styles/mobile/Footer.mobi.css"
import logoFooter from '../assets/Footer.png'
import React from 'react'

function Footer (){
  return (
    <div className="footer">
      <img src={logoFooter} alt='Kasa' />
      <p>	&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )

}

export default Footer