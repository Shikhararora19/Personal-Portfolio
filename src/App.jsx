import React, { useEffect } from 'react'
import { Home,About,Projects,Contact } from './Pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  useEffect(() => {
    document.title = 'Personal Portfolio'
  
  })
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar />
            <Routes >
                <Route path="/" element={<Home/>} />             
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App