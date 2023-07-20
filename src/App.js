import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Home from './pages/Home';
function App() {
  return (
   <>
   <Router>
    <Navbar/> 
    <Poster/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
   </Router>
    
   </>
   
  
  );
}

export default App;
  