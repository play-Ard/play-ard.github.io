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
            <div style={{color:'black'}}className="card-title text-center">
                       <h2>WHAT IS PLAYARD ?</h2>
            </div>
            <p style={{color:'black'}} class="card-text text-center">
It is an open-source educational project that aims to impose today's technologies on people in a fun way and they can be involved in the development of the project.</p>

        </div>
        </div>    
        <br />
        <div className="card">
        <div class="card-body text-center">
            <div style={{color:'black'}}className="card-title text-center">
                       <h2>What have we done so far ?</h2>
            </div>
            <p style={{color:'black'}} class="card-text text-center">
            We wanted to develop the idea of ​​a retro game console made abroad using a microcontroller. We started working on it.
We set our microcontroller as **ESP32**.
We worked on the coding. We also stored and shared the codes we wrote on GitHub.
With new research and brainstorming, we reached a solution for every problem that came our way.
We wanted to develop our project in line with the events we participated in and the information we gained, and we brought up our idea of ​​IoT (Internet of Things). Our game console can connect to the wireless internet and we get the data used in the game over the internet, eliminating the memory problem.
Another innovation that we do not have in other projects is that we have created a design window on our website where we can easily design a game. All our users will be able to design the images of their own games using this system.</p>
      
        </div>
        </div>   
        <br />
        <div className="card">
        <div class="card-body text-center">
            <div style={{color:'black'}}className="card-title text-center">
                       <h2>
What are our tools and goals ?</h2>
            </div>
            <p style={{color:'black'}} class="card-text text-center">
            The concept of our product is for first-hand testing of software technologies and applications.
Our vehicles; are the electronic, software parts and systems we use. At the same time, each of our users who use our project becomes a supporter for the development of the project.
It is our goal to convey the algorithm logic and game design fundamentals to our users and to improve their application skills.</p>
    
        </div>
        </div>   
            
        </div>
        <Footer></Footer>
    </div>
  )
}

export default About