import React, { Fragment } from "react";
import CourseSlider from "../components/courseSlider/courseSlider";
import CtaTop from "../components/CtaTop"
import Header from "../components/header/header";
const Landing = () => {
    return(
    <Fragment>
        <Header/>
        <CtaTop/>
        <CourseSlider/>
    </Fragment>
    );
}

export default Landing;