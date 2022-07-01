import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import I3 from './pages/Indice3';
import Imc from './pages/Imc';
import Bhaskara from './pages/Bhaskara';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<I3 />} />
          <Route path='/Imc' element={<Imc />} />
          <Route path='/Bhaskara' element={<Bhaskara />} />        
        </Routes>
      </Router>
    </>
  );
}

export default App;
