import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'; // Consolidated import for useNavigate
import './ReviewForm.css';
import Header from '../HeaderComponents/Header';
import { db } from "../Firebase/Firebase";

function ReviewForm() 
{
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    const [error, setError] = useState(''); // Error state
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Success message state
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Reviews"), {
                comment: review,
                rating: parseInt(rating, 10), // Convert rating to an integer
                timestamp: new Date()
            });
            console.log("Review submitted successfully");
            setShowSuccessMessage(true); // Show success message
        
            // Hide the message and redirect after 5 seconds
            setTimeout(() => {
                setShowSuccessMessage(false); // Hide the success message
                navigate('/'); // Navigate to the homepage
            }, 5000);
        } catch (err) {
            console.error("Error submitting review: ", err);
            setError("Failed to submit review. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <form onSubmit={handleSubmit} className="review-form">
                    <h2>Leave a Review</h2>
                    <textarea
                        placeholder="Share your thoughts..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                    <button type="submit">Submit Review</button>
                </form>
                {showSuccessMessage && <div className="success-message">Review submitted successfully!</div>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    );
}

export default ReviewForm;
