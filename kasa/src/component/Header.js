import logo from "../assets/Logo.png"
import "../styles/desktop/Header.css"
import '../styles/mobile/Header.mobi.css'
import React from 'react'
import { Link } from 'react-router-dom'

/* Header de toute les pages du site.
Il contient le logo et le menu */

function Header() {
  return (
    <header>
      <div className="logo"><img src={logo} alt="Logo de Kasa" /></div>
      <nav className="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        </nav>
    </header>
  )
}

export default Header