import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import WorkExp from './WorkExp';
import Projects from './Projects';
import Contacts from './Contact';

function App() {
  return (

    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WorkExp" element={<WorkExp />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
};

export default App;
