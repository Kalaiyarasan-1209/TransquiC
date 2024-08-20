import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <div className="review-container">
            <h1 className="review-title">REVIEW</h1>
            <div className="review-content">
                <div className="rating">
                    <div className="rating-text">
                        <span className="rating-label">EXCELLENT</span>
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="rating-info">
                        <span className="rating-number">4.8</span>
                        <span className="rating-max">/ 5</span>
                        <span className="review-count">Based on 134,000 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;