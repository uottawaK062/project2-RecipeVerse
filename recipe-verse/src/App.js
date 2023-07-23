import React from 'react';

import { Chef, FindUs, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='/recipes' element={<SpecialMenu />} />
        <Route exact path='/postRecipe' element={<FindUs />} />
        <Route exact path='/specificRecipe' element={<Chef />} />


        
      </Routes>

    </div>
  );
}

export default App;