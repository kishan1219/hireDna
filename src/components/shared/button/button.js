import React from "react";
import PropTypes from "prop-types";
import Styles from "./button.module.scss";
/**
 * Render Icon
 * @param {string} variant
 * @param {string} size 
 * @param {string} type
 * @param {bool} disabled
 * @param {fun} onClick
 * @param {any} children
 * @param {any} text
 * @param {string} color
 * @param {string} className
 */

const Button = ({
  variant,
  size,
  type,
  disabled,
  onClick,
  color,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${Styles.button}
         ${Styles[variant]} ${Styles[size]} 
         ${className} ${Styles[color]} 
        `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.any,
};

Button.defaultProps = {
  variant: "solidPrimary",
  size: "md",
  disabled: false,
  children: "Button Title",
};
export default Button;
