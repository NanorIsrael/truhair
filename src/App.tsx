import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import BookNow from './pages/BookNow';
import Services from './pages/Services';
import Layout from './hoc/Layout';

function App() {
  return (
    <div className="bg-dark">
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book-now' element={<BookNow/>}/>
        <Route path='/our-services' element={<Services/>}/>
      </Routes>
     </Layout>
    </div>
  );
}

export default App;
