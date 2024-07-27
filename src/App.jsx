/* IMPORTS -------------------------------------------------------------*/
// allows us to manage state
import { useState } from 'react'

// handle routing
import { Routes, Route } from 'react-router-dom'

// import components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

// import pages
import Schedule from './pages/Schedule'
import AddNewShift from './pages/AddNewShift'
import TaskComplete from './pages/TaskComplete'
import Home from './pages/Home'
import Employees from './pages/Employees'

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
       <Route path='/Home' element={<Home />} />
        <Route path='/Schedule' element={<Schedule />} />
        <Route path='/Employees' element={<Employees />} />
        <Route path='/Add-New-Shift' element={<AddNewShift />} />
        <Route path='/Task-Complete' element={<TaskComplete />} />

      </Routes>
      <Footer />
    </>
  )
}


/* EXPORT -------------------------------------------------------------*/
export default App
