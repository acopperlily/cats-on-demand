import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Image from './components/Image';
import Form from './components/Form';

const urlBreakdown = {
  domain: 'https://cataas.com/cat',
  textParam: '/says/',
  fontParam: '?fontSize=50&fontColor=%23FFF',
  jsonParam: '&json=true'
};

const { domain, textParam, fontParam, jsonParam } = urlBreakdown;

function App() {
  const [text, setText] = useState('AYYY');
  const [imageID, setImageID] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [keepImage, setKeepImage] = useState(false);
  let ref = useRef(0);

  const getFetchURL = () => {

    // https://cataas.com/cat
    let url = domain; 

    /* 
      With imageID: https://cataas.com/cat/imageID
      Without:      https://cataas.com
    */
    if (keepImage) url += '/' + imageID;
    
    /* 
      With imageID and text:     https://cataas.com/cat/imageID/says/text
      With text but no imageID:  https://cataas.com/cat/says/text
    */
    if (text) {
      url += textParam + text + fontParam + jsonParam;
    } else {
      url += '?' + jsonParam.slice(1);
    }

    /* 
      With imageID and text: https://cataas.com/cat/imageID/says/text?fontSize=50&fontColor=%23FFF&json=true

      With imageID but no text: https://cataas.com/cat/imageID?fontSize=50&fontColor=%23FFF&json=true

      With text but no imageID: https://cataas.com/cat/says/text?fontSize=50&fontColor=%23FFF&json=true

      Without imageID and no text: https://cataas.com/cat?fontSize=50&fontColor=%23FFF&json=true
    */
    // url += jsonParam;
    console.log('fetch url:', url);
    return url;
  }

  const getImageURL = (id) => {

    // https://cataas.com/cat/imageID
    // if (!imageID) return;
    let url = domain + '/' + id;

    /*
      With text: https://cataas.com/cat/imageID/says/text?fontSize=50&fontColor=%23FFF

      Without text: https://cataas.com/cat/imageID
    */
    if (text) url += textParam + text + fontParam;

    return url;
  }

  // Test function
  const fetchCat = async () => {
    setIsLoading(true);
    let fetchURL = getFetchURL();
    let displayURL;
    try {
      const res = await fetch(fetchURL);
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json();
      console.log('data:', data);
      setImageID(data._id);
      // setError(false);
      // displayURL = getImageURL(data._id);
      // setImageURL(displayURL);
    } catch (err) {
      console.log('error:', err);
      setError(true);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      setError(false);
    }
  };

  // Fetch cat photo on page load
  useEffect(() => {
    // let ignore = false;
    const controller = new AbortController();
    const signal = controller.signal;

    const getCat = async () => {
      setIsLoading(true);
      let fetchURL = getFetchURL();
      let displayURL;
      try {
        const res = await fetch(fetchURL, { signal });
        if (!res.ok) {
          setError(true);
        }
        const data = await res.json();
        console.log('data:', data);
        // if (!ignore) {
        //   setImageID(data._id);
        // // setError(false);
        //   // displayURL = getImageURL();
        //   // setImageURL(displayURL);
        //   setImageURL(getImageURL(data._id));
        // }
        setImageID(data._id);
        setImageURL(getImageURL(data._id));
      } catch (err) {
        console.log('error:', err);
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        setError(false);
      }
    };
    getCat();
    // setImageURL(getImageURL());
    return () => {
      // ignore = true;
      controller.abort();
    }
  }, [triggerFetch]);

  // useEffect(() => {
  //   const url = getImageURL();
  //   setImageURL(url);
  //   setTriggerFetch(false);
  // }, [imageID, triggerFetch]);

   // Remove problematic chars before fetching
  const sanitizeInput = () => {
    let oldText = text.replace(/[?#%/\\]/gi, '');
    setText(oldText);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const deleteInput = e => {
    setText('');
  };

  const handleClick = () => {
    console.log('modal', toggleModal);
    setToggleModal(!toggleModal);
  };

  // Test click function
  const handleSubmit = e => {
    e.preventDefault();
    sanitizeInput();
    // fetchCat();
    setTriggerFetch(!triggerFetch);
    console.log('handle submit text:', text);
  };

  console.log('ref:', ref.current);
  ref.current = ref.current + 1;

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

            <Form onSubmit={handleSubmit} onChange={handleChange} text={text} deleteInput={deleteInput} keepImage={keepImage} error={error} onToggleKeep={setKeepImage} />
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
