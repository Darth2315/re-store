import React from 'react';
import logo from './logo.svg';
import cart from './shopping-bag.svg';
import search from './loupe.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

const Header = ({numItems}) => {
    return (
        <>
            <header className="header">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="serch-block">
                    <input type="text" placeholder="Пошук серед 12000 ароматів"/>
                    <button className="btn-search-submit">
                        <img src={search} alt="search button"/>
                    </button>
                </div>
                <div className="phone-block">
                    <div className="phone">(044) 599-21-44</div>
                    <div className="work-hours">пн-пт з 10 до 20, сб-нд з 11 до 16</div>
                </div>
                <div className="cart-block">
                    <Link to="/cart">
                    <img src={cart} alt="shopping cart"/>
                    </Link>
                    
                    <span className="items-in-cart">{numItems}</span>
                </div>
            </header>
        </>
    )
}

const mapStateToProps = ({cartItems}) => {
    
    const countTotal = cartItems.reduce((prev, cur) => prev + cur.count, 0);

    return {
        numItems: countTotal
    }
}

export default connect(mapStateToProps)(Header);