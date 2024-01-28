import React from 'react';
import Message from './Message';

const Image = ({ image }) => {
  // Example url to display photo
  // https://cataas.com/cat/cCJzyTTdiFMyIyHG/says/ayyy?font=Impact&fontSize=50&fontColor=%23FFF

  console.log('image url:', image);

  const cat = <img src={image} className='image' alt='cat' />;

  return (
    <section className="image__container" >
      {cat}

    </section>
  );
};

export default Image;
