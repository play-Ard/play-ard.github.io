import React, { useState } from 'react';
import { ProjectsContext } from './Context/ProjectsContext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LayoutDesigner from './pages/LayoutDesigner'

import {BrowserRouter,  Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Millionaire from './pages/Millionaire';
import Temp from './pages/Temp'
import Games from './pages/Games'
import About from './pages/About'
import Documentation from './pages/Documentation';
import MakeaGame from './pages/MakeaGame'
function App() {
  
  return (
    <React.Fragment>
   
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/millionaire' element={<Millionaire/>}/>
              <Route path='/layoutdesigner' element={<LayoutDesigner/>}/>
              <Route path='/documentation' element={<Documentation/>}/>
              <Route path='/makeagame' element={<MakeaGame/>}/>
              <Route path='/games' element={<Games/>}/>
            </Routes>
        </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;