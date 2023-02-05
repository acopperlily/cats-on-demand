import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>

    <div className="inputContainer">
      <div className="textContainer">
        <label htmlFor="text">Optional text: </label>
        <input
          type="text" 
          id='text'
          value={props.text} 
          onChange={props.onChange}
          style={{width: `${props.inputWidth}`}}
        />
        <div className="deleteContainer">
          <FaTimesCircle className="delete" onClick={props.deleteInput}/>
        </div>
      </div>

      <div className="checkContainer">
        <label htmlFor="keep">Keep photo, change text:</label>
        <input
          type="checkbox" 
          name="keep" 
          id="keep" 
          onChange={e => props.toggleKeep(e)} 
        />
      </div>
    </div>

    <button type='submit'>Show Me Your Kitties</button>
  </form>
  );
};

export default Form;