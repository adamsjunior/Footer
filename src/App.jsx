import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Footer/>
    </Router>
  )
}

export default App

