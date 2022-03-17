import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
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
                    <button><a href="https://github.com/play-Ard/playard" className="list-group-item list-group-item-action grow">playArd <hr /></a></button>
                </div>
            </div>    
        
        </div>
<Footer></Footer>
    </div>
  )
}

export default Documentation