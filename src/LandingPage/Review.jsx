import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import './All.css';
import Avatar from './Avatar'; // Assuming Avatar component is in the same directory as Review

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(4); // Number of reviews initially visible
  const [sortOrder, setSortOrder] = useState(null);
  const [expanded, setExpanded] = useState(false); // State to track whether reviews are expanded or collapsed

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Reviews'));
        const reviewsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setReviews(reviewsArray);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const sortReviews = (order) => {
    if (order === 'asc') {
      return [...reviews].sort((a, b) => a.rating - b.rating);
    } else if (order === 'desc') {
      return [...reviews].sort((a, b) => b.rating - a.rating);
    }
    // If sortOrder is null or invalid, return original order
    return reviews;
  };

  const handleSort = (order) => {
    const sortedReviews = sortReviews(order);
    setReviews(sortedReviews);
    setSortOrder(order);
  };

  const handleViewAll = () => {
    if (expanded) {
      setVisibleReviews(4); // Show only 5 reviews when collapsing
    } else {
      setVisibleReviews(10); // Show all reviews when expanding
    }
    // Toggle the expanded state
    setExpanded(!expanded);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSort('asc')}>Sort by Lowest Rating</button>
        <button onClick={() => handleSort('desc')}>Sort by Highest Rating</button>
      </div>
      {reviews.slice(0, visibleReviews).map((review) => (
        <div key={review.id} className='userReview'>
          <Avatar />
          <div className="review-content">
            <div className="rating-bar">{ "⭐".repeat(review.rating) }</div>
            <p className="text-with-padding">{review.comment}</p>
          </div>
        </div>
      ))}
      {visibleReviews < reviews.length && (
        <div className="view-all-reviews" onClick={handleViewAll}>
          {expanded ? "Collapse Reviews" : "Show More Reviews"}
        </div>
      )}
      {expanded && visibleReviews === reviews.length && (
        <div className="collapse-reviews" onClick={handleViewAll}>
          Collapse Reviews
        </div>
      )}
    </div>
  );
};

export default Review;
