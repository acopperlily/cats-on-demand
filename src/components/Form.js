import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Form = props => {
  return (
    <section className="request container">
      <h2 className="request__title">Demand a cat</h2>

      <form className="request__form" onSubmit={props.onSubmit}>
        {!props.error && <div className="request__input-container">
          <div className="request__textfield-container">
            <label className="request__label" htmlFor="text">Message (optional) </label>
            <div className="request__text-container">
              <input
                type="text" 
                id="text"
                value={props.text} 
                onChange={props.onChange}
              />
              <div className="request__delete-container">
                <FaTimesCircle className="request__delete-icon" onClick={props.deleteInput}/>
              </div>
            </div>
          </div>

          <div className="request__check-container">
            <label className="request__label" htmlFor="keep">Keep kitty, change message</label>
            <input
              className="request__toggle"
              type="checkbox" 
              name="keep" 
              id="keep" 
              onChange={e => props.toggleKeep(e)} 
            />
            <label htmlFor="keep" className="request__switch"></label>
          </div>
        </div>}

        <button className="request__button" type='submit'>Show Me Your Kitties</button>
      </form>
    </section>
  );
};

export default Form;