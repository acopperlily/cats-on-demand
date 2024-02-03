import React from 'react';
import Message from './Message';

const Image = ({ image, tags }) => {
  // Example url to display photo
  // https://cataas.com/cat/cCJzyTTdiFMyIyHG/says/ayyy?font=Impact&fontSize=50&fontColor=%23FFF

  let altText = 'Cat';
  if (tags.length) {
    altText += ` tagged as ${tags.join(', ')}`;
  }

  const cat = <img src={image} className='image' alt={altText} />;

  return (

    <section className="image__container" >
      {cat}
    </section>

  );
};

export default Image;
