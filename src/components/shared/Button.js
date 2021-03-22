import { PropTypes } from "prop-types";

function Button({ children, type, classType, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${classType}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "submit",
  classType: "primary",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  classType: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
