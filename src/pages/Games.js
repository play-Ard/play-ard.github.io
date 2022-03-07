import React from 'react'
import Header from '../components/Header'
import MCarousel from '../components/MCarousel'
const Games = () => {
  return (
    <div className="text-center">

    <Header></Header>
    
    <div className="main-frame">
        
        <div className="row">
            <MCarousel></MCarousel>
        </div>
    
    </div>

    
    </div>
  )
}

export default Games