import React from "react";
import { FaInfoCircle } from 'react-icons/fa';

const Header = props => {
  return (
    <header>

      <h1 className="header__title">Cats On Demand</h1>

      <div className="infoContainer" onClick={props.handleClick}>
        <FaInfoCircle className="info" />
      </div>

    </header>
  );
};

export default Header;