import React from "react";
import PropTypes from "prop-types";
import Text from "../text/text";
import Icon from '../icon/index'
import Styles from './detailCard.module.scss'
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
const DetailCard = ({children,salesHeading,salesMoreDetailText,}) => {
  return (
    <div className={Styles.cardContainer}>
      <Text
        className={"mb20"}
        strong={"strong6"}
        variant="xxlText"
        color={"primary"}
      >
        {salesHeading}
      </Text>
      <div className={Styles.cardContent}>
       {children}
      </div>
      <div className="textRight mt40">
        <Text variant={"lgText"} color="secondary">{salesMoreDetailText}<Icon variant={"xxsIcon"} className="ml5" type="rightArrow" /></Text>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
 
    children: PropTypes.node,
    color: PropTypes.string,
    strong: PropTypes.string,
    salesHeading: PropTypes.string,
    salesMoreDetailText: PropTypes.string,

};

export default DetailCard;
