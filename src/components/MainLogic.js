import React, { useEffect, useState } from 'react';

import Form from './Form';
import Image from './Image';
import Message from './Message';

const urlBreakdown = {
  domain: 'https://cataas.com/cat',
  textParam: '/says/',
  fontParam: '?fontSize=50&fontColor=%23FFF',
  jsonParam: '&json=true'
};

const { domain, textParam, fontParam, jsonParam } = urlBreakdown;

function MainLogic() {
  const [text, setText] = useState('AYYY');
  const [imageID, setImageID] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [status, setStatus] = useState('loading');
  const [keepImage, setKeepImage] = useState(false);

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
    console.log('fetch url:', url);
    return url;
  }

  const getImageURL = id => {

    // https://cataas.com/cat/imageID
    let url = domain + '/' + id;

    /*
      With text: https://cataas.com/cat/imageID/says/text?fontSize=50&fontColor=%23FFF

      Without text: https://cataas.com/cat/imageID
    */
    if (text) url += textParam + text + fontParam;

    return url;
  }

  // Fetch cat photo
  useEffect(() => {

    // This cancels erroneous requests
    const controller = new AbortController();
    const signal = controller.signal;

    const getCat = async () => {
      let fetchURL = getFetchURL();
      try {
        const res = await fetch(fetchURL, { signal });

        // Test for gateway timeout
        // const res = await fetch('https://httpstat.us/504?sleep=10000');

        if (!res.ok) {
          setStatus('error');
          throw new Error('Failed to fetch');
        }
        console.log('response:', res);
        const data = await res.json();
        console.log('data:', data);
        if (imageID !== data.id) {
          setImageID(data._id);
        }
        setImageURL(getImageURL(data._id));
        setStatus(null);
      } catch (err) {
        console.log('error:', err);
        setStatus('error');
      }
    };

    getCat();

    return () => {
      controller.abort();
    }
  }, [triggerFetch]);

   // Remove problematic chars before fetching
  const sanitizeInput = () => {
    let oldText = text.replace(/[?#%/\\]/gi, '');
    setText(oldText);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const deleteInput = () => {
    setText('');
  };

  // Test click function
  const handleSubmit = e => {
    e.preventDefault();
    setStatus('loading');
    sanitizeInput();
    setTriggerFetch(!triggerFetch);
  };

  return (

    <main>
      <div className="container main__container">

        {status ? <Message status={status} /> : <Image image={imageURL} />}

        <Form 
          status={status}
          text={text}
          keepImage={keepImage}
          onToggleKeep={setKeepImage} 
          deleteInput={deleteInput} 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
        />

      </div>
    </main>
  );
}

export default MainLogic;