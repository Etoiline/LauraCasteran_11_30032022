
import "../styles/desktop/Collapse.css"
import "../styles/mobile/Collapse.mobi.css"
import React from 'react'


function Collapse (props){
  //console.log('content', props.elt[1])
  const collapsed = true
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  return (
    <div id='collapse' className="collapse">
      <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)} >
        <div className="collapse-title">
          <p>{props.elt[0]}</p>{isCollapsed ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
        </div>
      </button>
      <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-expanded={isCollapsed} >
        {props.elt[1]}
      </div>
    </div>
  )

}

export default Collapse