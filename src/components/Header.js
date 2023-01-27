import React from "react";
import { FaInfoCircle } from 'react-icons/fa';

const Header = props => {
  return (
    <header>
      <h1>Cats On Demand</h1>
      {/* <div className="infoContainer"> */}
        <FaInfoCircle
          className="info"
          onClick={props.handleClick}
        />
      {/* </div> */}
    </header>
  );
};

export default Header;