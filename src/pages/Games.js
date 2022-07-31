import React from 'react'
import Header from '../Layouts/Header'
import Footer from "../Layouts/Footer";
import MCarousel from '../Components/MCarousel'

const Games = () => {
  return (
    <div className="text-center">

    <Header></Header>
    
    <div className="main-frame">
        
        <div className="row">
            <MCarousel></MCarousel>
        </div>
    
    </div>

    <Footer></Footer>
    </div>
  )
}

export default Games