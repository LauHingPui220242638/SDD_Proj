import React, { createContext, useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Jobs from './Components/JobDiv/Jobs'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FoorterDiv/Footer'
import { Routes,Route } from 'react-router-dom'
import Goal from './Components/Goal/Goal'
import Reason from './Components/Reason/Reason'

export const JobsContext = createContext();
const App = () => {
  const [jobsData, setjobsData] = useState({});
  return (
    <div className='w-[85%] m-auto bg-white'>
      <JobsContext.Provider value={[jobsData, setjobsData]}>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<Jobs />} /> 
            <Route path="/reason" element={<Reason />} /> 
            <Route path="/goal" element={<Goal />} /> 
          </Routes>
          <Value />
          <Footer />

          

      </JobsContext.Provider>
    </div>
  )
}

export default App