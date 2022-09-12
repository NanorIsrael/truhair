import React from 'react';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import BookNow from './pages/BookNow';
import Services from './pages/Services';

function App() {
  return (
    <div className="bg-dark">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book-now' element={<BookNow/>}/>
        <Route path='/our-services' element={<Services/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
