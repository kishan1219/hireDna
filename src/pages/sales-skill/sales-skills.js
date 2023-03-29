import React, { useEffect, useState } from "react";
import Styles from "./sales-skills.module.scss";
import { Layout } from "../../components/common";
import { Button, Icon, Image, Text } from "../../components/shared";
import { Grid } from "@mui/material";

const SalesSkills = () => {
  const [industrySalesdata, setIndustrySalesData] = useState([]);
  const [benifitsSalesdata, setBenifitsSalesData] = useState([]);
  const [showactiveWork, setShowactiveWork] = useState(1);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setIndustrySalesData(json["industrySalesdata"]))
      .catch((error) => console.log(error));
    console.table(industrySalesdata);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setBenifitsSalesData(json["benifitsSalesdata"]))
      .catch((error) => console.log(error));
    console.table(benifitsSalesdata);
  }, []);
  return (
    <Layout headerVariant="secondary" isHeader={true}>
      <div className={`${Styles.scrollBar} ${Styles.container}`}>
        {/* predictiveSales page start   */}
        <div
          className={`${"alignBetween mlAuto"} ${Styles.predictiveSalesMain}`}
        >
          <div className={Styles.predictiveSalesHeading}>
            <div className={Styles.pageHeading}>
              <Text
                className={Styles.predictiveSalesHeading}
                variant={"big02Text"}
                color="primary"
              >
                Accurate and Predictive Sales
              </Text>

              <Text
                className={`${"mt20"} ${Styles.skillsAssessmentHeading}`}
                strong={"strong7"}
                variant={"big03Text"}
                color="primary"
              >
                Skills Assessment
              </Text>
            </div>
            <div className={`${"mt30"} ${Styles.skillsParaContent}`}>
              <Text variant={"mlgText"} color="black ">
                We know from experience how difficult it is for hiring managers
                and talent teams to determine sales skills and predict sales
                performance from resumes and interviews alone. HireDNA was built
                on the industry’s #1 rated sales assessment to take the
                guesswork out of hiring and eliminate 96% of hiring mistakes.
              </Text>
            </div>
            <div className="mt25">
              <Button
                className={`${Styles.requestBtn} ${"centerAlign"}`}
                variant={"xmd"}
                color="redPrimary"
              >
                Request a Demo <Icon className={"ml10"} type="rightArrow" />
              </Button>
            </div>
          </div>
          {/* image content start here */}
          <div className={Styles.headingBesideImages}>
            <Image
              className={Styles.groupCircleImage}
              src="assets/images/salesDnaCompetencies.png"
            />
          </div>
        </div>
        {/* predictiveSales page end   */}
        {/* industry Sales page start   */}
        <div className={Styles.industrySalesContainer}>
          <div className={`${"mlAuto"} ${Styles.industrySalesMain}`}>
            <div
              className={`${
                Styles.industryHeadingMain
              } ${"dGrid justifyContentCenter mb40"}`}
            >
              <Text className={"dFlex"} variant={"bigText"} color="primary">
                The industry’s
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  {" "}
                  #1
                </Text>{" "}
                sales
              </Text>
              <Text
                className={"textCenter"}
                strong={"strong6"}
                variant={"big01Text"}
                color="primary"
              >
                skills assessment
              </Text>
            </div>
            <Grid container spacing={4}>
              {industrySalesdata.length > 0 &&
                industrySalesdata.map((data, i) => {
                  return (
                    <Grid key={i} item lg={6} sm={12} md={6} xs={12}>
                      <div className="dFlex alignItemsStart">
                        <Image className={"mr30"} src={data.logo} />
                        <div>
                          <Text
                            className={`${
                              Styles.industryDetailHeading
                            } ${"mb10"}`}
                            variant={"xxlText"}
                            color="primary"
                            strong={"strong6"}
                          >
                            {data.industrySalesHeading}
                          </Text>

                          <Text
                            className={`${
                              Styles.industrySalesDetailsContent
                            } ${"dFlex"}`}
                            variant={"mlgText"}
                            color="black01"
                          >
                            {data.industrySalesContent}
                          </Text>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>
        {/* industry Sales page end   */}
        {/* gold medal page start    */}
        <div className={`${""} ${Styles.goldMedalPageContainer}`}>
          <div className={Styles.goldMedalBackgroundimage}>
            <div className={`${"mlAuto alignBetween"} ${Styles.goldMedalMain}`}>
              <div className={Styles.goldMedalContentMain}>
                <Text
                  className={"flexCenter mb10"}
                  variant={"bigText"}
                  color="white"
                >
                  Gold medal winner
                  <Text
                    className={`${Styles.goldSalesBorderText} ${"ml10"}`}
                    variant={"big01Text"}
                    strong="strong7"
                    color="white"
                  >
                    top sales
                  </Text>
                </Text>
                <div className={"flexCenter mb10"}>
                  <Text
                    className={Styles.goldSalesBorderText}
                    variant={"big01Text"}
                    strong="strong7"
                    color="white"
                  >
                    assessment
                  </Text>
                  <Text className={"ml10"} variant={"bigText"} color="white">
                    11 consecutive years{" "}
                  </Text>
                </div>
                <Text variant={"bigText"} color="white">
                  2011-2021 topSalesWorld.com
                </Text>
              </div>

              <Image src="assets/images/goldmedal.png" />
            </div>
          </div>
        </div>
        {/* gold medal page end   */}
        {/* will to sell page start   */}
        <div className={Styles.howitWorksPageContainer}>
          <div className={`${"mlAuto"} ${Styles.howitWorksPageMain}`}>
            <div
              className={`${"centerAlign mb10"} ${Styles.howitWorksHeading}`}
            >
              <Text variant={"bigText"} color="primary">
                Get
              </Text>
              <Text
                className={"ml10 mr10"}
                variant={"big01Text"}
                color="primary"
                strong="strong6"
              >
                deep insights
              </Text>
              <Text variant={"bigText"} color="primary">
                into how
              </Text>
            </div>
            <div
              className={`${"centerAlign mb30"} ${Styles.howitWorksHeading}`}
            >
              <Text variant={"bigText"} color="primary">
                candidates will sell
              </Text>
            </div>
            <div
              className={`${"mlAuto centerAlign mb60"} ${
                Styles.sellingCompetenciesContent
              }`}
            >
              <Text variant={"mlgText"} color="black">
                We’ll provide a comprehensive report with details on how the
                candidates scored across 21 selling competencies and how they
                stack up against more than 2 million candidates assessed.
              </Text>
            </div>
            <div className={`${"alignBetween mb60"} ${Styles.selectWorksType}`}>
              <Text
                onClick={() => setShowactiveWork(1)}
                className={`${
                  showactiveWork === 1
                    ? Styles.selectProfileText
                    : Styles.profileText
                } ${"cursor textCenter"}`}
                variant={"xxlText"}
              >
                Will-to-Sell
              </Text>
              <Text
                onClick={() => setShowactiveWork(2)}
                className={`${
                  showactiveWork === 2
                    ? Styles.selectProfileText
                    : Styles.profileText
                } ${"cursor textCenter"}`}
                variant={"xxlText"}
              >
                Core Selling Skills
              </Text>
              <Text
                onClick={() => setShowactiveWork(3)}
                className={`${
                  showactiveWork === 3
                    ? Styles.selectProfileText
                    : Styles.profileText
                } ${"cursor textCenter"}`}
                variant={"xxlText"}
              >
                Sales DNA
              </Text>
            </div>

            <div
              className={`${Styles.howitWorksContentMain} ${"alignBetween"}`}
            >
              {showactiveWork === 1 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/sellCompetancies.png" />
                </div>
              ) : (
                ""
              )}
              {showactiveWork === 2 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/source.png" />
                </div>
              ) : (
                ""
              )}
              {showactiveWork === 3 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/screen.png" />
                </div>
              ) : (
                ""
              )}

              <div className={Styles.idealCandidateMain}>
                <Image src="assets/images/dnaLogo.png" />
                <Text
                  className={`${"mt30 mb20"} ${Styles.idealCandidateHeading}`}
                  variant={"xxlText"}
                  color="primary"
                  strong={"strong6"}
                >
                  Will-to-sell
                </Text>

                <div className={`${"mb50"} ${Styles.idealCandidateContent}`}>
                  <Text variant={"mlgText"} color="black">
                    Looks at how motivated and coachable each candidate is.
                    You'll understand the candidate’s mindset, overall drive,
                    and if they have the grit needed to be a top performer.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* will to sell page end   */}
        {/* benifits of using sales skill page end   */}
        <div className={Styles.benifitsOfUsingSalesSkillPageContainer}>
          <div className={Styles.benifitsOfUsingSalesBackgroundMain}>
            <div className={`${"mlAuto"} ${Styles.benifitsOfUsingSalesMain}`}>
              <div
                className={`${"centerAlign mb10"} ${Styles.benifitsSalesHeading}`}
              >
                <Text
                  className={"mr10"}
                  variant={"big01Text"}
                  strong="strong6"
                  color="primary"
                >
                  Benefits
                </Text>
                <Text variant={"bigText"} color="primary">
                  of using the
                </Text>
              </div>
              <div
                className={`${"centerAlign mb60"} ${Styles.benifitsSalesHeading}`}
              >
                <Text className={"mr10"} variant={"bigText"} color="primary">
                  sales
                </Text>
                <Text variant={"big01Text"} color="primary" strong="strong6">
                  skills assessment
                </Text>
              </div>
              <div className={`${Styles.benifitsSalesContentMain} ${"alignBetween mlAuto"}`}>
                <div className={Styles.ellingCompetenceiesImage}>
                  <Image src="assets/images/sellingCompetenceies.png" />
                </div>
                <div className={`${Styles.benifitsSalesTextMain} ${"dgrid"}`}>
                  {benifitsSalesdata.length > 0 &&
                    benifitsSalesdata.map((data, i) => {
                      return (
                        <div key={i} className="dFlex mb20">
                          <Icon
                            className={"mr10 mt5"}
                            variant={"xxxlIcon"}
                            type={data.type}
                            color={"greenPrimary"}
                          />
                          <Text variant={"xxlText"} color="black">
                            {data.benifitContent}
                          </Text>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* benifits of using sales skill page end   */}
      </div>
    </Layout>
  );
};

export default SalesSkills;
