import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import WorkExp from './WorkExp';
import Projects from './Projects';
import Contacts from './Contact';
import Assignments from './Assignments';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter basename={'https://kaisolter.github.io'} >
      <div>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<WorkExp />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
};

export default App;
