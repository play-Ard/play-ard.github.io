import React, { useState } from 'react';
import { ProjectsContext } from './Context/ProjectsContext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LayoutDesigner from './Pages/LayoutDesigner'

import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import {Redirect } from 'react-router'

import HomePage from './Pages/HomePage';
import Header from './Components/Header';

import Millionaire from './Pages/Millionaire';
import Temp from './Pages/Temp'
import Games from './Pages/Games'
import About from './Pages/About'
import Documentation from './Pages/Documentation';
import MakeaGame from './Pages/MakeaGame'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Education from './Pages/Education/Education';
function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <React.Fragment>
   
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/about'} element={<About/>}/>
              <Route exact path=  {process.env.PUBLIC_URL + '/millionaire'} element={<Millionaire/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/layoutdesigner'} element={<LayoutDesigner/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/contact'} element={<Contact/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/shop'} element={<Shop/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/games'} element={<Games/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/documentation'} element={<Documentation/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/makeagame'} element={<MakeaGame/>}/>
              <Route exact path= {process.env.PUBLIC_URL + '/education'} element={<Education/>}/>
              <Route exact path=  {process.env.PUBLIC_URL + '/404'} element={<HomePage/>} />
               
            </Routes>
        </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;