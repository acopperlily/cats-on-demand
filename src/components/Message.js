import React from "react";
import errorPele from '../../src/errorPele.jpg';
import loadPele from '../../src/pele.png';

const Message = props => {

  let path;
  let warning;
  let style;

  if (props.isLoading) {
    path = loadPele;
    warning = 'Loading...';
    style = 'loading';
  } else  {
    path = errorPele;
    warning = 'Something went wrong...';
    style = 'error';
  }

  return (
    <>
      <h4>{warning}</h4>
      <img src={path} alt="" className={style}/>
    </>
  );
};

export default Message;