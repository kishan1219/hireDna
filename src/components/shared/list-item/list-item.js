import React from "react";
import PropTypes from "prop-types";
import Styles from "./list-item.module.scss";

/**
 * Render ListItem
 * @param {node} children
 * @param {func} onClick
 * @param {string} className
 * @returns node
 */

const ListItem = ({ children, onClick, className }) => {
  return (
    <li className={`${Styles.listItem} ${[className]}`} onClick={onClick}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ListItem;
