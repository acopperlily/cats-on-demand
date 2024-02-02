import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import MainLogic from './components/MainLogic';
import Modal from './components/Modal';

import './App.css';

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalClick = () => {
    console.log('modal', toggleModal);
    setToggleModal(!toggleModal);
  };

  return (

    <div className="App">

      {toggleModal && <Modal handleClick={handleModalClick} />}

      <div
        className="wrapper"
        style={toggleModal
          ? {filter: 'brightness(20%)'}
          : {filter: 'none'}}
        onClick={toggleModal ? handleModalClick : null}
      >

        <Header handleClick={handleModalClick}/>

        <MainLogic />

        <Footer />

      </div>
      
    </div>
  );
}

export default App;
