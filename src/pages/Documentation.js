import React from 'react'
import Header from '../Layouts/Header'
import Footer from "../Layouts/Footer"

const Documentation = () => {
  return (
    <div>

        <Header></Header>

        <div className="main-frame text-center">

            <div classNameName="row">
                <div className="list-group ">
                    <a style={{border:0}} href="#" className="list-group-item list-group-item-action active bg-dark">
                        Make Your Own PlayArd
                    </a> 
                    <a href="#" className="list-group-item list-group-item-action grow">playArd <hr /></a>
                    <a href="#" className="list-group-item list-group-item-action grow">playArd <hr /> </a>
                    <a href="#" className="list-group-item list-group-item-action grow">playArd <hr /> </a>
                    <a href="#" className="list-group-item list-group-item-action grow">playArd <hr /> </a>
                </div>
            </div>    
        
        </div>
<Footer></Footer>
    </div>
  )
}

export default Documentation