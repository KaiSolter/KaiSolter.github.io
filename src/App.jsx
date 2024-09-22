import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import WorkExp from './WorkExp';
import Projects from './Projects';
import Contacts from './Contact';
import Assignments from './Assignments';

function App() {
  return (

    <HashRouter>
      <div>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<WorkExp />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/assignments" element={<Assignments />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
