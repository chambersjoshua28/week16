import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseItem from './CourseItem';

const CourseList = () => {
  return (
    <Container>
      <h2>Courses</h2>
      <Row>
        <CourseItem title="Business 101" description="Introduction to Business" />
        <CourseItem title="Marketing 101" description="Introduction to Marketing" />
        <CourseItem title="Finance 101" description="Introduction to Finance" />
      </Row>
    </Container>
  );
};

export default CourseList;
