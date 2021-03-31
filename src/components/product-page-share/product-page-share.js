import React from 'react';

import './product-page-share.css';

import heart from './heart.svg';
import star from './star.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import telegram from './telegram.svg';
import viber from './viber.svg';

const ProductPageShare = () => {
    return (
        <div className="product-page-share-block">
            <div className="product-page-share-add">
                <div className="add-to-wish-icon">
                    <img src={heart} alt="Heart icon - add to wishlist"/>
                </div>
                <span>Додати в список бажань</span>
            </div>
            <div className="product-page-share-add">
                <div className="add-to-wish-icon">
                    <img src={star} alt="Star icon - add to favorite"/>
                </div>
                <span>Додати до улюблених</span>
            </div>
            <div className="productpage-share-icons-block">
                <a href="/" className="productpage-share-icon">
                    <img src={instagram} alt="Instagram"/>
                </a>
                <a href="/" className="productpage-share-icon">
                    <img src={facebook} alt="Facebook"/>
                </a>
                <a href="/" className="productpage-share-icon">
                    <img src={viber} alt="Viber"/>
                </a>
                <a href="/" className="productpage-share-icon">
                    <img src={telegram} alt="Telegram"/>
                </a>
            </div>

        </div>
    )
}

export default ProductPageShare;