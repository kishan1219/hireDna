import React from "react";
import PropTypes from "prop-types";
import Styles from "./text.module.scss";
/**
 * Name: Text
 * Desc: Render text
 * @param {node} children
 * @param {string} color
 * @param {isRequired} text
 * @param {string} variant
 * @param {string} className
 * @param {func} onClick
 * @param {string} underline
 * @param {string} value
 */
const Text = ({
  children,
  color,
  strong,
  variant,
  className,
  onClick,
  htmlfor,
  underline,
  value,
}) => {
  const fontColor = color ? Styles[color] : "";
  const fontWeight = strong ? Styles[strong] : "";
  return (
    <div
      htmlFor={htmlfor}
      className={`${
        Styles[variant]
      } ${fontColor} ${value} ${underline} ${fontWeight} ${[
        className,
      ]}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Default Props
Text.defaultProps = {
  variant: "mdText",
  className: "",
  color: "black",
  children: "",
  strong: "",
};
// PropTypes Validation
Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  strong: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  htmlfor: PropTypes.string,
  underline: PropTypes.string,
  value: PropTypes.string,
};

export default Text;
