import React from 'react'
import { useParams } from 'react-router-dom'
import { useLogement } from '../../hooks/data'
import CardLogement from './CardLogement'



function Logement() {
  const { idLogement } = useParams()
  const {loading, data, error} = useLogement(idLogement)
  console.log('id', idLogement)
  //const { idLogement } = useParams()

  return (
  <div>
    {!loading ? <CardLogement logement={data} /> : <></>}
  </div>
  )
}

export default Logement
