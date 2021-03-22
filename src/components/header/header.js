import React from 'react';
import logo from './logo.svg';
import cart from './shopping-bag.svg';
import search from './loupe.svg';
import './header.css';

const Header = ({numItems, total}) => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="serch-block">
                    <input type="text" placeholder="Пошук серед 12000 ароматів"/>
                    <button className="btn-search-submit">
                        <img src={search} alt="search button"/>
                    </button>
                </div>
                <div className="phone-block">
                    <div className="phone">(044) 599-21-44, (098) 151 31 05</div>
                    <div className="work-hours">пн-пт з 10 до 20, сб-нд з 11 до 16</div>
                </div>
                <div className="cart-block">
                    <img src={cart} alt="shopping cart"/>
                    <span className="items-in-cart">5</span>
                    <span className="total">50 грн</span>
                </div>
            </header>
        </>
    )
}

export default Header;