import React, { useEffect, useState } from "react";
import { Layout } from "../../components/common";
import { Button, DetailCard, Icon, Image, Text } from "../../components/shared";
import Styles from "./homepage.module.scss";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import Images from "../../images.json";
// import Data from "./data.json"
function Homepage() {
  const [showactiveWork, setShowactiveWork] = useState(1);
  const [data, setData] = useState([]);
  const [salesData, setsalesData] = useState([]);
  const [saveTimeMoneydata, setSaveTimeMoneyData] = useState([]);
  const [delieverResultData, setDelieverResultData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setData(json["testimonialData"]))
      .catch((error) => console.log(error));
    console.table(data);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setsalesData(json["salesTimeData"]))
      .catch((error) => console.log(error));
    console.table(salesData);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setSaveTimeMoneyData(json["saveTimeMoneyData"]))
      .catch((error) => console.log(error));
    console.table(saveTimeMoneydata);
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setDelieverResultData(json["delieverResultData"]))
      .catch((error) => console.log(error));
    console.table(delieverResultData);
  }, []);

  return (
    <Layout>
      <div className={`${Styles.scrollBar} ${Styles.container}`}>
        {/* dna page start */}
        <div className={Styles.dnaMain}>
          <div className={Styles.dnaHeading}>
            <div className={Styles.pageHeading}>
              <Text variant={"big02Text"} color="white">
                Recruiting the Best
              </Text>
              <div className="dFlex">
                <Text
                  className={Styles.saasSalesText}
                  strong={"strong7"}
                  variant={"big03Text"}
                  color="white"
                >
                  SaaS Sales
                </Text>
                <Text className={"ml20"} variant={"big02Text"} color="white">
                  Talent.
                </Text>
              </div>
              <Text variant={"big02Text"} color="white">
                It’s in Our DNA.
              </Text>
            </div>
            <div className={`${"mt30"} ${Styles.dnaParaContent}`}>
              <Text variant={"mlgText"} color="white">
                HireDNA helps talent teams hire faster and make more
              </Text>
              <Text
                className={`${"dFlex"} ${Styles.accurateText}`}
                strong={"strong6"}
                variant={"mlgText"}
                color="white"
              >
                accurate, data-driven hiring decisions
                <Text
                  className={"ml10 mr10"}
                  strong={"strong4"}
                  variant={"mlgText"}
                  color="white"
                >
                  with
                </Text>
                <Text strong={"strong6"} variant={"mlgText"} color="white">
                  powerful
                </Text>
              </Text>
              <div className={"dFlex"}>
                <Text strong={"strong6"} variant={"mlgText"} color="white">
                  matching
                </Text>
                <Text
                  className={"ml10"}
                  strong={"strong4"}
                  variant={"mlgText"}
                  color="white"
                >
                  technology that delivers the perfect fit
                </Text>
              </div>
              <Text strong={"strong4"} variant={"mlgText"} color="white">
                candidates.
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
              src="assets/images/groupCircle.png"
            />
            <Image
              className={Styles.candidateImage}
              src="assets/images/candidateProfile.png"
            />
            <Image
              className={Styles.roleExperienceImage}
              src="assets/images/roleExperience.png"
            />
            <Image
              className={Styles.semiCircleUpwardImage}
              src="assets/images/semiCircleUpward.png"
            />
            <Image
              className={Styles.yellowHalfPillImage}
              src="assets/images/yellowHalfPill.png"
            />
          </div>
        </div>
        {/* dna page end */}
        {/* saas Company page start */}
        <div className={`${Styles.saasCompanyContainer} ${"container"}`}>
          <div className={`${"flexCenter mlAuto"} ${Styles.sassHeading}`}>
            <Text className={"mr10"} variant={"bigText"} color="primary">
              Trusted by top
            </Text>
            <Text strong={"strong6"} variant={"big01Text"} color="primary">
              SaaS companies
            </Text>
          </div>
          <div className="mt50">
            <Swiper
              className={Styles.logoSliderMain}
              modules={[Autoplay]}
              centeredSlides={true}
              spaceBetween={40}
              slidesPerView={6}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1440: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                425: {
                  slidesPerView: 2,
                },
              }}
            >
              {Images.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={Styles.slideMain}>
                      <Image src={data.path} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div
            className={` ${"textRight mt50 cursor"} ${
              Styles.viewCaseStudiesText
            }`}
          >
            <Text variant={"lgText"} color="secondary">
              View Case Studies
              <Icon variant={"xxsIcon"} className="ml5" type="rightArrow" />
            </Text>
          </div>
          {/* right sales page  end */}
          <div className={Styles.rightSalesContainer}>
            <div className={`${"flexCenter mlAuto"} ${Styles.sassHeading}`}>
              <Text variant={"bigText"} color="primary">
                You get the
              </Text>
              <Text
                className={"ml10 mr10"}
                strong={"strong6"}
                variant={"big01Text"}
                color="primary"
              >
                right
              </Text>
              <Text className={"mr10"} variant={"bigText"} color="primary">
                sales talent
              </Text>
              <Text strong={"strong6"} variant={"big01Text"} color="primary">
                every time.
              </Text>
            </div>
            <Grid
              container
              spacing={3}
              className={`${"mt50"} ${Styles.cardDetailMain}`}
            >
              {salesData.length > 0 &&
                salesData.map((data, i) => {
                  return (
                    <Grid key={i} item lg={6} sm={12} md={6} xs={12}>
                      <DetailCard
                        salesHeading={data.salesHeading}
                        salesMoreDetailText={data.salesMoreDetailText}
                      >
                        <Text
                          className={"ml5"}
                          variant={"mlgText"}
                          color="black"
                        >
                          {data.salesContent}
                        </Text>
                      </DetailCard>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
          {/* right sales page  end */}
        </div>
        {/* saas Company page end */}

        {/* result deliever part start */}

        <div className={Styles.resultDelieverPageMain}>
          <div className={Styles.resultDelieverBackgroundimage}>
            <div className={`${"centerAlign mb60"} ${Styles.resultHeading}`}>
              <Text
                className={"mr10"}
                color="white"
                variant={"bigText"}
                strong="strong4"
              >
                We deliever
              </Text>
              <Text variant={"big01Text"} color="white" strong="strong6">
                results
              </Text>
            </div>
            <div
              className={`${"mlAuto alignBetween alignItemsCenter"} ${
                Styles.resultDelieverContentMain
              }`}
            >
              {delieverResultData.length > 0 &&
                delieverResultData.map((data, i) => {
                  return (
                    <div
                      className={`${"textCenter"} ${
                        Styles.resultDelieverContent
                      }`}
                      key={i}
                    >
                      <div
                        key={i}
                        className={`${"textCenter"} ${
                          Styles.resultDelieverContent
                        }`}
                      >
                        <Image
                          width={"50"}
                          height={"50"}
                          className={"mb10"}
                          src={data.logo}
                        />
                        <Text
                          className={Styles.resultPercentStrongText}
                          color="white"
                          variant={"big02Text"}
                          strong="strong7"
                        >
                          {data.delieverResultPercentText}
                        </Text>
                        <Text
                          className={Styles.resultContentText}
                          variant={"xxlText"}
                          color="white"
                        >
                          {data.delieverResultTextLineFirst}
                          <Text
                            className={Styles.resultContentText}
                            variant={"xxlText"}
                            color="white"
                          >
                            {data.delieverResultTextLineSecond}
                          </Text>
                        </Text>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* result deliever part end */}
        {/* save timea and money page part start */}
        <div className={Styles.saveTimeAndMoneyPageMain}>
          <div className={`${"mlAuto"} ${Styles.saveTimeAndMoneyPageContent}`}>
            <div
              className={`${"dGrid mlAuto justifyContentCenter"} ${
                Styles.saveTimeAndMoneyPageHeading
              }`}
            >
              <Text color="primary" variant={"bigText"}>
                The better way to recruit SaaS sales talent.
              </Text>
              <div className="centerAlign mt20 mb60">
                <Text color="primary" variant={"bigText"}>
                  Save
                </Text>
                <Text
                  className={"ml10 mr10"}
                  variant={"big01Text"}
                  color="primary"
                  strong="strong7"
                >
                  time
                </Text>
                <Text className={"mr10"} color="primary" variant={"bigText"}>
                  and
                </Text>
                <Text variant={"big01Text"} color="primary" strong="strong7">
                  money
                </Text>
              </div>
            </div>
            <Grid
              container
              spacing={3}
              className={`${""} ${Styles.salesDetailMain}`}
            >
              {saveTimeMoneydata.length > 0 &&
                saveTimeMoneydata.map((data, i) => {
                  return (
                    <Grid key={i} item lg={6} sm={12} md={6} xs={12}>
                      <div className="dFlex alignItemsStart">
                        <Image className={"mr30"} src={data.logo} />
                        <div>
                          <Text
                            className={`${Styles.saveTimeHeading} ${"mb20"}`}
                            variant={"xxlText"}
                            color="primary"
                            strong={"strong6"}
                          >
                            {data.saveTimeMoneyHeading}
                          </Text>
                          <div className={Styles.saveTimeDetailsTextMain}>
                            <Text
                              className={`${
                                Styles.saveTimeDetailsContent
                              } ${"dFlex"}`}
                              variant={"mlgText"}
                              color="black01"
                            >
                              {data.saveTimeMoneyContent}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
            <div className={` ${"textRight mt50 cursor"}`}>
              <Text variant={"lgText"} color="secondary">
                See Our Results
                <Icon variant={"xxsIcon"} className="ml5" type="rightArrow" />
              </Text>
            </div>
          </div>
        </div>
        {/* save timea and money page part end */}
        {/* how it works page part start */}
        <div className={Styles.howitWorksPageContainer}>
          <div className={`${"mlAuto"} ${Styles.howitWorksPageMain}`}>
            <div
              className={`${"centerAlign mb60"} ${Styles.howitWorksHeading}`}
            >
              <Text className={"mr10"} variant={"bigText"} color="primary">
                Here’s
              </Text>
              <Text variant={"big01Text"} color="primary" strong="strong6">
                Here’s how it works
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
                Profile
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
                Source
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
                Screen
              </Text>
              <Text
                onClick={() => setShowactiveWork(4)}
                className={`${
                  showactiveWork === 4
                    ? Styles.selectProfileText
                    : Styles.profileText
                } ${"cursor textCenter"}`}
                variant={"xxlText"}
              >
                Interview
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
              {showactiveWork === 3 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/screen.png" />
                </div>
              ) : (
                ""
              )}
              {showactiveWork === 4 ? (
                <div className={Styles.promileImage}>
                  <Image src="assets/images/interview.png" />
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
                  Define the ideal candidate
                </Text>

                <div className={`${"mb50"} ${Styles.idealCandidateContent}`}>
                  <Text className={"dFlex"} variant={"mlgText"} color="black">
                    A
                    <Text
                      variant={"mlgText"}
                      color="black"
                      strong={"strong6"}
                      className={"ml5 mr5"}
                    >
                      “one size fits all”
                    </Text>
                    approach won’t
                  </Text>
                  <Text className={"dFlex"} variant={"mlgText"} color="black">
                    deliver the results you need. Tell us about your hiring
                    goals, sales culture, desired skills, and talent needs, and
                    we’ll build your ideal candidate profile in HireDNA.
                  </Text>
                </div>
                <div className={`${Styles.recruitButton} ${"mt25"}`}>
                  <Button
                    className={`${Styles.recruitButton} ${"centerAlign"}`}
                    variant={"xmd"}
                    color="redPrimary"
                  >
                    How We Recruit <Icon className={"ml10"} type="rightArrow" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* how it works page part end */}
        {/* employee says page part start */}
        <div className={Styles.employeeSaysContainer}>
          <div className={Styles.employeeSaysMain}>
            <div className={`${"mlAuto"} ${Styles.employeeSaysContent}`}>
              <Text
                className={`${
                  Styles.employeeSaysHeading
                } ${"centerAlign mb60"}`}
                variant={"bigText"}
                color="primary"
                strong={"strong6"}
              >
                {" "}
                What
                <Text
                  variant={"big01Text"}
                  color="primary"
                  strong={"strong6"}
                  className={"ml10 mr10"}
                >
                  employers
                </Text>{" "}
                Say
              </Text>
              <div className="mt30">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  centeredSlides={true}
                  spaceBetween={40}
                  slidesPerView={1}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                >
                  {data.length &&
                    data.map((data, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className={"dFlex justifyContentCenter"}>
                            <div className={Styles.testimonialImage}>
                              <Image src={data.profile} />
                            </div>

                            <div
                              className={`${"ml50"} ${
                                Styles.testimonialContent
                              }`}
                            >
                              <Text
                                variant={"xxlText"}
                                color="secondary"
                                strong={"strong6"}
                                className={"mb20"}
                              >
                                {data.heading}
                              </Text>
                              <Text
                                variant={"mlgText"}
                                color="black"
                                className={`${
                                  Styles.sliderContent
                                } ${"dFlex mb30"}`}
                              >
                                {data.content}
                              </Text>
                              <Text
                                variant={"mlgText"}
                                color="primary"
                                strong={"strong6"}
                                className={"dFlex"}
                              >
                                {data.name}
                                <Text
                                  variant={"mlgText"}
                                  color="primary"
                                  className={"ml5"}
                                >
                                  {data.details}
                                </Text>
                              </Text>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
            <div
              className={` ${"textRight mt50 cursor"} ${
                Styles.viewTestimonials
              }`}
            >
              <Text variant={"lgText"} color="secondary">
                View Testimonials
                <Icon variant={"xxsIcon"} className="ml5" type="rightArrow" />
              </Text>
            </div>
          </div>
        </div>
        {/* employee says page part end */}
      </div>
    </Layout>
  );
}

export default Homepage;
