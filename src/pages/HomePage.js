import React from "react";
import Header from "../Layouts/Header";

import logo from "../Assets/gifLogo.gif"


import MCarousel from '../components/MCarousel'
import Footer from "../Layouts/Footer";

const HomePage = () => {
  return (
    <div className="text-center">
     
        <Header></Header>
  
        <div className="main-frame">
          <div className="row">
            <div className="col">
              <h1>OPEN SOURCE RETRO GAME CONSOLE</h1>
            </div>
          </div>

        <div className="row align-items-center ">
          <div className="col ">
          <a href="/about">
            <button className="bg-transparent " style={{ border: "None" }}>
                
              <div style={{ border: "0" }} className="card bg-transparent grow">
                <div className="d-flex justify-content-center">
                  <img
                    style={{
                    
                    }}
                    className="img-fluid grov"
                    src={logo}
                    alt="Card image cap"
                    width="400" 
                  />
                </div>

                <br />

              </div>
              <h5 style={{ color: "white" }} className="card-title">
                  Retro Game Console
                </h5>
            </button>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col grow">
            <a target="_blank" href="https://github.com/play-Ard">
              <button
                className="btn "
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
                GETTING STARTED
              </button>
            </a>
          </div>
          <div className="col grow">
            <a target="_blank" href="/about">
              <button
                className="btn -"
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
               What is playard ? 
              </button>
            </a>
          </div>
        </div>
        <div className="row">

          <div className="col grow">
                  <br />
          <a target="_blank" href="/shop">
              <button
                className="btn "
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
                BUY NOW !
              </button>
            </a>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
