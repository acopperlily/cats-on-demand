import React from "react";
import loadPele from '../../src/pele.png';
import errorPele from '../../src/errorPele.jpg';

const Message = ({ isLoading }) => {

  let warning = isLoading ? 'Loading...' : 'Something went wrong...';
  let style = isLoading ? 'image__loading' : 'image__error';
  let image = isLoading ? loadPele : errorPele;
  let alt = isLoading ? 'The spinning head of a cute cow cat' : 'A cute cow cat sitting up';

  return (
    <section className="image__container">
      <h2 className="image__message">{warning}</h2>
      <img src={image} alt={alt} className={style}/>
    </section>
  );
};

export default Message;
