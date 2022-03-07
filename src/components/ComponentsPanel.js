import React from 'react'
import Widget from './Widget'
import '../App.css';
import Inspector from './Inspector';

const ComponentsPanel = () => {
  return (
        <React.Fragment>
                

            <div className='componentspanel card col'>
                
            
                <div className='container' style={{backgroundColor: '#759592'}}>
                    <div className="row" style={{textAlign: 'center'}}>
                            <h2 style={{color: 'white'}}>ComponentsPanel</h2>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <Widget/>
                        </div>
                        <div className="col">
                            <Widget/>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <Widget/>
                        </div>
                        <div className="col">
                            <Widget/>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <Widget/>
                        </div>
                        <div className="col">
                            <Widget/>
                        </div>
                    </div>

                </div>

            <Inspector/>
                
            </div>

            

    </React.Fragment>
  )
}

export default ComponentsPanel