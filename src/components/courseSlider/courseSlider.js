import React from "react";
import { courses } from "../../dummyData/courses";

const courseSlider = () => {

    let courseCopy = [...courses];nm  

    return (
        <div className="course-slider">
            <div className="course-slider__title">Top Courses</div>
            <div className="course-slider__underline"/>
            <div className="course-slider__container">
                <div className="course-slider___course--backward">
                    backward
                </div>
                <div className="course-slider___courses">
                    Courses
                </div>
                <div className="course-slider___course--forward">
                    forward
                </div>
            </div>
        </div>
    );
}

export default courseSlider;