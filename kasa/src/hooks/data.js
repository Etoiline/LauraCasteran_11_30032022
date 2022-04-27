import { useEffect, useState } from "react";

/*
** useData retourne 3 variables : 
      loading : indique si le chargement a terminé
      data : contient les données récupérées (ici les logements)
      error : variable utilisée en cas d'erreur
*/

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]) 
  const [error, setError] = useState(undefined)

useEffect(()=> {
  console.log('logement', data)
  const load = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL+'/logements.json')
      const logements = await response.json()
      //console.log(logements)
      setData(logements)
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
load()
}, [])


  return {
    loading,
    data,
    error
  }
}

/*
** useLogement prend en paramètre l'id d'un logement. La fonction retourne 3 variables : 
      loading : indique si le chargement a terminé
      data : contient les données récupérées (ici les données concernant le logement dont l'id est en paramètre)
      error : variable utilisée en cas d'erreur  (ici par exemple si un id incorrect est en paramètre)
*/


export const useLogement = (id) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]) 
  const [error, setError] = useState(undefined)

useEffect(()=> {
  const load = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL+'/logements.json')
      const logements = await response.json()
      const logementData = logements.find(function (logement) { return logement.id === id })
      if (logementData){
        setData(logementData)
      }
      else {
        setError('id incorrect')
      }
      //console.log(logements)
      
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }
load()
}, [])


  return {
    loading,
    data,
    error
  }
}