import React from "react";
import PropTypes from "prop-types";
import Styles from "./layout.module.scss";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children,headerVariant,isHeader }) => {
  return (
    <div className={Styles.layoutMain}>
      <div className={Styles.headerMain}>
        <Header variant={headerVariant} isHeader={isHeader} />
      </div>
      <div className={Styles.mainContainer}>{children}</div>
      <div className={Styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  layoutClass: PropTypes.string,
  headerVariant: PropTypes.string,
  isHeader: PropTypes.bool,
};

export default Layout;
