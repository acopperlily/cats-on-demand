import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [imageURL, setImageURL] = React.useState('');
  const [text, setText] = React.useState('LOOK AT MEOW');
  const [triggerFetch, setTriggerFetch] = React.useState(false);

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

  console.log('text:', text);

  return (
    <div className="App">
      <Header />
      <div className="imageContainer">
        <img src={`https://cataas.com${imageURL}`} alt="cat" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)}
        />
        <button type='submit'>Show Me Your Kitties</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
