import { useContext } from 'react'
import { ProjectsContext } from '../Context/ProjectsContext'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownComponent = () => {
    const {  screenSize, setScreenSize} = useContext(ProjectsContext);

    const handleSelect = e => {
        console.log(e);
        setScreenSize(e);
        console.log(screenSize);

        localStorage.setItem("screenSize", e);
        console.log("S"+ localStorage.getItem("widgetValue"));
        
    };

  return (
    <div>
         <DropdownButton
            onSelect={ handleSelect }
            variant="outline-secondary"
            alignRight
            title={ "Screen Size" }
            id="dropdown-menu-align-right">

            <Dropdown.Item eventKey="128x64"> 128x64 </Dropdown.Item>
            <Dropdown.Item eventKey="128x32"> 128x32 </Dropdown.Item>
            <Dropdown.Item eventKey="256x128"> 256x128 </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">
                some link
            </Dropdown.Item>
        </DropdownButton>
    </div>
  );
}

export default DropdownComponent;