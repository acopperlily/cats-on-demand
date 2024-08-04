import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Form = ({ status, text, keepImage, onToggleKeep, onSubmit, onChange, deleteInput }) => {

  const charLimit = 25;

  return (
    <section className="request container">

      <form className="request__form" onSubmit={onSubmit}>

        <h2 className="request__title">Demand a cat</h2>
        <p className="request__sub">You want cat, and you want it right meow.<br></br>Go on and smash that big silly button.</p>

        {status !== 'error' && <div className="request__input-container">
          <div className="request__textfield-container">

            <label className="request__label clickable" htmlFor="text">Image Text (optional) </label>

            {text.length >= charLimit && <span className="request__text-warning">Character limit reached</span>}

            <div className="request__text-container">

              <input
                type="text" 
                id="text"
                maxLength={charLimit}
                value={text} 
                onChange={onChange}
              />

              <div className="request__delete-container clickable">

                <FaTimesCircle className="request__delete-icon" onClick={deleteInput}/>

              </div>

            </div>

          </div>

          <div className="request__check-container">

            <label className="request__label clickable" htmlFor="keep">Keep kitty, change image text</label>

            <input
              className="request__toggle"
              type="checkbox" 
              name="keep" 
              id="keep" 
              checked={keepImage}
              onChange={(e) => onToggleKeep(e.target.checked)}
            />

            <label htmlFor="keep" className="request__switch clickable"></label>

          </div>

        </div>}

        <button
          className="request__button" 
          type='submit'
          disabled={status === 'loading'}
        >
          Show Me Your Kitties
        </button>

      </form>
      
    </section>
  );
};

export default Form;
