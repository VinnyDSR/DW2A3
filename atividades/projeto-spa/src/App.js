import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Domestic from './components/pages/Domestic';
import Corporative from './components/pages/Corporative';
import SignUp from './components/pages/SignUp';
import NotImplemented from './components/pages/NotImplemented';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main/>} />
          <Route path='/domestic' element={<Domestic/>} />
          <Route path='/corporative' element={<Corporative/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/not-implemented' element={<NotImplemented/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;