import PropTypes from "prop-types";

function Header({ logo }) {
  return (
    <header>
      <div className="container">
        <h2>{logo}</h2>
      </div>
    </header>
  );
}

Header.PropTypes = {
  logo: PropTypes.string,
};

export default Header;
