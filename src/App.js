import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route  path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
