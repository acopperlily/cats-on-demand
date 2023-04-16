import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const Modal = props => {

  return (

    <div className="modal__container">

      <div className="modal__exit-container clickable" onClick={props.handleClick}>
        <FaTimesCircle className='modal__exit-icon' />
      </div>

      <h3 className='modal__title'>Welcome to Cats On Demand!</h3>

      <div className="modal__body">

      <div className="modal__main">
          <p>COD is a web application that retrieves cat photos and GIFs from <a href="https://cataas.com/#/" target='_blank' rel='noopener' className='modal__link clickable' >Cataas</a> (Cat as a Service) API. <a href="#fn1"><sup className='modal__num clickable'>1</sup></a></p>

          <p>Demanding a cat is as simple as smashing that big silly button.</p>

          <p>You can demand a cat with or without a message. Click the "X" to delete the text field, then you can either leave it blank or type your own message. <a href="#fn2"><sup className='modal__num clickable'>2</sup></a> </p>

          <p>Like the kitty but not the text? You can demand the same cat with a different message. Simply toggle the switch and type something else.</p>

        </div>

        <div className="modal__footnotes">
          <p id="fn1">
            <small>
              <span className="modal__num">1</span>
              <a href="https://cataas.com/#/" target='_blank' rel='noopener' className='modal__link clickable'>Cataas </a> 
              is currently in "recovery mode", and there may be interruptions in service as they migrate to a new server. If you encounter any errors, admire my darling Pele and try demanding a cat some other time. 
              <a href="#fn3"><sup className='modal__num clickable'> 3</sup></a>
            </small>
          </p>

          <p id="fn2">
            <small>
              <span className="modal__num">2</span>
              In order to avoid errors in text rendering, some characters may be removed from input. No, you are not being censored.
            </small>
          </p>

          <p id="fn3">
            <small>
              <span className="modal__num">3</span>
              Pele was my bestest buddy for over fourteen years. Despite her resemblance to a soccer ball, Pele was named after the Hawaiian volcano goddess—not the Brazilian football legend Pelé. This site is dedicated to my goofy little baby.
            </small>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Modal;