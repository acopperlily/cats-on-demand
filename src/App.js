import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Image from './components/Image';
import Form from './components/Form';

function App() {
  const [imageURL, setImageURL] = useState('');
  const [imageID, setImageID] = useState('');
  const [text, setText] = useState('AYYY');
  const [toggleModal, setToggleModal] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [keepImage, setKeepImage] = useState(false);


  // URL Info
  const domain = 'https://cataas.com/cat';
  const textParam = '/says/';    
  const fontParam = '?font=Impact&fontSize=50&fontColor=%23FFF';
  const jsonParam = '&json=true';

  const getFetchURL = () => {
    let url = domain;
    if (keepImage) url += '/' + imageID;
    if (text) url += textParam + text;
    url += fontParam + jsonParam;
    return url;
  }

  const getImageURL = () => {
    let url = domain + '/' + imageID;
    if (text) url += textParam + text + fontParam;
    setImageURL(url);
  }

  // Test function
  const fetchCat = async () => {
    setIsLoading(true);
    let fetchURL = getFetchURL();
    try {
      const res = await fetch(fetchURL);
      if (!res.ok) {
        throw new Error('oops');
      }
      const data = await res.json();
      console.log('data:', data);
      setImageID(data._id);
      setError(false);
      getImageURL();
    } catch (err) {
      console.log('error:', err);
      setError(true);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }

  // Remove problematic chars before fetching
  const sanitizeInput = () => {
    let oldText = text.replace(/[?#%/\\]/gi, '');
    setText(oldText);
  };

  // Fetch cat photo on page load
  useEffect(() => {
    fetchCat();
  }, []);

  const handleChange = e => {
    setText(e.target.value);
  };

  const deleteInput = e => {
    setText('');
  };

  const toggleKeep = checked => {
    console.log(checked)
    setKeepImage(checked);
  };

  const handleClick = () => {
    console.log('modal', toggleModal);
    setToggleModal(!toggleModal);
  };

  // Test click function
  const handleSubmit = e => {
    e.preventDefault();
    sanitizeInput();
    fetchCat();
  };


  return (

    <div className="App">

      {toggleModal && <Modal handleClick={handleClick} />}

      <div
        className="wrapper"
        style={toggleModal
          ? {filter: 'brightness(20%)'}
          : {filter: 'none'}}
        onClick={toggleModal ? handleClick : null}
      >

        <Header handleClick={handleClick}/>

        <main>
          <div className="container main__container">
            <Image image={imageURL} error={error} isLoading={isLoading} />

            <Form onSubmit={handleSubmit} onChange={handleChange} text={text} deleteInput={deleteInput} keepImage={keepImage} error={error} onToggleKeep={toggleKeep} />
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
