import React from 'react';
import Message from './Message';
import errorPele from '../../src/errorPele.jpg';

const Error = () => {

  // const cat = <img src={image} className='image' alt='cat' />;

  let warning = 'Something went wrong...';
  let style = 'image__error';

  console.log('why')

  return (
    <section className="image__container" >
      <Message image={errorPele} warning={warning} style={style} />

    </section>
  );
};

export default Error;
