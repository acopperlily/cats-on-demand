import React from 'react';
import Message from './Message';
import loadPele from '../../src/pele.png';

const Loading = ({ isLoading }) => {

  // const cat = <img src={image} className='image' alt='cat' />;

  let warning = 'Loading...';
  let style = 'image__loading';

  return (
    <section className="image__container" >
      <Message image={loadPele} warning={warning} style={style} />

    </section>
  );
};

export default Loading;
