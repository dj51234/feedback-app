import { PropTypes } from "prop-types";

function Button({ children, buttonType, classType, isDisabled }) {
  return (
    <button
      buttonType={buttonType}
      disabled={isDisabled}
      className={`btn btn-${classType}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  buttonType: "button",
  classType: "primary",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string,
  classType: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
