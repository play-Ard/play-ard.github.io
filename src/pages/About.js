import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
const About = () => {
  return (
    <div>

   <Header></Header> 

      <div className="main-frame">

        <div className="card">
          <div class="card-body text-center">
            <div style={{ color: 'black' }} className="card-title text-center">
              <h2>WHAT IS PLAYARD?</h2>
            </div>
            <p style={{ color: 'black' }} class="card-text text-center">
              Playard is an open-source, community-driven platform that brings today's technology to life in an enjoyable and educational way. Our mission is to empower users to get hands-on with technology, fostering creativity and innovation while contributing to the project's development.</p>

          </div>
        </div>
        <br />
        <div className="card">
          <div class="card-body text-center">
            <div style={{ color: 'black' }} className="card-title text-center">
              <h2>WHAT HAVE WE ACHIEVED SO FAR?</h2>
            </div>
            <p style={{ color: 'black' }} class="card-text text-center">
              We began our journey by building a retro game console powered by the ESP32 microcontroller. Our aim was to create a device that merged the charm of retro gaming with modern technology. As we developed, we shared our progress and code openly on GitHub, allowing others to join in and contribute.

              Over time, we incorporated IoT capabilities, enabling our console to connect to the internet and retrieve game data, solving memory constraints. One of our unique innovations is an intuitive game design tool on our website, empowering users to create custom game visuals effortlessly.</p>

          </div>
        </div>
        <br />
        <div className="card">
          <div class="card-body text-center">
            <div style={{ color: 'black' }} className="card-title text-center">
              <h2>OUR TOOLS AND GOALS</h2>
            </div>
            <p style={{ color: 'black' }} class="card-text text-center">
              Our product is built for hands-on experimentation with software technologies and applications. We leverage electronic components, software systems, and an open framework that invites user collaboration.

              Our ultimate goal is to teach users the fundamentals of algorithms and game design, while helping them develop real-world application skills. With Playard, every user becomes an active participant in pushing the boundaries of what's possible in gaming and technology.</p>

          </div>
        </div>

        <br />

        <div className="card">
          <div class="card-body text-center">
            <div style={{ color: 'black' }} className="card-title text-center">
              <h2>MEET THE TEAM</h2>
            </div>
            <p style={{ color: 'black' }} class="card-text text-center">
              Playard is built by a small team of passionate developers and makers, united by the desire to bring fun and accessible technology to everyone. We're constantly exploring new ideas and inviting the community to join in our journey.
            </p>
          </div>
        </div>



        <br />

        <div className="card">
          <div class="card-body text-center">
            <div style={{ color: 'black' }} className="card-title text-center">
              <h2>WHAT’S NEXT?</h2>
            </div>
            <p style={{ color: 'black' }} class="card-text text-center">
              Our future plans include expanding the Playard ecosystem with new modular components, advanced coding challenges, and multiplayer support for games. Stay tuned as we continue to innovate and bring exciting features to the community!
            </p>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
