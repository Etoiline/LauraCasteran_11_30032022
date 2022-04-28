import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

/* Template de toute les pages du site : elles contiennent le header, leur contenu propre qui sera inséré dans le outlet
 et le footer */

function Template() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Template