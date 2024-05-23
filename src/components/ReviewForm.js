import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !review) {
      setError('Name and review cannot be empty.');
      return;
    }

    try {
      await axios.post('https://6645732cb8925626f891e78f.mockapi.io/PC/business101', {
        name,
        review,
        createdAt: new Date().toISOString(),
      });
      setSuccess('Review submitted successfully!');
      setName('');
      setReview('');
    } catch (error) {
      setError('Failed to submit review. Please try again.');
    }
  };

  return (
    <Container>
      <h2>Submit a Review</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formReview">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewForm;

