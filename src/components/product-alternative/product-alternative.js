import React from 'react';
import ProductCarousel from '../product-carousel';
import './product-alternative.css';

const ProductAlternative = () => {
    return (
        <div className="product-alternative">
            <div className="product-alternative__title">Вам також можуть сподобатись</div>
            <ProductCarousel />
        </div>
    )
}

export default ProductAlternative;