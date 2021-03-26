import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../rating-stars';
import './parfum-list-item.css';

const ParfumListItem = ({ parfum, onAddedToCart }) => {
    const { title, brand, img, price, numReview } = parfum;

    return (
        <>
        <Link to="/parfum-page/">
            <div className="item-img">
                <img src={img} alt={`${brand} ${title} - фото`}/>
            </div>
            <div className="item-title">{brand} {title}</div>
        </Link>
            <RatingStars numReview={numReview}/>
            <div className="item-price">{price} грн</div>
            <button className="btn-add-to-cart"
                onClick={onAddedToCart}>В корзину</button>
        </>
    )
}

export default ParfumListItem;