
import "../styles/desktop/Collapse.css"
import "../styles/mobile/Collapse.mobi.css"
import React from 'react'


function Collapse (props){
  const collapsed = true
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <div id='collapse' className="collapse">
      <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)} >
        {props.elt[0]}
      </button>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed} >
        {props.elt[1]}
      </div>
    </div>
  )

}

export default Collapse