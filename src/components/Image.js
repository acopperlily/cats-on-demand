import React from 'react';
import Message from './Message';

const Image = ({ image, error, isLoading }) => {
  // Example url to display photo
  // https://cataas.com/cat/cCJzyTTdiFMyIyHG/says/ayyy?font=Impact&fontSize=50&fontColor=%23FFF

  const cat = <img src={image} className='image' />;

  return (
    <section className="image__container" >
      {(isLoading || error) ? <Message error={error} isLoading={isLoading} /> : cat}

    </section>
  );
};

export default Image;