import { useEffect, useState } from "react";

import Form from "./Form";
import Image from "./Image";
import Message from "./Message";
import urlBreakdown from "../utils/urlBreakdown";

const { domain, textParam, fontParam, jsonParam } = urlBreakdown;

function MainLogic({ isInert }) {
  const [imageID, setImageID] = useState('');
  const [imageTags, setImageTags] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [status, setStatus] = useState('loading');
  const [keepImage, setKeepImage] = useState(false);

  console.log('rendering');

  const getFetchURL = (text) => {

    // setText(text);

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

  const getImageURL = (id, text) => {

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
  const getCat = async (text='') => {

    // This cancels erroneous requests
    const controller = new AbortController();
    const signal = controller.signal;

    let fetchURL = getFetchURL(text);

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
      if (!data.id) {
        console.error('Unable to parse image ID');
        setStatus('error');
        return;
      }
      if (imageID !== data.id) {
        setImageID(data.id);
        setImageTags(data.tags);
      }
      setImageURL(getImageURL(data.id, text));
      setStatus(null);
    } catch (err) {
      console.error('error:', err);
      setStatus('error');
    }
    return () => {
      controller.abort();
    }
  };

  // Fetch cat photo on page load
  useEffect(() => {

    getCat('AYYY');

  }, []);
  

  // Test click function
  const handleClick = (e, text) => {
    e.preventDefault();
    setStatus('loading');
    getCat(text);
  };

  console.log('tags:', imageTags);

  return (

    <main inert={isInert ? '' : undefined} >
      <div className="container main__container">

        {status ? <Message status={status} /> : <Image image={imageURL} tags={imageTags} />}

        <Form 
          status={status}
          keepImage={keepImage}
          onToggleKeep={setKeepImage} 
          onClick={handleClick} 
        />

      </div>
    </main>
  );
}

export default MainLogic;
