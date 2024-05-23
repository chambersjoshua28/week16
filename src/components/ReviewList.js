import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://6645732cb8925626f891e78f.mockapi.io/PC/business101');
        setReviews(response.data);
      } catch (error) {
        setError('Failed to fetch reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container>
      <h2>Reviews</h2>
      {loading && <Spinner animation="border" />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && (
        <ListGroup>
          {reviews.map((review) => (
            <ListGroupItem key={review.id}>
              <h5>{review.name}</h5>
              <p>{review.review}</p>
              <small>{new Date(review.createdAt).toLocaleString()}</small>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default ReviewList;
