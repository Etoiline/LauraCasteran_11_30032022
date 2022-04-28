import "../styles/desktop/Footer.css"
import "../styles/mobile/Footer.mobi.css"
import logoFooter from '../assets/Footer.png'
import React from 'react'

/* Footer de toutes les pages du site.
Il contient le logo et le copyright sur fond noir */

function Footer (){
  return (
    <div className="footer">
      <img src={logoFooter} alt='Kasa' />
      <p>	&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )

}

export default Footer