import React, { useEffect, useState } from "react";
import Styles from "./data-driven.module.scss";
import { Button, Icon, Image, Text } from "../../components/shared";
import { Grid } from "@mui/material";
import { Layout } from "../../components/common";

const DataDriven = () => {
  const [dataImpactData, setDataImpactData] = useState([]);
  const [candidateMatchData, setCandidateMatchData] = useState([]);
  const [moreVisibilityData, setMoreVisibilityDataData] =
    useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setDataImpactData(json["dataImpactData"]))
      .catch((error) => console.log(error));
    console.table(dataImpactData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setCandidateMatchData(json["candidateMatchData"]))
      .catch((error) => console.log(error));
    console.table(candidateMatchData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) =>
        setMoreVisibilityDataData(json["moreVisibilityData"])
      )
      .catch((error) => console.log(error));
    console.table(moreVisibilityData);
  }, []);
  return (
    <Layout headerVariant={"secondary"} isHeader={true}>
      <div className={Styles.container}>
        {/* data driven page start */}
        <div
          className={`${"mlAuto alignBetween"} ${Styles.howWeRecruitSection}`}
        >
          <div className={Styles.dnaHeading}>
            <div className={Styles.pageHeading}>
              <Text variant={"big02Text"} color="primary">
                Powerful Matching
              </Text>
              <div className="dFlex">
                <Text variant={"big02Text"} color="primary">
                  for
                </Text>
                <Text
                  className={`${"ml20"} ${Styles.saasSalesText}`}
                  strong={"strong7"}
                  variant={"big03Text"}
                  color="primary"
                >
                  Data-Driven
                </Text>
              </div>
              <Text variant={"big02Text"} color="primary">
                Hiring Decisions
              </Text>
            </div>
            <div className={`${"mt30"} ${Styles.dnaParaContent}`}>
              <Text variant={"mlgText"} color="black">
                We help sales leaders and talent teams make better, more
                informed hiring decisions with comprehensive data built on four
                key categories: role, culture, experience, and skills fit.
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
          <div className={Styles.recruiterImage}>
            <Image src="assets/images/source.png" />
          </div>
        </div>
        {/* data driven page end */}
        {/* data impact section start   */}
        <div className={Styles.industrySalesContainer}>
          <div className={`${"mlAuto"} ${Styles.industrySalesMain}`}>
            <div className={`${Styles.industryHeadingMain} ${"mb40"}`}>
              <Text
                className={"centerAlign"}
                variant={"bigText"}
                color="primary"
              >
                How
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  {" "}
                  data impacts
                </Text>{" "}
                the hiring process
              </Text>
            </div>
            <Grid container spacing={4}>
              {dataImpactData.length > 0 &&
                dataImpactData.map((data, i) => {
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
        {/* data impact section end   */}
        {/* candidate matching section start   */}
        <div className={Styles.candidateMatchingContainer}>
          <div className={`${"mlAuto"} ${Styles.candidateMatchingMain}`}>
            <div className={"dGrid mb60"}>
              <div
                className={`${"centerAlign"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text
                  className={"mr10"}
                  variant={"big01Text"}
                  strong="strong6"
                  color="primary"
                >
                  Power
                </Text>
                <Text variant={"bigText"} color="primary">
                  your recruiting engine
                </Text>
              </div>
              <div
                className={`${"centerAlign mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  with
                </Text>
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  accurate
                </Text>
                <Text className={"mr10"} variant={"bigText"} color="primary">
                  candidate
                </Text>
                <Text strong={"strong6"} variant={"big01Text"} color="primary">
                  matching
                </Text>
              </div>
              <div
                className={`${
                  Styles.textBelowHeadingMain
                } ${"dGrid justifyContentCenter"}`}
              >
                <Text
                  className={"centerAlign"}
                  variant={"mlgText"}
                  color="black01"
                >
                  Our matching algorithm uses 26 data points to determine the
                  match between employers
                </Text>
                <Text variant={"mlgText"} color="black">
                  candidates unparalleled insights into your company, culture,
                  products, and leadership teams
                </Text>
                <Text
                  className={"centerAlign"}
                  variant={"mlgText"}
                  color="black01"
                >
                  and candidates based on four key categories: role, culture,
                  experience, and skills fit.
                </Text>
              </div>
            </div>
            <div>
              {candidateMatchData.length > 0 &&
                candidateMatchData.map((data, i) => {
                  return (
                    <Grid sx={{ mt: 5, mb: 5 }} key={i} container spacing={10}>
                      <Grid
                        sx={{
                          ...(data.category === "Culture:" && {
                            order: 2,
                          }),
                          ...(data.category === "Skills:" && {
                            order: 2,
                          }),
                        }}
                        item
                        lg={6}
                        sm={12}
                        md={6}
                        xs={12}
                      >
                        <div className={Styles.idealRoleImage}>
                          <Image src={data.candidateCategoryImage} />
                        </div>
                      </Grid>
                      <Grid
                        className={Styles.skillsContentMain}
                        item
                        lg={6}
                        sm={12}
                        md={6}
                        xs={12}
                      >
                        <div>
                          <div className="flexCenter mb10">
                            <Text
                              className={"mr10"}
                              variant={"big01Text"}
                              color="primary"
                              strong={"strong6"}
                            >
                              {data.category}
                            </Text>
                            <Text variant={"bigText"} color="primary">
                              {data.categoryWorkDetail}
                            </Text>
                          </div>
                          <Text
                            className={"mb20"}
                            variant={"bigText"}
                            color="primary"
                          >
                            {data.categoryWorkDetailSecond}
                          </Text>
                          <Text variant={"mlgText"} color="black01">
                            {data.description}
                          </Text>
                        </div>
                      </Grid>
                    </Grid>
                  );
                })}
            </div>
          </div>
        </div>
        {/* candidate matching section end   */}
        {/* more visibility section start   */}
        <div
          className={`${Styles.insightAndCollaboration} ${Styles.uniqueStorySection}`}
        >
          <div className={`${"mlAuto"} ${Styles.uniqueStoryMain}`}>
            <div className={"dGrid mb60"}>
              <div
                className={`${"centerAlign"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  Get
                </Text>
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  more visibility
                </Text>
                <Text variant={"bigText"} color="primary">
                  into your
                </Text>
              </div>
              <div
                className={`${"centerAlign mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  candidates with enhanced profiles
                </Text>
              </div>
            </div>
            <div
              className={`${"flexBetween"} ${Styles.employerProfileSection}`}
            >
              <div className={Styles.employerProfileMain}>
                <div className="mb50">
                  <Text
                    className={Styles.employerProfileContent}
                    variant={"mlgText"}
                    color="black01"
                  >
                    Each candidate submission includes a detailed profile that
                    goes well beyond the typical resume and LinkedIn profile. We
                    provide specific information on the candidate’s sales
                    experience, behavioral styles, desired compensation, ideal
                    work environment, and more. Profiles will also include
                    custom match scores, screening questions, recruiter notes,
                    and a thorough skill report.
                  </Text>
                </div>

                {moreVisibilityData.map((data, i) => {
                  return (
                    <div key={i} className="dFlex mb20">
                      <Icon
                        type={data.type}
                        variant={"xxxlIcon"}
                        color={"greenPrimary"}
                      />
                      <div className="ml20">
                        <Text
                          className={`${
                            Styles.employerProfileRolesheading
                          } ${"mb10"}`}
                          strong="strong6"
                          variant={"xxlText"}
                          color="primary"
                        >
                          {data.employerProfileHeading}
                        </Text>
                        <Text
                          className={Styles.employerProfileContent}
                          variant={"mlgText"}
                          color="black01"
                        >
                          {data.employerdetails}
                        </Text>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={Styles.leaseAccelatorImage}>
                <Image src="assets/images/candidateSubmitted.png" />
              </div>
            </div>
          </div>
        </div>
        {/* more visibility   section end   */}
      </div>
    </Layout>
  );
};

export default DataDriven;
