import React from 'react';
import courseData from '../../courseData/courseData';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';
import { useState } from 'react';
import CourseCart from '../CourseCart/CourseCart';

const Courses = () => {
    const [courseCart, setCourseCart] = useState([])

    const enrollHandler = (course) => {
        const courseNewCart = [...courseCart, course]
        setCourseCart(courseNewCart);

    };

    const courseList = courseData;
    // console.log(courseList);
    return (<div className="course-body">
                <div className="courses-container">
                    {courseList.map(courses => <SingleCourse enrollClick={enrollHandler} key= {courses.key} courselist={courses}></SingleCourse>)}
                </div>
                <div className="cart-container">
                    <CourseCart cart={courseCart}></CourseCart>
                </div> 
            </div>
    );
};

export default Courses;