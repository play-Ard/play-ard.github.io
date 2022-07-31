import React from "react";
import "../App.css";
import Widget from "../Components/Widget";

const ComponentsPanel = ({components}) => {
  
  return (
    <React.Fragment>
      <div >
        <h4> Components Panel</h4>
            <div className="panel border">
                <div className="row">
                    {components.map((comp) => (
                      
                    <div className="col-lg-6 p-1">
                        <Widget comp_name={comp.name}></Widget>
                    </div>

                    ))}
                </div>
            </div>
      </div>
    </React.Fragment>
  );
};

export default ComponentsPanel;
