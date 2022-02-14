import React, { Fragment } from "react";
import CourseSlider from "../components/courseSlider/courseSlider";
import CtaTop from "../components/CtaTop"

const Landing = () => {
    return(
    <Fragment>
        <CtaTop/>
        <CourseSlider/>
    </Fragment>
    );
}

export default Landing;