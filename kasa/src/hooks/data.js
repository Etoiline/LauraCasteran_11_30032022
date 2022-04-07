import { useEffect, useState } from "react";

export const useData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]) 
  const [error, setError] = useState(undefined)

useEffect(()=> {
  const load = async () => {
    try {
      const response = await fetch(process.env.PUBLIC_URL+'/logements.json')
      const logements = await response.json()
      console.log(logements)
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