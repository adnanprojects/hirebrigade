import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ApplyPage from './pages/ApplyPage';
import JobDetailsPage from './pages/JobDetailsPage';

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/dashboard' Component={DashboardPage} />
        <Route path='/dashboard' Component={DashboardPage} />
        <Route path='/job/:id' Component={JobDetailsPage} />
        <Route path='/apply/:id' Component={ApplyPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;