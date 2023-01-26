import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const Modal = props => {
  return (
    <div className="modal">
      <FaTimesCircle className='exit' onClick={props.handleClick}/>
      <h3>Welcome to Cats On Demand!</h3>
      <p>COD is a web app that retrieves cat photos and GIFs from the <a href="https://cataas.com/#/" target='_blank'>Cataas</a> (Cat as a Service) API.</p>
      <p>Demanding a cat is as simple as clicking the big green button.</p>
      <p>You can demand a cat with or without a message. Type some input* into the text field or leave it blank.</p>
      <p><small>* Some characters may not render and will be removed from input.</small></p>
    </div>
  );
};

export default Modal;