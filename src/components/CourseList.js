import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const CourseList = () => {
  const courses = [
    'Business 101',
    'Marketing 102',
    'Management 103',
    'Finance 200'
  ];

  return (
    <Container>
      <h2>Course List</h2>
      <ListGroup>
        {courses.map((course, index) => (
          <ListGroup.Item key={index}>{course}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CourseList;
