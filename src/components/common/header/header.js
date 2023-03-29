import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
/**
 * Name: Text
 * Desc: Render text
 * @param {string} variant
 * @param {boolean} isHeader
 */
import Styles from "./header.module.scss";
import { Button, Icon, Image, Text } from "../../shared";
const Header = ({ variant, isHeader }) => {
  const [showRecruit, setShowRecruit] = useState("Recruiting");
  const [showExpertise, setShowExpertise] = useState("Expertise");
  const [showResources, setShowResources] = useState("Resources");
  const [showCompany, setShowCompany] = useState("Company");
  const [showLogin, setShowLogin] = useState("Login");
  const [showMenu, setShowMenu] = useState(window.innerWidth > 480);
  const recruitSelectHandle = (e) => {
    setShowRecruit(e.target.value);
  };
  const expertiseSelectHandle = (e) => {
    setShowExpertise(e.target.value);
  };
  const resourcesSelectHandle = (e) => {
    setShowResources(e.target.value);
  };
  const companySelectHandle = (e) => {
    setShowCompany(e.target.value);
  };
  const loginSelectHandle = (e) => {
    setShowLogin(e.target.value);
  };
  return (
    <div
      className={`${Styles[variant]}  ${
        Styles.container
      } ${"alignBetween alignItemsCenter"}`}
    >
      <Image
        className={`${Styles.logo} ${"cursor"}`}
        src={
          isHeader
            ? "assets/images/dnaLogoSecond.png"
            : "assets/images/dnaLogo.png"
        }
      />
      <div className={Styles.menuIcon}>
        <Icon
          variant={"xllgIcon"}
          color={isHeader ? "black01" : "white"}
          type="menu"
          onClick={() => setShowMenu(!showMenu) }
        />
      </div>
     {showMenu ? <> <div className={`${"flexCenter"} ${Styles.selectMain}`}>
        <div className={Styles.recruitSelectMain}>
        <Select
          className={Styles.listSelect}
          IconComponent={() => <Icon variant={"smIcon"} type="downArrow" />}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
              icon: {
                fill: "#fff",
              },
              font: "16",
            },
          }}
          value={showRecruit}
          onChange={recruitSelectHandle}
        >
          <MenuItem value={"Recruiting"}>Recruiting</MenuItem>
          <MenuItem value={"Recruiting 1"}>Recruiting 1</MenuItem>
          <MenuItem value={"Recruiting 2"}>Recruiting 2</MenuItem>
          <MenuItem value={"Recruiting 3"}>Recruiting 3</MenuItem>
        </Select>
        </div>
        <div className={Styles.recruitSelectMain}>
        <Select
          className={Styles.listSelect}
          IconComponent={() => <Icon variant={"smIcon"} type="downArrow" />}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
            },
          }}
          value={showExpertise}
          onChange={expertiseSelectHandle}
        >
          <MenuItem value={"Expertise"}>Expertise</MenuItem>
          <MenuItem value={"Expertise 1"}>Expertise 1</MenuItem>
          <MenuItem value={"Expertise 2"}>Expertise 2</MenuItem>
          <MenuItem value={"Expertise 3"}>Expertise 3</MenuItem>
        </Select>
        </div>
        <Select
          className={Styles.listSelect}
          IconComponent={() => <Icon variant={"smIcon"} type="downArrow" />}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
            },
          }}
          value={showResources}
          onChange={resourcesSelectHandle}
        >
          <MenuItem value={"Resources"}>Resources</MenuItem>
          <MenuItem value={"Resources 1"}>Resources 1</MenuItem>
          <MenuItem value={"Resources 2"}>Resources 2</MenuItem>
          <MenuItem value={"Resources 3"}>Resources 3</MenuItem>
        </Select>
        <Text
          className={`${"cursor mr40"} ${Styles.pricingText}`}
          color={isHeader ? "black01" : "white"}
          variant="lgText"
        >
          Pricing
        </Text>
        <div className={Styles.companySelectMain}>
         {isHeader ? "" : <Image
            className={`${"img-fluid"} ${Styles.semiCircleDown}`}
            src={"assets/images/semiCircleDownward.png"}
          /> }
          <Select
            className={`${Styles.companyList} ${Styles.listSelect}`}
            IconComponent={() => <Icon variant={"smIcon"} type="downArrow" />}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
                padding: 0,
              },
            }}
            value={showCompany}
            onChange={companySelectHandle}
          >
            <MenuItem value={"Company"}>Company</MenuItem>
            <MenuItem value={"Company 1"}>Company 1</MenuItem>
            <MenuItem value={"Company 2"}>Company 2</MenuItem>
            <MenuItem value={"Company 3"}>Company 3</MenuItem>
          </Select>
        </div>
      </div>
      <div className={`${"flexCenter"} ${Styles.loginMain}`}>
        <Select
          className={Styles.listSelect}
          IconComponent={() => <Icon variant={"smIcon"} type="downArrow" />}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
              padding: 0,
            },
          }}
          value={showLogin}
          onChange={loginSelectHandle}
        >
          <MenuItem value={"Login"}>Login</MenuItem>
          <MenuItem value={"Login 1"}>Login 1</MenuItem>
          <MenuItem value={"Login 2"}>Login 2</MenuItem>
          <MenuItem value={"Login 3"}>Login 3</MenuItem>
        </Select>
        <div>
          <Button
            className={`${Styles.getBtn} ${"centerAlign"}`}
            variant={"xmd"}
            color={isHeader ? "bluePrimary" : "solidPrimary"}
          >
            Get Started <Icon className={"ml10"} type="rightArrow" />
          </Button>
        </div>
      </div> </> : ""}
    </div>
  );
};

Header.propTypes = {
  variant: PropTypes.string,
  isHeader: PropTypes.bool,
};
Header.defaultProps = {
  variant: "primary",
  isHeader: false,
};

export default Header;
