import React from 'react';
import './rating-stars.css';
import star from './star.svg';

const RatingStars = ({ numReview }) => {
    
    return (
        <div className="item-rating">
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <a href="/">{numReview}</a>
        </div>
    )
}

export default RatingStars;