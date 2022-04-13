import Section1 from './Section1'
import Gallery from './Gallery'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useData } from '../../hooks/data'

/*
* Page d'accueil. 
* C'est ici qu'on récupère les données des logements
* Une fois le chargement des données fini, on affiche la gallerie avec tous les logements
*/

function Home() {
  const {loading, data, error} = useData()
  //console.log(data)
  const ShowData = () => {
    if (error){
      return <Navigate to={'/404'} />
    }
    else {
      return <Gallery logements={data} />
    }
  }
  return (
  <div>
    <Section1 />
   {!loading ? <ShowData /> : <></>}
  </div>
  )
}

export default Home
