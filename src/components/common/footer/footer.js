import React from "react";
import { Button, Icon, Image, Text } from "../../shared";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.footerContent}>
        <div className={Styles.footerTopMain}>
          <div className={`${"dGridJustifyCenter"} ${Styles.footerTopLeftContent}`}>
            <Image className={"mB10"} src=" assets/images/clutchLogo.svg" />
            <Text color={"white"} variant="smText">
              REVIEWED ON
            </Text>
            <Image className={"mB5 mt10"} src=" assets/images/startRating.png" />
            <Text color={"white"} variant="smText">
              8 REVIEWS
            </Text>
          </div>
          <div className={`${"dGridJustifyCenter"} ${Styles.footerTopCenterContent}`}>
            <Image className={"mb30"} src=" assets/images/Gtwo.svg" />
            <Text color={"white"} variant="smText">
              REVIEWED ON
            </Text>
            <Image className={"mB5 mt10"} src=" assets/images/startRating.png" />
            <Text color={"white"} variant="smText">
              8 REVIEWS
            </Text>
          </div>
          <div className={Styles.footerTopRightContent}>
            <Text color={"white"} variant="bigText" 
            className={Styles.hireTextHeading}>
              Ready to Hire
            </Text>
            <Text
              strong={"strong6"}
              color={"white"}
              variant="big01Text"
              className={Styles.topTalentTextHeading} >
              Top Sales Talent?
            </Text>
            <Text className={Styles.RequestTextContent} color={"white"} variant="mlgText">
              Request a live demo today to learn how HireDNA can help you hire
              better SaaS sales talent.
            </Text>
          </div>
          <div className={`${Styles.footerMainBtn} ${"mt90"}`}>

          <Button className={`${Styles.getBtn} ${"centerAlign"}`} variant={"xmd"} color="redPrimary">
            Get Started <Icon className={"ml10"} type="rightArrow" />
          </Button>
          </div>
        </div>
        <div className={Styles.footerBottomMain}>
          <div className={`${"dFlex justifyContentCenter flexColumn"} ${Styles.footerBottomLeftContent}`}>
            <Image src="assets/images/dnaLogoThird.png" />
            <div className={`${Styles.iconMain} ${"flexCenter mt50"}`}>
              <Icon type="linkedin" color={"white"} />
              <Icon className={"ml20 mr20"} type="twitter" color={"white"} />
              <Icon className={"mr20"} type="facebook" color={"white"} />
              <Icon type="youtube" color={"white"} />
            </div>
          </div>
          <div className={`${"flexCenter"} ${Styles.footerBottomCenterContent}`}>
            <div className={Styles.employeesMain}>
              <Text
                strong={"strong6"}
                color={"white"}
                variant="mlgText"
                className={"mb20"}
              >
                Employers
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Getting Started
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Login
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Sign up
              </Text>
            </div>
            <div className={Styles.candidateMain}>
              <Text
                strong={"strong6"}
                color={"white"}
                variant="mlgText"
                className={"mb20"}
              >
                Candidates
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Getting Started
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Login
              </Text>
              <Text color={"white"} variant="smText" className={"mb20"}>
                Sign up
              </Text>
            </div>
            <div className={Styles.footerBottomRightContent}>
              <Text color={"white"} variant="bigText" className={Styles.getLatestText}>
                Get The Latest Sales Strategies, Trends + Tips
              </Text>
              <Text
                                color={"white"}
                variant="mlgText"
                className={`${Styles.followLinkedinText} ${"mt40 cursor"}`}
              >
                Follow Us On LinkedIn
              </Text>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={`${"mlAuto centerAlign"} ${Styles.footerEnd}`}>
        <Text className={"dFlex"} color={"white"} variant="smText">
          © 2022 HireDNA{" "}
          <Text className={"ml20 mr20"} color={"white"} variant="smText">
            |
          </Text>{" "}
          Terms{" "}
          <Text className={"ml20 mr20"} color={"white"} variant="smText">
            |
          </Text>{" "}
          Privacy Policy
        </Text>
      </div>
    </div>
  );
};

// Footer.propTypes = {};

export default Footer;
