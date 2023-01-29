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

        <p>COD is a web application that retrieves cat photos and GIFs from <a href="https://cataas.com/#/" target='_blank' >Cataas</a> (Cat as a Service) API.*</p>

        <p>Demanding a cat is as simple as smashing that big silly button.</p>

        <p>You can demand a cat with or without a message. Enter a word or phrase into the text field or just leave it blank.**</p>

        <p><small>* <a href="https://cataas.com/#/" target='_blank'>Cataas</a> is currently in "under recovery mode", and there may be interruptions in service as they migrate to a new server. If you encounter any errors, admire my darling Pele and try demanding a cat some other time.***</small></p>

        <p><small>** In order to avoid errors in text rendering, some characters may be removed from input. No, you are not being censored.</small></p>

        <p><small>*** Pele was my bestest buddy for over fourteen years. Despite her resemblance to a soccer ball, Pele was named after the Hawaiian volcano goddess &#8212; not the Brazilian football legend Pelé. This site is dedicated to my goofy little baby.</small></p>

      </div>
    </div>
  );
};

export default Modal;