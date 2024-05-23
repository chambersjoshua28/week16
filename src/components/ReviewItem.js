import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const ReviewItem = ({ review }) => {
  return (
    <ListGroupItem>
      <h5>{review.name}</h5>
      <p>{review.review}</p>
    </ListGroupItem>
  );
};

export default ReviewItem;
