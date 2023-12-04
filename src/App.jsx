import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import { Modal } from './components/Modal';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">POC TEST</p>
        <br />
        <br />
        <br />
        <br />
        <button onClick={()=>setModalOpen(true)} id="openModal">Open the modal</button>
        <Modal open={modalOpen} setModalOpen={()=>setModalOpen(false)} />
      </header>
    </div>
  );
};
