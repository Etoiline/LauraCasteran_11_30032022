import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/desktop/index.css'
import './styles/mobile/index.mobi.css'
import Home from './pages/home/Home'
import Template from './component/Template'
import Error from './component/Error'
import APropos from './pages/a_propos/APropos'
import 'bootstrap/dist/css/bootstrap.min.css'
// import reportWebVitals from './reportWebVitals'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path ='*' element= {<Error />} />
        <Route path ='/about' element= {<APropos />} />
      </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
