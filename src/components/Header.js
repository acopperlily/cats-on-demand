import React from "react";
import { FaInfoCircle } from 'react-icons/fa';

const Header = props => {
  return (
    <header>

      <h1 className="header__title">Cats On Demand</h1>

      <div className="header__info-container clickable" onClick={props.handleClick}>
        <FaInfoCircle className="header__info-icon" />
      </div>

    </header>
  );
};

export default Header;