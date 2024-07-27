/* IMPORTS -------------------------------------------------------------*/
// allows us to manage state
import { useState } from 'react'

// handle routing
import { Routes, Route } from 'react-router-dom'

// import navbar component
import Navbar from './components/navbar/Navbar'

// import Schedule
import Schedule from './pages/Schedule'

// styling
import './App.css'

// axios for connecting to back end
import axios from 'axios'

// dotenv for .env variables
import dotenv from 'dotenv'



/* MAIN APP -------------------------------------------------------------*/
function App() { 

 // what to display on app 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Schedule' element={<Schedule />} />
      </Routes>
      
    </>
  )
}

/* EXPORT -------------------------------------------------------------*/
export default App
