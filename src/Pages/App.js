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

import Falan from './Pages/Falan'

import LoginPage from './Pages/LoginPage'
import TempLayout from './Layouts/TempLayout';

const AdminPanelLayout = React.lazy(() => import('./Layouts/AdminPanelLayout'))

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
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path= { '/about' } element={<About/>}/>s
              <Route exact path= { '/login' } element={<LoginPage/>}/>
              <Route exact path= { '/millionaire' } element={<Millionaire/>}/>
              <Route exact path= { '/layoutdesigner' } element={<LayoutDesigner/>}/>
              <Route exact path= { '/documentation' } element={<Documentation/>}/>
              <Route exact path= { '/makeagame' } element={<MakeaGame/>}/>
              <Route exact path= { '/contact' } element={<Contact/>}/>
              <Route exact path= { '/shop' } element={<Shop/>}/>
              <Route exact path= { '/games' } element={<Games/>}/>

              <Route exact path= { '/falan' } element={<Falan/>}/>

              <Route exact path={ '/templayout' } elemet={<TempLayout/>}/>

            </Routes>

          </Suspense>
        </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;