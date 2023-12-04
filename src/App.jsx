import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import { Modal } from './components/Modal';

import './index.css';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [numberOpened, setNumberOpened] = useState(0);
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">POC TEST</p>
        <br />
        <br />
        <br />
        <br />
        <button onClick={()=>{setModalOpen(true);setNumberOpened(numberOpened+1)}} id="openModal">Open the modal</button>
        <p className=' text-sm'> {numberOpened} times opened</p>
        <Modal open={modalOpen} setModalOpen={()=>setModalOpen(false)} />
      </header>
    </div>
  );
};
