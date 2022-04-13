import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useLogement } from '../../hooks/data'
import CardLogement from '../../component/CardLogement'

/*
* Page logement. 
* C'est ici qu'on récupère les données d'un seul logement (id en paramètre)
* Une fois le chargement des données fini, soit l'id est incorrect et on redirige vers la page d'erreur
* soit l'id est correct et on affiche la page avec les données de ce logement
*/

function Logement() {
  const { idLogement } = useParams()
  const {loading, data, error} = useLogement(idLogement)

  const ShowData = () => {
    if (error){
      return <Navigate to={'/404'} />
    }
    else {
      return <CardLogement logement={data} />
    }
  }
  return (
  <div>
    {!loading ? <ShowData /> : <></>}
    </div>
  )
}


export default Logement
