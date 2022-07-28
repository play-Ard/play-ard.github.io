import React from "react";
import "../App.css";
import "react-dropdown/style.css";
import DropdownComponent from '../components/DropdownComponent';
import XMLArea from "./XMLArea";



const DesignerPanel = () => {

    return (
        <React.Fragment>
            <div>
                <div className="row">
                    <div className="col-sm-5">
                        <h4 className=""> Designer Panel </h4>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-sm-5">
                        
                       <DropdownComponent></DropdownComponent>
                       
                    </div>
                </div>
                <div className="interrior-section border ">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success btn-lg"> COPY XML </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success btn-lg"> DOWNLOAD </button>
                        </div>
                      
                    </div>

                    <XMLArea></XMLArea>    
                      
                </div>

            </div>
        </React.Fragment>
    );
};

export default DesignerPanel;
