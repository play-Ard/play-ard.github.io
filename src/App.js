import React, {Suspense } from 'react';

import { ProjectsContext } from './Context/ProjectsContext';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


import {BrowserRouter,  Routes, Route, HashRouter} from 'react-router-dom'
import HomePage from './Pages/HomePage';

import Millionaire from './Pages/Millionaire';

import MakeaGame from './Pages/MakeaGame'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Panel from './Pages/Panel'

import LoginPage from './Pages/LoginPage'
import Roadmap from './Pages/Roadmap';


const About = React.lazy(() => import('./Pages/About'))
const Games = React.lazy(() => import('./Pages/Games'))
const Documentation = React.lazy(() => import('./Pages/Documentation'))
const LayoutDesigner = React.lazy(() => import('./Pages/LayoutDesigner'))

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  
  return (
    <React.Fragment>
   
        <BrowserRouter>

          <Suspense fallback={loading}>  {/* if the page loads, this action happens */}

            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path= { '/about' } element={<About/>}/>
              <Route path= { '/roadmap' } element={<Roadmap/>}/>s
              <Route path= { '/login' } element={<LoginPage/>}/>
              <Route path= { '/millionaire' } element={<Millionaire/>}/>
              <Route path= { '/layoutdesigner' } element={<LayoutDesigner/>}/>
              <Route path= { '/documentation' } element={<Documentation/>}/>
              <Route path= { '/makeagame' } element={<MakeaGame/>}/>
              <Route path= { '/contact' } element={<Contact/>}/>
              <Route path= { '/shop' } element={<Shop/>}/>
              <Route path= { '/games' } element={<Games/>}/>
              <Route path= { '/panel/*' } element={<Panel/>}/>
            </Routes>

          </Suspense>
        </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;