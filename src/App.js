import React from 'react';
import './App.css';

function App() {
  const [imageInfo, setImageInfo] = React.useState({});
  const [text, setText] = React.useState('kitteh sez wut');
  const [submit, setSubmit] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://cataas.com/cat/says/${text || ' '}?json=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setImageInfo(data);
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
    setSubmit(false);
  }, [submit]);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(true);
  };

  console.log('text:', text);

  return (
    <div className="App">
      <h1>Cats On Demand</h1>
      <img src={`https://cataas.com${imageInfo.url}`} alt="cat" />
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
