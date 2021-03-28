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
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#FC8031",
};

Header.propTypes = {
  logo: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
