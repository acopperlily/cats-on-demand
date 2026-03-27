import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Form = ({ status, keepImage, onToggleKeep, onClick }) => {

  const [text, setText] = useState('AYYY');

  const handleSubmit = e => {
    e.preventDefault();
    onClick(e, text);
  };

  // Remove problematic chars before fetching
  const sanitizeInput = text => {
    const pattern = /[?#%/\\]/gi;
    let newText = text.replace(pattern, '');
    return newText;
  };

  const deleteInput = () => {
    setText('');
  };

  const changeText = text => {
    setText(sanitizeInput(text));
  };

  const charLimit = 25;

  return (
    <section className="request container">

      <form className="request__form" onSubmit={handleSubmit}>

        <h2 className="request__title">Demand a cat</h2>
        <p className="request__sub">You want cat, and you want it right meow.<br></br>Go on and smash that big silly button.</p>

        {status !== 'error' && <div className="request__input-container">
          <div className="request__textfield-container">

            <label 
              className="request__label clickable" 
              htmlFor="text"
            >
              Image Text (optional) 
            </label>

            {text.length >= charLimit && (
              <span 
                className="request__text-warning"
              >
                Character limit reached
              </span>
            )}

            <div className="request__text-container">

              <input
                type="text" 
                className="request__text"
                id="text"
                maxLength={charLimit}
                value={text} 
                onChange={e => changeText(e.target.value)}
              />

              <button 
                type="button"
                className="request__delete-container clickable"
                aria-label="Delete text"
                disabled={text.length === 0}
                onClick={deleteInput}
              >
                <FaTimesCircle 
                  className="request__delete-icon" 
                  aria-hidden="true"
                  focusable="false"
                />
              </button>

            </div>

          </div>
          
          <div className="request__check-container">
            <label 
              htmlFor="keep"
              className="request__label request__check-wrapper"
            >
              <span className="request__label clickable">
                Keep kitty, change image text
              </span>
              <input 
                type="checkbox" 
                className="request__toggle"
                name="keep"
                id="keep"
                checked={keepImage}
                onChange={(e) => onToggleKeep(e.target.checked)}
              />
              <span
                className="request__track"
              >
              </span>
            </label>
          </div>

        </div>
        }

        <button
          className="request__button" 
          type="submit"
          disabled={status === "loading"}
        >
          Show Me Your Kitties
        </button>

      </form>
      
    </section>
  );
};

export default Form;
