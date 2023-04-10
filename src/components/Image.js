import React from 'react';
import Message from './Message';

const Image = props => {
  const domain = 'https://cataas.com';

  let path = domain + props.url;

  const cat = <img src={path} className='image' />;

  return (
    <section className="image__container" >
      {(props.isLoading || props.error) ? <Message error={props.error} isLoading={props.isLoading} /> : cat}

    </section>
  );
};

export default Image;