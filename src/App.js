import React, { useState } from 'react';
import { ProjectsContext } from './Context/ProjectsContext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LayoutDesigner from './pages/LayoutDesigner'

import {BrowserRouter,  Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './Layouts/Header';
import Millionaire from './pages/Millionaire';
import Temp from './pages/Temp'
import Games from './pages/Games'
import About from './pages/About'
import Documentation from './pages/Documentation';
import MakeaGame from './pages/MakeaGame'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

import LoginPage from './pages/LoginPage'

function App() {
  
  return (
    <React.Fragment>
   
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path= { '/about' } element={<About/>}/>
              <Route exact path= { '/login' } element={<LoginPage/>}/>
              <Route exact path= { '/millionaire' } element={<Millionaire/>}/>
              <Route exact path= { '/layoutdesigner' } element={<LayoutDesigner/>}/>
              <Route exact path= { '/documentation' } element={<Documentation/>}/>
              <Route exact path= { '/makeagame' } element={<MakeaGame/>}/>
              <Route exact path= { '/contact' } element={<Contact/>}/>
              <Route exact path= { '/shop' } element={<Shop/>}/>
              <Route exact path= { '/games' } element={<Games/>}/>
            </Routes>
        </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;