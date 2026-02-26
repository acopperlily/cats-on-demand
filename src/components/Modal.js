import { useEffect, useRef } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Modal = ({ handleClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (

    <div 
      className="modal__container"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about"
      tabIndex={-1}
      ref={ref}
    >

      <button 
        type="button"
        className="modal__exit-container clickable" 
        onClick={handleClick}
        aria-label="Close modal"
      >
        <FaTimesCircle className="modal__exit-icon" />
      </button>

      <h3 
        className="modal__title"
        id="about"
      >
        Welcome to Cats On Demand!
      </h3>

      <div className="modal__body">

        <div className="modal__main">
          <p>
            COD is a web application that retrieves cat photos from
            <a 
              href="https://cataas.com/#/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal__link clickable"
            >
              Cataas
            </a> 

            (Cat as a Service) API. 

            <a 
              href="#fn1"
              aria-describedby="fn1"
              className="modal__num-container"
            >
              <sup className='modal__num clickable'>1</sup>
            </a>
          </p>

          <p>Demanding a cat is as simple as smashing that big silly button.</p>

          <p>
            You can demand a cat with or without image text. Click the "X" to delete the text field, then you can either leave it blank or type your own text. 
            <a 
              href="#fn2"
              aria-describedby="fn2"
              className="modal__num-container clickable"
            >
              <sup className='modal__num'>2</sup>
            </a> 
          </p>

          <p>Like the kitty but not the image text? You can demand the same cat with different text. Simply toggle the switch and type something else.</p>

        </div>

        <div className="modal__footnotes">
          <p id="fn1">
            <small>
              <span className="modal__num">1</span> 

              There may be interruptions in service when 

              <a 
                href="https://cataas.com/#/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal__link clickable"
              >  
                Cataas 
              </a> 

              is performing maintenance or experiencing server issues. If you encounter any errors, admire my darling Pele and try demanding a cat some other time. 
              <a 
                href="#fn3"
                aria-describedby="fn3"
                className="modal__num-container"
              >
                <sup className='modal__num clickable'>3</sup>
              </a>
            </small>
          </p>

          <p id="fn2">
            <small>
              <span className="modal__num">2</span>
              In order to avoid errors in text rendering, some characters may be removed from input. Be mindful of the 25-character limit, but also be advised that your message may not display in its entirety due to the orientation of the photo retrieved. No, you are not being censored.
            </small>
          </p>

          <p id="fn3">
            <small>
              <span className="modal__num">3</span>
              Pele was my bestest buddy for over fourteen years. Despite her resemblance to a traditional soccer ball, Pele was named after the Hawaiian volcano goddess—not the Brazilian football legend Pelé. This site is dedicated to my goofy little baby.
            </small>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Modal;
