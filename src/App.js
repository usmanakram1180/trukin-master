import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Scenes/About';
import Services from './Scenes/Services';
import Reviews from './Scenes/Reviews';
import Contactus from './Scenes/Contactus';
import Experts from './Scenes/Experts';
import Assignment from './Scenes/Assignment'
import Quizez from './Scenes/Quizez'
import Paper from './Scenes/Paper'
import Thesis from './Scenes/Thesis'
import Article from './Scenes/Article'
import Computer_Science from './Scenes/Computer_Science'
import Finance from './Scenes/Finance';
import Management from './Scenes/Management';
import Statistics from './Scenes/Statistics';
import Sample_Design from './Scenes/Sample_Design'
import Sample from './Scenes/Sample';
import Assignment_Solution from './Scenes/Assignment_Solution'
import Whatsappicon from './Scenes/Whatsappicon';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/About' element={<About />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/experts' element={<Experts />} />
          <Route path='/services' element={<Services />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/quizez' element={<Quizez />} />
          <Route path='/paper' element={<Paper />} />
          <Route path='/thesis' element={<Thesis />} />
          <Route path='/article' element={<Article />} />
          <Route path='/computer_Science' element={<Computer_Science />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/management' element={<Management />} />
          <Route path='/Statistics' element={<Statistics />} />
          <Route path='/sample_Design' element={<Sample_Design />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='/assignment_Solution' element={<Assignment_Solution />} />
        </Routes>
      </BrowserRouter>
      <Whatsappicon />
    </>
  )
}

export default App
