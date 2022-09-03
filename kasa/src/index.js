import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import './styles/desktop/index.css'
import './styles/mobile/index.mobi.css'
import Home from './pages/home/Home'
import Template from './component/Template'
import Error from './pages/error/Error.js'
import APropos from './pages/a_propos/APropos'
import Logement from './pages/logement/Logement'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/LauraCasteran_11_30032022">
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
)