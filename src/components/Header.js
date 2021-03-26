import PropTypes from "prop-types";

function Header({ logo, bgColor, textColor }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>{logo}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  logo: "Feedback App",
  bgColor: "#233D4D",
  textColor: "#FE7F2D",
};

Header.propTypes = {
  logo: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
