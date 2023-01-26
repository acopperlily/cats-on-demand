import React from "react";
import { FaInfoCircle } from 'react-icons/fa';

const Header = props => {
  return (
    <header>
      <h1>Cats On Demand</h1>
      <FaInfoCircle
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Header;