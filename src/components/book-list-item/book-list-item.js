import React from 'react';
import './book-list-item.css';
import star from './star.svg';

const BookListItem = ({ book }) => {
    const { title, brand, img, price, numReview } = book;

    return (
        <>
            <div className="item-img">
                <img src={img} alt={`${brand} ${title} - фото`}/>
            </div>
            <div className="item-title">{brand} {title}</div>
            <div className="item-rating">
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <img src={star} alt="star-rating"/>
                <a href="/">{numReview}</a>
            </div>
            <div className="item-price">{price} грн</div>
            <button className="btn-add-to-cart">В корзину</button>
        </>
    )
}

export default BookListItem;