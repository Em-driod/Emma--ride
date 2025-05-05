import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Component/Navbar';  
import Footer from './Component/Footer';
import Homepage  from './Pages/Homepage'
import Newss from './Component/Newss';
import Research from './Pages/Research';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Navbar />   
        <Routes>  
          < Route path='/' element={<Homepage />} />
          <Route path='/News' element={<Newss />} />
          <Route path='/Research' element={<Research />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>  
        <Footer />  
      </div>  
    </Router>  
  );  
};  

export default App;

