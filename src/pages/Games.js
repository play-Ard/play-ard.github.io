import React from 'react'
import Header from '../components/Header'
import MCarousel from '../components/MCarousel'
import Footer from "../components/Footer";
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