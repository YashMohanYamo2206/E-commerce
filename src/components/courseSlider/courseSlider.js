import React, { useState } from "react";
import { courses } from "../../dummyData/courses";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useWindowDimensions from './windowResizeListener';
// import Variables from '../../scss/_variables.scss';

let courseCopy = [...courses];
let courseList = courseCopy.map((course) => {
    return (
        <div key={course.position} className="course-slider__course">
            <img
                className="course-slider__course--img"
                src={course.img}
                alt={course.name} />
            <div className="course-slider__course--bottom">
                <div className="course-slider__course--bottom--title">{course.title}</div>
                <div className="course-slider__course--bottom--author">by: {course.author}</div>
                <div className="course-slider__course--bottom--price">{course.price}</div>
                <input className="course-slider__course--bottom--button"
                    type="submit"
                    value="Add to Cart" />
            </div>
        </div>
    )
})


const CourseSlider = () => {
    const {  width } = useWindowDimensions();
    const [courseCount, setCourseCount] = useState(0);
    const [courseSliderAnimate, setCourseSliderAnimate] = useState('course-slider__courses');



    let showCourses = 3;
    let activeList = [];
    console.log(width)
    if (width <= 596) {
        showCourses = 1;
    } else if (width <= 768) {
        showCourses = 2;
    } else {
        showCourses = 3;
    }

    for (let i = 0; i < showCourses; ++i) {
        activeList.push(courseList[courseCount + i]);
    }

    const changeCourseCountBackward = (e) => {
        e.stopPropagation();
        setCourseSliderAnimate(
          "course-slider__courses course-slider__slideout-right"
        );
        setTimeout(() => {
          setCourseCount(courseCount - showCourses);
          setCourseSliderAnimate(
            "course-slider__courses course-slider__slidein-right"
          );
        }, 150);
      };
    
      const changeCourseCountForward = (e) => {
        e.stopPropagation();
        setCourseSliderAnimate("course-slider__courses course-slider__slideout");
        setTimeout(() => {
          setCourseCount(courseCount + showCourses);
          setCourseSliderAnimate("course-slider__courses course-slider__slidein");
        }, 150);
      };

    console.log(activeList)


    return (
        <div className="course-slider">
            <div className="course-slider__title">Top Courses</div>
            <div className="course-slider__underline" />
            <div className="course-slider__container">
                {courseCount === 0 ? <div /> :
                    <div className="course-slider__course--backward" onClick={(e) => changeCourseCountBackward(e, false)} >
                        <FaArrowLeft />
                    </div>
                }
                <div className={courseSliderAnimate}>
                    {activeList}
                </div>
                {courseCount + showCourses >= courseCopy.length ?<div/>:
                <div className="course-slider__course--forward" onClick={(e) => changeCourseCountForward(e, true)}>
                    <FaArrowRight />
                </div>
                }
            </div>
        </div>
    );
}

export default CourseSlider;