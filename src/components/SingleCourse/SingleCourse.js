import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleCourse.css'

const SingleCourse = (props) => {
    // console.log(props)
    const {img, name, price, Instructor} = props.courselist;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Instructor: {Instructor}</p>
                <p>Course Price: ${price}</p>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={() => props.enrollClick(props.courselist)}>Enroll Now</Button>
            </Card.Footer>
        </Card>
    );
};

export default SingleCourse;