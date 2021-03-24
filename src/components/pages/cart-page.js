import React from 'react';
import './cart-page.css';
import del from './delete.svg';
import add from './add.svg';
import minus from './minus.svg';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-title">Кошик</div>

            <div className="cart-item">
                <img src="https://splash.com.ua/images/38662-product/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg" alt="Montblanc Explorer Eau de Parfum 100ml" />
                <div className="cart-item-title">Montblanc Explorer Eau de Parfum 100ml</div>
                <div className="cart-item-count">1</div>
                <div className="cart-control-block">
                    <div className="cart-btn-block">
                        <img src={add} alt="add item" />
                        <img src={minus} alt="minus item" />
                        <img src={del} alt="delete item" />
                    </div>  
                    <div className="cart-item-sum">358 грн</div>
                </div>
            </div>

            <div className="cart-item">
                <img src="https://splash.com.ua/images/38662-product/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg" alt="Montblanc Explorer Eau de Parfum 100ml" />
                <div className="cart-item-title">Montblanc Explorer Eau de Parfum 100ml</div>
                <div className="cart-item-count">1</div>
                <div className="cart-control-block">
                    <div className="cart-btn-block">
                        <img src={add} alt="add item" />
                        <img src={minus} alt="minus item" />
                        <img src={del} alt="delete item" />
                    </div>  
                    <div className="cart-item-sum">358 грн</div>
                </div>
            </div>

            <div className="cart-total-block">
                <div className="cart-subtotal-title">Проміжний підсумок</div>
                <div className="cart-sum">550 грн</div>
                <div className="cart-delivery-title">Доставка</div>
                <div className="cart-sum">50 грн</div>
                <div className="cart-total-title">Підсумок</div>
                <div className="cart-total-sum cart-sum">36600 грн</div>
            </div>
        </div>
    )
}
export default Cart;