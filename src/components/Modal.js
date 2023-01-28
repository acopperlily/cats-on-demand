import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const Modal = props => {
  return (
    <div className="modal">
      <div className="exitContainer" onClick={props.handleClick}>
        <FaTimesCircle className='exit' />
      </div>
      <h3>Welcome to Cats On Demand!</h3>

      <div className="pContainer">
        <p>COD is a web application that retrieves cat photos and GIFs from the <a href="https://cataas.com/#/" target='_blank' rel='noreferrer'>Cataas</a> (Cat as a Service) API.</p>

        <p>Demanding a cat is as simple as smashing that big silly button.</p>

        <p>You can demand a cat with or without a message. Enter a word or phrase into the text field* or just leave it blank.</p>

        <p><small>* Some characters may not render and will be removed from input.</small></p>
      </div>
    </div>
  );
};

export default Modal;