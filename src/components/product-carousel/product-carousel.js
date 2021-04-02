import React from 'react';
import ParfumList from '../parfum-list';
import './product-carousel.css';

const ProductCarousel = () => {
    return (
        <div className="product-carousel">
            <div className="carousel-arrow__left">
                <span>&#60;</span>
            </div>
            <div className="carousel-arrow__right">
                <span>&#62;</span>
            </div>
            <ParfumList />
            <div className="product-carousel__dots">
                <div className="product-carousel__dot product-carousel__dot-active"></div>
                <div className="product-carousel__dot"></div>
                <div className="product-carousel__dot"></div>
            </div>
        </div>
    )
}

export default ProductCarousel;