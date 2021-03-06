
import React, { useState } from 'react';
import { ProjectsContext } from '../Context/ProjectsContext';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Button from 'react-bootstrap'
import ComponentsPanel from '../Sections/ComponentsPanel';
import DesignerPanel from '../Sections/DesignerPanel';
import CollapsibleSidebar from '../Sections/CollapsibleSidebar';
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import logo from "../Assets/Black MC.svg"
const components = [
  { name: "Pixel", id: "pixelID" },
  { name: "Layout", id: "layoutID" },
  { name: "Rectangle", id: "rectID" },
  { name: "Circle", id: "circleID" },
  { name: "Text", id: "textID" },
  { name: "Triangle", id: "triangleID" },
  { name: "Image", id: "imageID" },
];


const LayoutDesigner = () => {

    const [screenSize, setScreenSize] = useState([]);

    const [widgetValue, setWidgetValue] = useState(0)

  return (
    <div className=''>
      
      <Header></Header>

<div style={{border:'0'}}className="card bg-transparent">
<div class="card-body text-center">

    <img                     style={{
          filter: "brightness(0) invert(1)",
          width: "35%",
          textAlign: "center",
        }} className="card-img-top grow" src={logo} alt="Card image cap"></img>

    <div className="loading">
        <h2>COMING SOON</h2>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

</div>
</div>    
    

<br />
<br />
<Footer></Footer>
      {/* <Header></Header>
      
      <ProjectsContext.Provider value={{ setScreenSize, screenSize, widgetValue, setWidgetValue }}>
      
      <div className="main-frame">
        <div className="row text-center">
          <div className="col">
            <button className='btn bg-dark' style={{color:"white"}}> What's the designer ?</button>
          </div>
      </div>
      <br />
        <div className="row">
          <div className="col-4 components-panel">
            
              <ComponentsPanel components={components} />

          </div>
          
          <div className="col-8 designer-panel text-right">

              <DesignerPanel /> 
              
          </div>
        </div>
       
      </div>
      </ProjectsContext.Provider>  
      <Footer></Footer> */}
    </div>
  )
}

export default LayoutDesigner