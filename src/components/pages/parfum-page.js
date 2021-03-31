import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../rating-stars';
import ProductPageShare from '../product-page-share';

import './parfum-page.css';

import del from './fast.svg';
import bag from './shopping-bag.svg';

const ParfumPage = () => {
    return (
        <>
            <div className="parfum-wrapper">
                <div className="parfum-gallery">
                    <img src="https://splash.com.ua/images/39184-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-100-%D0%BC%D0%BB-%D1%82%D0%B5%D1%81%D1%82%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-2.jpg" alt="" />
                    <img src="https://splash.com.ua/images/39185-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-100-%D0%BC%D0%BB-%D1%82%D0%B5%D1%81%D1%82%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-3.jpg" alt="" />
                    <img src="https://splash.com.ua/images/39186-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-100-%D0%BC%D0%BB-%D1%82%D0%B5%D1%81%D1%82%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-4.jpg" alt="" />
                    <img src="https://splash.com.ua/images/39187-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-2-%D0%BC%D0%BB-%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA-vial-%D1%84%D0%BE%D1%82%D0%BE-5.jpg" alt="" />
                </div>
            
                <div className="parfum-main-photo">
                    <img src="https://splash.com.ua/images/38662-big/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg" alt=""/>
                </div>
                
                <div className="parfum-details">
                    <h1 className="parfum-title">Montblanc Explorer Eau de Parfum 100ml</h1>
                    <RatingStars/>
                    <div className="parfum-cost-block">
                        <div className="parfum-price">1030 грн</div>
                        <div className="parfum-price-for-ml">(10,3 грн за мл)</div>
                        <div className="parfum-old-price">1185 грн</div>
                        <div className="parfum-discount">знижка 15%</div>
                    </div>
                    <div className="parfum-delivery-block">
                        <img src={del} alt="delivery icon"/>
                        <Link to="delivery" className="parfum-delivery">Безкоштовна доставка по Україні</Link>
                    </div>
                
                <div className="parfum-add-to-bag">
                    <button className="btn-add-to-bag">
                        <img src={bag} alt="shopping bag"/>
                        до кошика
                    </button>
                    <div className="parfum-in-stock">У наявності</div>
                </div>
                <div className="parfum-also-available">Також доступний як...</div>
                <div className="parfum-also-block">
                    <div className="parfum-also-item">
                        <img src="https://splash.com.ua/images/39185-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-100-%D0%BC%D0%BB-%D1%82%D0%B5%D1%81%D1%82%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-3.jpg" alt=""/>
                        <div className="parfum-also-item-details">
                            <div className="parfum-also-item-cost">780 грн</div>
                            <div className="parfum-also-item-ml">30 ml, (26 грн/мл)</div>
                        </div>
                    </div>
                    <div className="parfum-also-item">
                        <img src="https://splash.com.ua/images/39187-pic/montblanc-explorer-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-2-%D0%BC%D0%BB-%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA-vial-%D1%84%D0%BE%D1%82%D0%BE-5.jpg" alt=""/>
                        <div className="parfum-also-item-details">
                            <div className="parfum-also-item-cost">42 грн</div>
                            <div className="parfum-also-item-ml">2 ml, (21 грн/мл)</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <ProductPageShare />
        </>
    )
}

export default ParfumPage;