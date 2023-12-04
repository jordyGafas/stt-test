import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import { Modal } from './components/Modal';

import './index.css';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [numberOpened, setNumberOpened] = useState(0);
  return (
    <div className="app">
      <header className="app-header">
        <Router>
          <Routes>
            <Route path="/" element={<div>Home page</div>} />
            <Route path="/page" element={<div>Some page</div>} />
          </Routes>
          <img src={logo} className="app-logo" alt="logo" />
          <br />
          <br />
          <p className=' text-red-500'>Menu</p>
          <br />
          <ul className='flex space-x-20'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page">Other Page</Link>
            </li>
          </ul>
          <br />
          <br />
          <button
            onClick={() => {
              setModalOpen(true);
              setNumberOpened(numberOpened + 1);
            }}
            id="openModal"
          >
            Open the modal
          </button>
          <p className=" text-sm"> {numberOpened} times opened</p>
          <Modal open={modalOpen} setModalOpen={() => setModalOpen(false)} />
        </Router>
      </header>
    </div>
  );
};
