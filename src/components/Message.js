import React from "react";
import errorPele from '../../src/errorPele.jpg';
import loadPele from '../../src/pele.png';

const Message = ({ error, isLoading }) => {

  let path;
  let warning;
  let style;

  if (isLoading) {
    path = loadPele;
    warning = 'Loading...';
    style = 'image__loading';
  } else {
    path = errorPele;
    warning = 'Something went wrong...';
    style = 'image__error';
  }

  return (
    <>
      <h2 className="image__message">{warning}</h2>
      <img src={path} alt="" className={style}/>
    </>
  );
};

export default Message;