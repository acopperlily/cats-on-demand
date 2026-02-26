import { FaInfoCircle } from "react-icons/fa";

const Header = ({ isInert, handleClick }) => {
  return (
    <header inert={isInert ? '' : undefined}>

      <h1 className="header__title">Cats On Demand</h1>

      <button 
        type="button"
        className="header__info-container clickable" 
        onClick={handleClick}
      >
        <FaInfoCircle className="header__info-icon" />
      </button>

    </header>
  );
};

export default Header;
