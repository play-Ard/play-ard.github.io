import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "./Black MC.svg"

const Shop = () => {
  return (
    <div>

        <Header></Header>

            <div style={{border:'0'}}className="card bg-transparent">
            <div class="card-body text-center">

                <img                     style={{
                      filter: "brightness(0) invert(1)",
                      width: "35%",
                      textAlign: "center",
                    }} className="card-img-top grow" src={logo} alt="Card image cap"></img>

                <div className="loading">
                    <h2>COMING SOON</h2>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
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