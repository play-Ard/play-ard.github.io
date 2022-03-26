import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from '../../Components/Sidebar';
import LogoGif from '../../Assets/finaaaaal.gif';
import Footer from '../../Components/Footer'
import './Education.css'


const Education = () => {
  return (
    <div className="education">
        
        <Sidebar  className='sidebarFont' style={{height:'fixed'}} ></Sidebar>

        <div style={{marginTop:"0%", width:"70%", marginRight:'8%'}}className="main-frame text-center">
          <div className="row">
            <span className='text-center'>
            <img style={{width:'60%'}}  src={LogoGif} alt="" />
            </span>
          </div>
          <div className="row m-1">
        <div className="">
          <div classNameName="row">
              <div className="list-group card">
                  <div className='card-body'> <hr /> <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor a ipsum luctus scelerisque. Proin sollicitudin augue ex, eu rhoncus metus semper quis. Vestibulum ut faucibus enim. Fusce nec arcu nisl. Sed vel dictum purus. Integer pharetra ac magna eu ornare. Morbi eget dolor turpis. Proin lorem purus, luctus non posuere a, faucibus non sem. </p>
                   <hr /></div>
              </div>
              <div className="list-group card">
                  <div className='card-body'> <hr /> <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor a ipsum luctus scelerisque. Proin sollicitudin augue ex, eu rhoncus metus semper quis. Vestibulum ut faucibus enim. Fusce nec arcu nisl. Sed vel dictum purus. Integer pharetra ac magna eu ornare. Morbi eget dolor turpis. Proin lorem purus, luctus non posuere a, faucibus non sem. </p>
                   <hr /></div>
              </div> 
              <div className="list-group card">
                  <div className='card-body'> <hr /> <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor a ipsum luctus scelerisque. Proin sollicitudin augue ex, eu rhoncus metus semper quis. Vestibulum ut faucibus enim. Fusce nec arcu nisl. Sed vel dictum purus. Integer pharetra ac magna eu ornare. Morbi eget dolor turpis. Proin lorem purus, luctus non posuere a, faucibus non sem. </p>
                   <hr /></div>
              </div> 
              <div className="list-group card">
                  <div className='card-body'> <hr /> <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor a ipsum luctus scelerisque. Proin sollicitudin augue ex, eu rhoncus metus semper quis. Vestibulum ut faucibus enim. Fusce nec arcu nisl. Sed vel dictum purus. Integer pharetra ac magna eu ornare. Morbi eget dolor turpis. Proin lorem purus, luctus non posuere a, faucibus non sem. </p>
                   <hr /></div>
              </div> 
              <div className="list-group card">
                  <div className='card-body'> <hr /> <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in tortor a ipsum luctus scelerisque. Proin sollicitudin augue ex, eu rhoncus metus semper quis. Vestibulum ut faucibus enim. Fusce nec arcu nisl. Sed vel dictum purus. Integer pharetra ac magna eu ornare. Morbi eget dolor turpis. Proin lorem purus, luctus non posuere a, faucibus non sem. </p>
                   <hr /></div>
              </div>  
          </div>    

          </div>

        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Education