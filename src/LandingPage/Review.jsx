import React from 'react';
import './All.css';

const Review = () => {
    const generateRandomReview = () => {
        const reviews = [
            "Great product, highly recommended!",
            "Excellent service, will definitely come back!",
            "Amazing experience, exceeded my expectations!",
            "Top-notch quality, worth every penny!",
            "Outstanding customer support, very satisfied!",
            "Impressive delivery time, very happy with my purchase!",
            "Fantastic product, couldn't be happier!"
        ];
        return reviews[Math.floor(Math.random() * reviews.length)];
    };

    return (
        <div>
            <div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>
                <div className='userReview'>
                    <div className="rating-bar">⭐⭐⭐⭐⭐</div>
                    <p className="text-with-padding">{generateRandomReview()}</p>
                </div>

            </div>
        </div>
    );
}

export default Review;
