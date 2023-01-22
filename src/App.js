import React from 'react';
import './App.css';

function App() {
  const [imageURL, setImageURL] = React.useState('');
  const [text, setText] = React.useState('kitteh sez wut');
  const [triggerFetch, setTriggerFetch] = React.useState(false);

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
      <h1>Cats On Demand</h1>
      <img src={`https://cataas.com${imageURL}`} alt="cat" />
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)}
        />
        <button>Show Me Your Kitties</button>
      </form>
    </div>
  );
}

export default App;
