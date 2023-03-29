import React, { useEffect, useState } from "react";
import Styles from "./how-we-recruit.module.scss";
import { Layout } from "../../components/common";
import { Button, Icon, Image, Text } from "../../components/shared";

const HowWeRecruit = () => {
  const [TalentStepsData, setTalentStepsData] = useState([]);
  const [employerProfileData, setEmployerProfileData] = useState([]);
  const [insightAndCollaborationData, setInsightAndCollaborationData] =
    useState([]);
  const [talentTeamAndHiringData, setTalentTeamAndHiringData] = useState([]);
  const [showactiveWork, setShowactiveWork] = useState(1);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setTalentStepsData(json["TalentStepsData"]))
      .catch((error) => console.log(error));
    console.table(TalentStepsData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setEmployerProfileData(json["employerProfileData"]))
      .catch((error) => console.log(error));
    console.table(employerProfileData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) =>
        setInsightAndCollaborationData(json["insightAndCollaborationData"])
      )
      .catch((error) => console.log(error));
    console.table(insightAndCollaborationData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) =>
        setTalentTeamAndHiringData(json["talentTeamAndHiringData"])
      )
      .catch((error) => console.log(error));
    console.table(talentTeamAndHiringData);
  }, []);
  return (
    <Layout headerVariant={"secondary"} isHeader={true}>
      <div className={Styles.container}>
        {/* how we recruit page start */}
        <div
          className={`${"mlAuto alignBetween"} ${Styles.howWeRecruitSection}`}
        >
          <div className={Styles.dnaHeading}>
            <div className={Styles.pageHeading}>
              <Text variant={"big02Text"} color="primary">
                How We Recruit
              </Text>
              <div className="dFlex">
                <Text
                  className={Styles.saasSalesText}
                  strong={"strong7"}
                  variant={"big03Text"}
                  color="primary"
                >
                  SaaS Sales
                </Text>
                <Text className={"ml20"} variant={"big02Text"} color="primary">
                  Talent.
                </Text>
              </div>
            </div>
            <div className={`${"mt30"} ${Styles.dnaParaContent}`}>
              <Text variant={"mlgText"} color="black">
                Recruiting today requires a holistic approach – defining the
                role in detail, proactively cultivating and sourcing candidates,
                conducting data - driven screening, and assessing mutual fit.
                Making the right hiring decision is the difference between
                success and failure for every sales leader... don’t leave it to
                chance.
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
            <Image src="assets/images/recruiterProfile.png" />
          </div>
        </div>
        {/* how we recruit page end */}
        {/* recruiting Process page start */}
        <div className={Styles.recruitingProcessSection}>
          <div className={`${"mlAuto"} ${Styles.recruitingProcessMain}`}>
            <div className={"dGrid mb60"}>
              <div
                className={`${"centerAlign"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  We manage the
                </Text>
                <Text
                  strong={"strong6"}
                  className={"ml10 mr10"}
                  variant={"big01Text"}
                  color="primary"
                >
                  entire recruiting process
                </Text>
                <Text variant={"bigText"} color="primary">
                  so
                </Text>
              </div>
              <div
                className={`${"centerAlign mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  you can focus on
                </Text>
                <Text
                  strong={"strong6"}
                  className={"ml10"}
                  variant={"big01Text"}
                  color="primary"
                >
                  hiring great talent
                </Text>
              </div>
              <div
                className={`${
                  Styles.textBelowHeadingMain
                } ${"dGrid justifyContentCenter"}`}
              >
                <Text variant={"mlgText"} color="black">
                  We provide talent teams and hiring managers with a structured,
                  streamlined, data - driven process
                </Text>
                <Text
                  className={"centerAlign"}
                  variant={"mlgText"}
                  color="black"
                >
                  designed for speed and quality, saving you time and money.
                </Text>
              </div>
            </div>
            <div className={`${"mlAuto dFlex"} ${Styles.tailorCandidateMain}`}>
              <div className={`${""} ${Styles.talentDiscoveryMain}`}>
                <div
                  className={`${"flexCenter mb50"} ${
                    Styles.talentDiscoveryContent
                  }`}
                >
                  <Image
                    className={"mr15"}
                    src="assets/images/talentDiscovery.png"
                  />
                  <Text
                    className={"mr5"}
                    color="secondary"
                    variant={"xxlText"}
                    strong={"strong6"}
                  >
                    Step 1 :
                  </Text>
                  <Text variant={"xxlText"} strong={"strong6"} color="black">
                    Talent Discovery
                  </Text>
                </div>
                {TalentStepsData.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className={`${"flexCenter mb70"} ${
                        Styles.stepsContentMain
                      }`}
                    >
                      <Image className={"mr15"} src={data.stepsImage} />
                      <Text className={"mr5"} color="black" variant={"xxlText"}>
                        {data.stepsText}
                      </Text>
                      <Text variant={"xxlText"} color="black">
                        {data.stepsContent}
                      </Text>
                    </div>
                  );
                })}
              </div>
              <div className={Styles.tailorProfileMain}>
                <Text
                  className={`${Styles.tailorProfileHeading} &{"mb20"}`}
                  variant={"bigText"}
                  color="primary"
                >
                  Tailor candidate profile{" "}
                </Text>
                <Text
                  className={`${Styles.tailorProfileBelowText} ${"mb70"}`}
                  variant={"mlgText"}
                  color="black"
                >
                  We start with an in - depth analysis of your hiring needs and
                  requirements to define your hiring goals, selling environment,
                  culture, role, experience, and skill requirements. We then
                  build a digital profile of your ideal candidate that goes well
                  beyond a basic job description.
                </Text>
                <div className={Styles.candidateProfileImage}>
                  <Image src="assets/images/talentProfileThird.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* recruiting Process page end */}
        {/* hiredna works section start */}
        <div className={Styles.hireDnaSection}>
          <div className={Styles.hireDnaSectionBackground}>
            <div
              className={`${
                Styles.hireDnaHeading
              } ${"dGrid justifyContentCenter"}`}
            >
              <Text strong={"strong6"} variant={"big01Text"} color="white">
                Interested in learning more about{" "}
              </Text>
              <Text
                className={"centerAlign"}
                strong={"strong6"}
                variant={"big01Text"}
                color="white"
              >
                how HireDNA works?
              </Text>
            </div>
            <div className="mt50 centerAlign">
              <Button
                className={`${Styles.requestBtn} ${"centerAlign"}`}
                variant={"xmd"}
                color="redPrimary"
              >
                Request a Demo <Icon className={"ml10"} type="rightArrow" />
              </Button>
            </div>
          </div>
        </div>
        {/* hiredna works section end */}
        {/* unique story section start */}
        <div className={Styles.uniqueStorySection}>
          <div className={`${"mlAuto"} ${Styles.uniqueStoryMain}`}>
            <div className={"dGrid mb60"}>
              <div
                className={`${"centerAlign"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"bigText"} color="primary">
                  We tell your unique story ands
                </Text>
              </div>
              <div
                className={`${"centerAlign mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text strong={"strong6"} variant={"big01Text"} color="primary">
                  boost
                </Text>
                <Text
                  className={"ml10 mr10"}
                  variant={"bigText"}
                  color="primary"
                >
                  your
                </Text>
                <Text strong={"strong6"} variant={"big01Text"} color="primary">
                  brand
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
                  color="black"
                >
                  We understand how important your brand image is to attracting
                  top - tier talent. We offer
                </Text>
                <Text variant={"mlgText"} color="black">
                  candidates unparalleled insights into your company, culture,
                  products, and leadership teams
                </Text>
                <Text
                  className={"centerAlign"}
                  variant={"mlgText"}
                  color="black"
                >
                  while staying on brand and telling your unique story.
                </Text>
              </div>
            </div>
            <div
              className={`${"alignBetween"} ${Styles.employerProfileSection}`}
            >
              <div className={Styles.employerProfileMain}>
                <div className="mb50">
                  <Text
                    className={`${Styles.employerProfileHeading} ${"mb20"}`}
                    variant={"bigText"}
                    color="primary"
                  >
                    Employer Profile
                  </Text>
                  <Text
                    className={Styles.employerProfileContent}
                    variant={"mlgText"}
                    color="black01"
                  >
                    We attract more candidates with employer profiles that
                    provide transparency into the role, culture and company. Top
                    performers can get a better feel for your brand and what
                    makes it unique.
                  </Text>
                </div>

                {employerProfileData.map((data, i) => {
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
                <Image src="assets/images/leaseAccelator.png" />
              </div>
            </div>
          </div>
        </div>
        {/* unique story section end */}
        {/* insight and collaboration section start */}
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
                  Gain
                </Text>
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  insight
                </Text>
                <Text variant={"bigText"} color="primary">
                  and improve
                </Text>
                <Text
                  className={"ml10 mr10"}
                  strong={"strong6"}
                  variant={"big01Text"}
                  color="primary"
                >
                  collaboration
                </Text>
                <Text variant={"bigText"} color="primary">
                  with
                </Text>
              </div>
              <div
                className={`${"centerAlign mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text className={"mr10"} variant={"bigText"} color="primary">
                  recruiting
                </Text>
                <Text strong={"strong6"} variant={"big01Text"} color="primary">
                  analytics
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
                  color="black"
                >
                  We believe communication and transparency are key to a
                  successful partnership, which is why we
                </Text>
                <Text variant={"mlgText"} color="black">
                  provide detailed insights and analytics to keep you up to date
                  at every step in the process.
                </Text>
              </div>
            </div>
            <div
              className={`${"alignBetween"} ${Styles.employerProfileSection}`}
            >
              <div className={Styles.employerProfileMain}>
                <div className="mb50">
                  <Text
                    className={`${Styles.employerProfileHeading} ${"mb20"}`}
                    variant={"bigText"}
                    color="primary"
                  >
                    Employer Dashboard
                  </Text>
                  <Text
                    className={Styles.employerProfileContent}
                    variant={"mlgText"}
                    color="black01"
                  >
                    The dashboard provides key insights on your candidate
                    pipeline, active roles, upcoming interviews, and candidate
                    in - process to provide full transparency and to keep you
                    updated on the search.
                  </Text>
                </div>

                {insightAndCollaborationData.map((data, i) => {
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
        {/* insight and collaboration section end */}
        {/* talent teams and hiring section start */}
        <div className={Styles.howitWorksPageContainer}>
          <div className={`${"mlAuto"} ${Styles.howitWorksPageMain}`}>
            <div className={"dGrid mb60"}>
              <div
                className={`${"centerAlign"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text variant={"big01Text"} color="primary" strong="strong6">
                  Benefits
                </Text>
                <Text
                  className={"ml10 mr10"}
                  variant={"bigText"}
                  color="primary"
                >
                  for
                </Text>
                <Text variant={"big01Text"} color="primary" strong="strong6">
                  talent teams
                </Text>
                <Text
                  className={"ml10 mr10"}
                  variant={"bigText"}
                  color="primary"
                >
                  and
                </Text>
                <Text variant={"big01Text"} color="primary" strong="strong6">
                  hiring
                </Text>
              </div>
              <div
                className={`${"centerAlign mt10 mb30"} ${
                  Styles.recruitingProcessHeading
                }`}
              >
                <Text strong={"strong6"} variant={"big01Text"} color="primary">
                  managers
                </Text>
              </div>
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
                Sales Leaders
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
                Talent Teams
              </Text>
            </div>

            <div
              className={`${Styles.howitWorksContentMain} ${"alignBetween"}`}
            >
              {showactiveWork === 1 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/candidateProfileSecond.png" />
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

              <div className={Styles.idealCandidateMain}>
                <Image src="assets/images/dnaLogo.png" />
                <Text
                  className={`${"mt10 mb20"} ${Styles.idealCandidateHeading}`}
                  variant={"xxlText"}
                  color="primary"
                  strong={"strong6"}
                >
                  Build a stronger sales team
                </Text>

                <div className={`${"mb30"} ${Styles.idealCandidateContent}`}>
                  <Text variant={"mlgText"} color="black01">
                    We only recruit SaaS sales talent and have it down to a
                    science. Our powerful matching technology helps sales
                    leaders make more accurate, data - driven hiring decisions
                    which means better performance and improved retention.
                  </Text>
                </div>
                <div className="dGrid">
                  {talentTeamAndHiringData.map((data, i) => {
                    return (
                      <div key={i} className="flexCenter mb10">
                        <Icon
                          type={data.type}
                          variant={"xxxlIcon"}
                          color={"greenPrimary"}
                        />

                        <Text
                          className={`${
                            Styles.buildteamPropertyText
                          } ${"ml20"}`}
                          variant={"mlgText"}
                          color="black01"
                        >
                          {data.content}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* talent teams and hiring section end */}
      </div>
    </Layout>
  );
};

export default HowWeRecruit;
