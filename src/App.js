import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Image from './components/Image';
import Form from './components/Form';

function App() {
  const [imageURL, setImageURL] = React.useState('');
  const [imageID, setImageID] = React.useState('');
  const [text, setText] = React.useState('U CAN HAZ KITTEH');
  const [triggerFetch, setTriggerFetch] = React.useState(false);
  const [inputWidth, setInputWidth] = React.useState(`${text.length + 2}ch`);
  const [toggleModal, setToggleModal] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [keepImage, setKeepImage] = React.useState(false);

  // Remove problematic chars before fetching
  const sanitizeInput = () => {
    let oldText = text.replace(/[?#%/\\]/gi, '');
    setText(oldText);
  };

  React.useEffect(() => {
    setIsLoading(true);
    const makeFetchHappen = async () => {
      let url = `https://cataas.com/cat/`;
      if (keepImage) url += imageID;
      try {
        const res = await fetch(`${url}/says/${text || ' '}?json=true`);
        const data = await res.json();
        console.log('data:', data);
        setImageURL(data.url);
        setImageID(data._id);
        setError(false);
      } catch (err) {
        console.log('error:', err);
        setError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
    makeFetchHappen();
  }, [triggerFetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sanitizeInput();
    setTriggerFetch(!triggerFetch);
  };

  const handleChange = e => {
    setText(e.target.value);
    let length = e.target.value.length;
    if (length > 5) {
      length *= 1.7;
    } else {
      length = 9;
    }
    setInputWidth(`${length}ch`);
  };

  const deleteInput = e => {
    setText('');
    setInputWidth('9ch');
  };

  const toggleKeep = e => {
    console.log('checked?', e.target.checked);
    setKeepImage(e.target.checked);
  };

  console.log('text:', text);
  console.log('len', text.length);
  console.log('width:', inputWidth);

  const handleClick = () => {
    console.log('modal', toggleModal);
    setToggleModal(toggleModal => !toggleModal);
  };


  return (

    <div className="App">

      {toggleModal && <Modal handleClick={handleClick} />}

      <div
        className="wrapper"
        style={toggleModal
          ? {filter: 'blur(8px)'} 
          : {filter: 'none'}} 
        onClick={toggleModal ? handleClick : null}
      >

        <Header handleClick={handleClick}/>

        <main>
          
          <Image url={imageURL} error={error} isLoading={isLoading} />

          <Form onSubmit={handleSubmit} onChange={handleChange} text={text} deleteInput={deleteInput} inputWidth={inputWidth} toggleKeep={toggleKeep} />

        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
