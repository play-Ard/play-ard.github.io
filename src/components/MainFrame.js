import React from 'react'
import ComponentsPanel from './ComponentsPanel'
import DesignerPanel from './DesignerPanel'

const MainFrame = () => {
  return (
    <React.Fragment>
    <div className='mainframe card container' 
     >
        <div className='row'>
            <div className="col-5">
            <ComponentsPanel></ComponentsPanel>
            </div>
            <div className="col-7">
            <DesignerPanel> </DesignerPanel>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default MainFrame