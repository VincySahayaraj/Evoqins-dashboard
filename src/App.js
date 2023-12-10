import logo from './logo.svg';
import './App.css';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect, Fragment } from 'react';
import Dashboard from './Components/Dashboard/dashboard';
import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import ManageDomain from './Components/Manage Domains/managedomains'

function App() {
  return (
    <div className="App">
      <Router>
      <div className='fixed-header'>
      <Header/>
      <Navbar/>
      </div>
        <Routes>
          <Fragment>
            <Route path="/" element={<Dashboard  />} exact />
            <Route path="/domains" element={<ManageDomain  />} exact />
          </Fragment>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
