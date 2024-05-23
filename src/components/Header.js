import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Container className="p-5 bg-light rounded-3">
        <Row>
          <Col>
            <h1>Business Professor Site</h1>
            <p>Welcome to the Business 101 course site!</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
