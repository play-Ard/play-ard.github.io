import React from "react";
import Header from "../Components/Header";

import logo from "../Assets/finaaaaal.gif"
import MCarousel from '../Components/MCarousel'
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
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
          <Link to="/about">
            <button className="bg-transparent " style={{ border: "None" }}>
                
              <div style={{ border: "0" }} className="card bg-transparent grow">
                <div className="d-flex justify-content-center">
                  <img
                    style={{

                    }}
                    className="img-fluid grov"
                    src={logo}
                    alt="loading..."
                    width="400" 
                  
                  />
                </div>

                <br />

              </div>
              <h5 style={{ color: "white" }} className="card-title">
                  Retro Game Console
                </h5>
            </button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col grow">
            <a href="https://github.com/play-Ard/playard">
              <button
                className="btn "
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
                GETTING STARTED
              </button>
            </a>
          </div>
          <div className="col grow">
            <Link to="/about">
              <button
                className="btn -"
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
               What is playard ? 
              </button>
            </Link>
          </div>
        </div>
        <div className="row">

          <div className="col grow">
                  <br />

                  <Link style={{color:'black', textDecoration: 'none'}} className="m-2" to='/shop'>
              <button
                className="btn "
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
                BUY NOW !
              </button>
              </Link>
    
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
