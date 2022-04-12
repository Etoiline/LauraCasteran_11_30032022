
import "../styles/desktop/Collapse.css"
import "../styles/mobile/Collapse.mobi.css"
import React from 'react'


function Collapse (props){
  console.log('content', props.elt[1])
  const collapsed = true
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <div id='collapse' className="collapse">
      <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)} >
        <div className="collapse-title">
          <p>{props.elt[0]}</p><p>{isCollapsed ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>}</p>
        </div>
      </button>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed} >
        {props.elt[1]}
      </div>
    </div>
  )

}

export default Collapse