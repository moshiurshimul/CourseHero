import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import courseData from '../../courseData/courseData';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';

const Courses = () => {
    const courseList = courseData;
    console.log(courseList);
    return (<div className="course-body">
                <div className="courses-container">
                    {courseData.map(courses =><SingleCourse courselist={courses}></SingleCourse>)}
                </div>
                <div className="cart-container">
                    <h3>Your Summery</h3>
                    <hr/>
                    <p>Your Added Course: {}</p>
                    <p>Price Total: {}</p>
                    
                </div>
            </div>
    );
};

export default Courses;