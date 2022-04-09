import React from 'react'
import "../../styles/desktop/Error.css"
import "../../styles/mobile/Error.mobi.css"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className = 'error'>
      <p className='errorCode'>404</p>
      <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='errorLink' to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error