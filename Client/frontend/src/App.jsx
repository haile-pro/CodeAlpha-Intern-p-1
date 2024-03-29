import { useState } from 'react'
import './App.css'
import QuestionForm from './Components/QuestionForm'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './Components/AboutMe'


function App() {
 

  return (
    <>
    <Routes>
           <Route>
           <Route path="/" element={<QuestionForm/>}/>
           <Route path="/about" element={<AboutMe/>}/>
           </Route>
    </Routes>

     
    </>
  )
}

export default App
