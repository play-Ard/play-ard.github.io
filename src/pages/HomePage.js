import React from "react";
import Header from "../components/Header";
import retro from "./retro-game .jpg";
import logo from "./Black MC.svg"
import MCarousel from '../components/MCarousel'
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="text-center">
     
        <Header></Header>
  
      <div className="main-frame">
        <div className="row">
          <div className="col">
            <h1>ESP32 / Arduino BASED RETRO GAME CONSOLE</h1>
          </div>
        </div>
        <br />
        <br />
        <div className="row align-items-center">
          <div className="col ">
          <a href="/about">
            <button className="bg-transparent " style={{ border: "None" }}>
                
              <div style={{ border: "0" }} className="card bg-transparent grow">
                <div className="d-flex justify-content-center">
                  <img
                    style={{
                      filter: "brightness(0) invert(1)",
                      width: "105%",
                      textAlign: "center",
                    }}
                    className="img-fluid grov"
                    src={logo}
                    alt="Card image cap"
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
            <a target="_blank" href="https://www.instagram.com/erhanyme">
              <button
                className="btn -"
                style={{ borderColor: "#B7CDD5", color: "#B7CDD5" }}
              >
                DOCUMENTATION
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
