import React from "react";
import Header from "../Layouts/Header";

import logo from "../Assets/gifLogo.gif"

import Footer from "../Layouts/Footer";

import CSlider from "../Layouts/CSlider";


import ThreeDViewer from "../Components/ThreeDViewer";

import logo_revised from "../Assets/logo.svg"

const HomePage = () => {
  return (
    <div className="text-center">
     
        <Header></Header>
  
        <div className="main-frame">
          <div className="row">
            <div className="col">

              <h1>Devices That Evolves With Community</h1>

            </div>
          </div>

        <div className="row align-items-center ">
          <div className="col ">
          <a href="/about">
            <button className="bg-transparent " style={{ border: "None" }}>
                

              </button>
              </a>
              <ThreeDViewer></ThreeDViewer>
              <h5 style={{ color: "white" }} className="card-title">
                  Playard Retro PCB
              </h5>
            
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col grow">
            <a target="_blank" href="https://play-ard.github.io/playard-education/">
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
