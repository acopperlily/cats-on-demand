import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [imageURL, setImageURL] = React.useState('');
  const [text, setText] = React.useState('LOOK AT MEOW');
  const [triggerFetch, setTriggerFetch] = React.useState(false);
  const [inputWidth, setInputWidth] = React.useState(`${text.length + 3}ch`);
  const [toggleModal, setToggleModal] = React.useState(false);

  // Remove problematic chars before fetching
  const sanitizeInput = () => {
    let oldText = text.replace(/[?#%/\\]/gi, '');
    setText(oldText);
  };

  React.useEffect(() => {
    const makeFetchHappen = async () => {
      try {
        const res = await fetch(`https://cataas.com/cat/says/${text || ' '}?json=true`);
        const data = await res.json();
        console.log('data:', data);
        setImageURL(data.url);
      } catch (err) {
        console.log('error:', err);
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
    let offset = 2;
    if (text.toUpperCase() === text) offset = 5;
    const len = text.length > 0 ? text.length + offset : 2;
    setInputWidth(`${len}ch`);
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
      <Header handleClick={handleClick}/>
      {toggleModal && <Modal handleClick={handleClick} />}
      <main style={toggleModal == true ? {filter: 'blur(8px)'} : {filter: 'none'}}>
        <div className="imageContainer">
          <img src={`https://cataas.com${imageURL}`} alt="cat" />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Optional text: </label>
          <input
            type="text" 
            id='text'
            value={text} 
            onChange={handleChange}
            style={{width: `${inputWidth}`}}
          />
          <button type='submit'>Show Me Your Kitties</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
