import Section1 from './Section1'
import Gallery from './Gallery'
import React from 'react'
import { useData } from '../../hooks/data'



function Home() {
  //const logements = require('../../data/logements.json')
  const {loading, data, error} = useData()
  console.log(data)

  return (
  <div>
    <Section1 />
   {!loading ? <Gallery logements={data} /> : <></>}
  </div>
  )
}

export default Home
