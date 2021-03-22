import React from 'react';
import visa from './visa.svg';
import mastercard from './mastercard.svg';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-block">
                    <div className="footer-block-title">Допомога</div>
                    <a href="#">Центр підтримки</a>
                    <a href="#">Інформація про доставку</a>
                    <a href="#">Політика повернення товару</a>
                    <a href="#">Промокоди</a>
                    <a href="#">Контакти</a>
                    <a href="#">Інформація про COVID-19</a>
                </div>

                <div className="footer-block">
                    <div className="footer-block-title">Про нас</div>
                    <a href="#">Про SPLASH</a>
                    <a href="#">Корпоративна информація</a>
                    <a href="#">Конфіденційність та cookie</a>
                    <a href="#">Правила та умови</a>
                    <a href="#">Авторське право та гарантії</a>
                </div>

                <div className="footer-block">
                    <div className="footer-block-title">Більше від SPLASH</div>
                    <a href="#">Про SPLASH</a>
                    <a href="#">Блог</a>
                    <a href="#">Подарункові сертифікати</a>
                    <div className="payment">
                        Ми приймаємо
                        <div>
                            <img src={visa} alt="visa card" />
                            <img src={mastercard} alt="mastercard" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;