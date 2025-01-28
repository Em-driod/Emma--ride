import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Component/Navbar';  
import Footer from './Component/Footer';
import HomePage from './Pages/HomePage';  
import News from './Pages/news';
import Research from './Pages/Research';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Navbar />  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path='/News' element={<News />} />
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

