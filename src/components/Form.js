import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Form = props => {
  console.log('form props:', props)

  const handleToggleSwitch = e => {
    props.onToggleKeep(e.target.checked);
  }

  return (
    <section className="request container">
      {/* <h2 className="request__title">You want a cat, and you want it right meow</h2> */}

      <form className="request__form" onSubmit={props.onSubmit}>
        <h2 className="request__title">Demand a cat</h2>
        <p className="request__sub">You want cat, and you want it right meow.<br></br>Go on and smash that big silly button.</p>
        {!props.error && <div className="request__input-container">
          <div className="request__textfield-container">
            <label className="request__label clickable" htmlFor="text">Message (optional) </label>
            <div className="request__text-container">
              <input
                type="text" 
                id="text"
                value={props.text} 
                onChange={props.onChange}
              />
              <div className="request__delete-container clickable">
                <FaTimesCircle className="request__delete-icon" onClick={props.deleteInput}/>
              </div>
            </div>
          </div>

          <div className="request__check-container">
            <label className="request__label clickable" htmlFor="keep">Keep kitty, change message</label>
            <input
              className="request__toggle"
              type="checkbox" 
              name="keep" 
              id="keep" 
              checked={props.keepImage}
              // onChange={e => props.toggleKeep(e)} 
              onChange={handleToggleSwitch}
            />
            <label htmlFor="keep" className="request__switch clickable"></label>
          </div>
        </div>}

        <button className="request__button" type='submit'>Show Me Your Kitties</button>
      </form>
    </section>
  );
};

export default Form;