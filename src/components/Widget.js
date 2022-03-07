import React from 'react';
import '../App.css'; 
import { useContext } from 'react'
import { ProjectsContext } from '../Context/ProjectsContext'

const mystyle = {
    width: "100%",
    tableLayout: "fixed",
    borderCollapse: "collapse",
    backgroundColor: '#525162',
    color: 'white',
    fontSize: "medium",
  }

const Widget = ({comp_name}) => {
  const { widgetValue, setWidgetValue } = useContext(ProjectsContext);

  const handleClick = e => {
    setWidgetValue(e.target.innerText);

    console.log(e.target.innerText);

    localStorage.setItem("widgetValue", e.target.innerText)

  }
  
  return (

    <React.Fragment>

        <button onClick={ handleClick } class="btn btn-lg" style={mystyle} value={comp_name}>
              <p>{comp_name}</p>
        </button>

    </React.Fragment>

  )
}

export default Widget;