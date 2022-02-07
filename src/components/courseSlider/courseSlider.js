import React, { useState } from "react";
import { courses } from "../../dummyData/courses";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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
    const [courseCount, setCourseCount] = useState(0);
    const [courseSliderAnimate, setcourseSliderAnimate] = useState('course-slider__courses');
    const changeCourseCount = (e, forward) => {
        e.stopPropagation();
        forward ?
            setcourseSliderAnimate('course-slider__courses course-slider__slideout') :
            setcourseSliderAnimate('course-slider__courses course-slider__slideout-right');
        setTimeout(() => {
            if (forward) {
                setCourseCount(Math.min(courseCount + showCourses, courses.length-1))
                setcourseSliderAnimate('course-slider__courses course-slider__slidein')
            }
            else{
                setCourseCount(Math.max(courseCount - showCourses, 0))
                setcourseSliderAnimate('course-slider__courses course-slider__slidein-right')
            }
        }, 150)
    };
    let showCourses = 3;
    let activeList = [];
    showCourses === 3 ? activeList = [courseList[courseCount], courseList[courseCount + 1], courseList[courseCount + 2]] :
        activeList = [courseList[courseCount], courseList[courseCount + 1]];
    return (
        <div className="course-slider">
            <div className="course-slider__title">Top Courses</div>
            <div className="course-slider__underline" />
            <div className="course-slider__container">
                <div className="course-slider__course--backward" onClick={(e) => changeCourseCount(e, false) } >
                    <FaArrowLeft />
                </div>
                <div className={courseSliderAnimate}>
                    {activeList}
                </div>
                <div className="course-slider__course--forward" onClick={(e) => changeCourseCount(e, true)}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
}

export default CourseSlider;