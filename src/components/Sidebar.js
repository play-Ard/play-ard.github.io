import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart, FaGamepad } from "react-icons/fa";
import 'react-pro-sidebar/dist/css/styles.css';
import BlackMC from '../Assets/Black MC.svg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import '../Pages/Education/Education.css'

const Sidebar = () => {

  const electronic = ['ESP32','OLED SSD1306', 'ST7789']
  const software = ['Introducing Playard Game Engine' ,'Hello World!']
  const makeagame = ['Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', 'Lorem 1', 'Lorem 2', ]
  const makeyourown = ['Lorem 1', 'Lorem 2']
  const wokwiTutorial = ['Introduction to Wokwi']
  const isMobileorNot = useMediaQuery({
    query: '(max-width: 1200px)'
  })
  return (
    <div style={{position:'fixed', zIndex:'1'}}>

    <ProSidebar style={{  maxWidth:'10%'  }} width="70%" collapsed={isMobileorNot && "false"} >
        <Menu iconShape="circle">
          <MenuItem className='text-center'> 
          <Link to="/" ><img  className="grow" style={{
                            filter: "brightness(0) invert(1)",
                            width: "100%",
                            textAlign: "center",
                          }} src={BlackMC} alt="" /></Link> 
          </MenuItem>
          <SubMenu style={{zIndex:'1'}}title="Electronic" icon={<FaGamepad />}>

              {electronic.map((item,index)=>{
               return <MenuItem key={index} style={{fontSize:'10px'}}>{item}</MenuItem>
              })}

          </SubMenu>
          <SubMenu title="Software" icon={<FaGamepad />}>
          {software.map((item,index)=>{
               return <MenuItem key={index} style={{fontSize:'10px'}}>{item}</MenuItem>
              })}  

          </SubMenu>
          <SubMenu title="Make Your Own " icon={<FaGamepad />}>
          {makeyourown.map((item,index)=>{
               return <MenuItem key={index} style={{fontSize:'10px'}}>{item}</MenuItem>
              })}
          </SubMenu>
          <SubMenu title="Make A Game" icon={<FaGamepad />}>
          {makeagame.map((item,index)=>{
               return <MenuItem key={index} style={{fontSize:'10px'}}>{item}</MenuItem>
              })}
          </SubMenu>
          <SubMenu title="Wokwi Tutorial" icon={<FaGamepad />}>
          {wokwiTutorial.map((item,index)=>{
               return <MenuItem key={index} style={{fontSize:'10px'}}>{item}</MenuItem>
              })}
          </SubMenu>
        </Menu>
</ProSidebar>


    </div>
  )
}

export default Sidebar