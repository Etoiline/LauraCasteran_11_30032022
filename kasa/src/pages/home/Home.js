import Section1 from './Section1';
import Header from '../../component/Header';
import Gallery from './Gallery';
import Footer from '../../component/Footer';
import React from 'react'
import { useData } from '../../hooks/data';

function Home() {
  //const logements = require('../../data/logements.json')
  const {loading, data, error} = useData()

  return (
  <div>
    <Section1 />
   {!loading ? <Gallery logements={data} /> : <></>}
  </div>
  )
}

export default Home
