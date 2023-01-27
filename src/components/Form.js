import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
    <label htmlFor="text">Optional text: </label>
    <input
      type="text" 
      id='text'
      value={props.text} 
      onChange={props.onChange}
      style={{width: `${props.inputWidth}`}}
    />
    <button type='submit'>Show Me Your Kitties</button>
  </form>
  );
};

export default Form;