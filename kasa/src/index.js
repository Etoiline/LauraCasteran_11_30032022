import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/desktop/index.css'
import './styles/mobile/index.mobi.css'
import Home from './pages/home/Home'
import Template from './component/Template'
import Error from './pages/error/Error.js'
import APropos from './pages/a_propos/APropos'
import Logement from './pages/logement/Logement'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path ='*' element= {<Error />} />
        <Route path ='/about' element= {<APropos />} />
        <Route path="/logement/:idLogement" element={<Logement />} />
      </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)