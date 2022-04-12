import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useLogement } from '../../hooks/data'
import CardLogement from '../../component/CardLogement'




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
