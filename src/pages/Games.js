import React from 'react'
import Header from '../Components/Header'
import MCarousel from '../Components/MCarousel'
import Footer from "../Components/Footer";
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