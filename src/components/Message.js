import React from "react";

const Message = ({ image, warning, style }) => {

  return (
    <>
      <h2 className="image__message">{warning}</h2>
      <img src={image} alt="The spinning head of a cute cow cat" className={style}/>
    </>
  );
};

export default Message;
