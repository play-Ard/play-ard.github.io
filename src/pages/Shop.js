import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";


const Shop = () => {
  return (
    <div>

        <Header></Header>

        <div className="main-frame">
            
            <div className="card">
            <div class="card-body text-center">
                <div style={{color:'black'}}className="card-title text-center">
                            COMING SOON
                </div>
                <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>    
                
            </div>
            <br />
            <br />
        <Footer></Footer>

    </div>
  )
}

export default Shop