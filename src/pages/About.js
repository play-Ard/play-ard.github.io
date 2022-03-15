import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>

        <Header></Header>

        <div className="main-frame">
            
        <div className="card">
        <div class="card-body text-center">
            <div style={{color:'black'}}className="card-title text-center">
                       <h2>WHAT IS PLAYARD ?</h2>
            </div>
            <p style={{color:'black'}} class="card-text text-center">
It is an open-source educational project that aims to impose today's technologies on people in a fun way and they can be involved in the development of the project.</p>
            <a style={{color:'white', backgroundColor:"black"}} href="#" class="btn btn-primary">Documentation</a>
        </div>
        </div>    
            
        </div>
        <Footer></Footer>
    </div>
  )
}

export default About